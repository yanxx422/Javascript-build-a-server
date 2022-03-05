import express from 'express';
import path from 'path';
import fs from 'fs';

const pathValidation = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const imagePath = path.resolve(`assets/full/${req.query.name}`);
  const { name } = req.query;
  const { width } = req.query;
  const { height } = req.query;

  if (!(name && width && height)) {
    res.status(400);
    next(
      'The following error occured processing your image remedy and ' +
        "try again: Error: Something is missing, specify image's name, width and height"
    );
  } else if (
    isNaN(parseInt(<string>width)) ||
    isNaN(parseInt(<string>height))
  ) {
    next(
      'The following error occured processing your image remedy and ' +
        'try again: Error: Use valid numbers for width and height'
    );
  } else if (fs.existsSync(imagePath)) {
    next();
  } else {
    res.status(400);
    next(
      'The following error occured processing your image remedy and ' +
        'try again: Error: Invalid file name'
    );
  }
};

export default pathValidation;
