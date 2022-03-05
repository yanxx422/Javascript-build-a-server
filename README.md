# Image Processing API

This is an API that can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping.

The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.

## Instructions
Run `npm install` to install dependencies

Run `npm run lint` to use eslint and prettier


Run `npm run test` to run jasmine tests

### How to Start the Server

Run `npm run dev` to run nodemon on src/server/index.ts in development mode

Run `npm run start` to run node on build/server/index.js

Check `http://localhost:3000/`, this is the root of this api, it should say "Server is running" upon success.

Place the image you need to resize in `assets/full` folder, you can then customize width and height for that image! 

The result will show on the page and a thumbnail will be saved in `assets/thumb` folder.

### An Example 

As an example, if you have the image `fjord.jpg` in the `assets/full` folder, after `npm run start` or  `npm run dev`,

the server is running on port 3000, you can enter `http://localhost:3000/api/image/?name=fjord.jpg&width=200&height=200` on the browser, 

this will show the resized image with width = 200 and height = 200 on the page,

and a resized photo will appear in `assets/thumb` folder with the name `200x200-fjord.jpg`


## Information

This is the first project of Udacity's full stack javascript program, the instructions are here:

`https://github.com/udacity/nd-0067-c1-building-a-server-project-starter`
