import express from 'express'
import path from 'path'
import fs from 'fs'
import createThumb from './helpers/createThumb'

const imageProcessor = express.Router()

imageProcessor.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const width: string = req.query.width?.toString() || '400'
    const height: string = req.query.height?.toString() || '400'
    const imageName: string = req.query.name?.toString() || ''
    const imagePath: string = path.resolve(`assets/full/${imageName}`)
    const thumbPath = path.resolve(
      `assets/thumb/${width}x${height}-${imageName}`
    )
    if (fs.existsSync(thumbPath)) {
      res.sendFile(thumbPath)
    } else {
      await createThumb(parseInt(width), parseInt(height), imagePath, thumbPath)
      res.sendFile(thumbPath)
    }
  }
)

export default imageProcessor
