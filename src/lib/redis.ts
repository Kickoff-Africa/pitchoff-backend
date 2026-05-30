import type { RedisOptions } from "ioredis"

const url = process.env.REDIS_URL
if (!url) throw new Error("Missing REDIS_URL")

export const redisConnection: RedisOptions = {
  ...(url.startsWith("redis://") || url.startsWith("rediss://")
    ? { url }
    : { host: "127.0.0.1", port: 6379 }),
  maxRetriesPerRequest: null, // required by BullMQ
}