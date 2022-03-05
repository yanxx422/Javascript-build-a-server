import fs from 'fs';
import path from 'path';
import createThumb from '../routes/middleware/helpers/createThumb';

describe('test create image thumb functionality', () => {
  it('Should create a re-sized image file in the thumb directory', async () => {
    const width = '200';
    const height = '300';
    const imageName = 'fjord.jpg';
    const imagePath = path.resolve(`assets/full/${imageName}`);
    const thumbPath = path.resolve(`assets/thumb/${width}x${height}-${imageName}`);
    expect(async () => {
      await createThumb(parseInt(width), parseInt(height), imagePath, thumbPath);
    }).not.toThrow();
    fs.unlinkSync(thumbPath);
  });
});
