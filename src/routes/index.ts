import express from 'express';
import pathValidation from './middleware/pathValidation';
import imageProcessor from './middleware/imageProcessing';

const routers = express.Router();

const middleware = [pathValidation, imageProcessor];
routers.use(
  '/image',
  middleware,
  (req: express.Request, res: express.Response): void => {
    res.send('success!');
  }
);
export default routers;
