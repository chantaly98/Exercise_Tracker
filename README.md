# Title: Excercise Tracker

## Description: 

A website that tracks excercise/workout entries into a single table. Add a new excercise entry or edit an exsisting one. This fullstack MERN project was built during CS290 - Web Development.

## How it's made:

This Exercise Tracker website, developed using React and MongoDB with Mongoose, allows users to seamlessly log and manage their workouts. The React frontend employs React Router for navigation, offering pages for adding, editing, and viewing exercises. The MongoDB backend stores exercise data, with Mongoose providing a structured schema. The application emphasizes simplicity, featuring a clear user interface with a header providing a brief overview and a footer displaying the modification date and copyright information. Users can effortlessly track and update their exercise routines through a straightforward and intuitive interface.

## How to run locally:

Backend (Server):
1) Open a terminal in the backend directory
2) Make sure node dependencies are installed "npm install"
3) From MongoDB get your connection string for the exercise collection, then create a ".env" file with the following:

MONGODB_CONNECT_STRING=mongodb+srv://username:password@cluster0.vm4kkbj.mongodb.net/exercises_db?retryWrites=true&w=majority
PORT=3000

**(Replace the string above with your own connection string from MongoDB and include your username and password)

4) Run "npm start"

Frontend (React App)

1) Open a separate terminal in the frontend directory
2) Make sure node dependencies are installed "npm install"
3) Create a ".env" file with the following: 

PORT=8000

4) Run "npm start" 
5) The application will be accessible at http://localhost:8000 in your web browser. 

MongoDB: 
1) Make sure MongoDB is installed and running on you machine.
2) If using a remote MongoDB instance, confirm that the connection string in the backend .env file is correct. 

