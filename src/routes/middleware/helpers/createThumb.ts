import sharp from 'sharp'

export default async function createThumb(
  width: number,
  height: number,
  infile: string,
  outfile: string
): Promise<void> {
  try {
    await sharp(infile).resize(width, height).toFile(outfile)
  } catch (err) {
    console.error(err)
  }
}
