# Image Processing API

This is an API that can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping.

The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.

## Instructions
Run `npm install`

Run `npm run start`

Check `http://localhost:3000/`, this is the root of this api

Place the image you need to resize in `assets/full` folder.

As an example, if you have the image `fjord.jpg` in the `full` folder, after `npm run start`,

the server is running on port 3000, you can enter `http://localhost:3000/api/image/?name=fjord.jpg&width=200&height=200`

This will show the resized image with width = 200 and height = 200 on the page,

and a resized photo will appear in `assets/thumb` folder with the name `200x200-fjord.jpg`

Run `npm run test` to run jasmine tests

## Information

This is the first project of Udacity's full stack javascript program, the instructions are here:

`https://github.com/udacity/nd-0067-c1-building-a-server-project-starter`
