import { Readable } from "node:stream"
import { assertCloudinaryConfigured, cloudinary } from "../lib/cloudinary.js"

const PITCH_DECK_FOLDER =
  process.env.CLOUDINARY_PITCH_DECK_FOLDER ?? "pitchoff/pitch-decks"

export type PitchDeckUploadResult = {
  url: string
  publicId: string
  fileName: string
}

function buildPitchDeckDeliveryUrl(
  publicId: string,
  resourceType: "image" | "raw"
) {
  return cloudinary.url(publicId, {
    resource_type: resourceType,
    format: "pdf",
    secure: true,
  })
}

async function uploadToCloudinary(
  buffer: Buffer,
  options: {
    resource_type: "image" | "raw"
    folder?: string
    format?: string
  }
) {
  return new Promise<import("cloudinary").UploadApiResponse>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: PITCH_DECK_FOLDER,
        resource_type: options.resource_type,
        format: options.format,
        use_filename: true,
        unique_filename: true,
        overwrite: false,
      },
      (error, uploadResult) => {
        if (error) {
          reject(error)
          return
        }
        if (!uploadResult) {
          reject(new Error("Cloudinary upload returned no result"))
          return
        }
        resolve(uploadResult)
      }
    )

    Readable.from(buffer).pipe(uploadStream)
  })
}

export async function uploadPitchDeckToCloudinary(input: {
  buffer: Buffer
  fileName: string
}): Promise<PitchDeckUploadResult> {
  assertCloudinaryConfigured()

  let result: import("cloudinary").UploadApiResponse
  let resourceType: "image" | "raw" = "image"

  try {
    result = await uploadToCloudinary(input.buffer, {
      resource_type: "image",
      format: "pdf",
    })
  } catch {
    result = await uploadToCloudinary(input.buffer, {
      resource_type: "raw",
      format: "pdf",
    })
    resourceType = "raw"
  }

  const deliveryResourceType =
    result.resource_type === "raw" ? "raw" : resourceType

  return {
    url: buildPitchDeckDeliveryUrl(result.public_id, deliveryResourceType),
    publicId: result.public_id,
    fileName: input.fileName,
  }
}
