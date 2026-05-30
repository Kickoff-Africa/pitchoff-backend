import multer from "multer"

export const PITCH_DECK_MAX_BYTES = 5 * 1024 * 1024

export const pitchDeckUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: PITCH_DECK_MAX_BYTES, files: 1 },
  fileFilter: (_req, file, cb) => {
    const isPdf =
      file.mimetype === "application/pdf" ||
      file.originalname.toLowerCase().endsWith(".pdf")

    if (!isPdf) {
      cb(new Error("Only PDF pitch decks are allowed"))
      return
    }

    cb(null, true)
  },
})
