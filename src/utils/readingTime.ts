import readingTime from 'reading-time'

export function getReadingTime(body: string): number {
  return Math.ceil(readingTime(body).minutes)
}
