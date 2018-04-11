# React-Express Application with JWT Authentication

### Overview

Sample application using Node, Express, React, Bootstrap, Mongoose and JWT for authentication.

### Installation + Running

1. `git clone` this repository to your local machine

2. run `npm run setup`

3. edit envorinment variables in `.env` file 


   ```
   JWT_SECRET=TOPSECRET
   MONGODB_URI=mongodb://localhost/react-express-jwt
   PORT=3001
   ```


4. By default Node Server will run on 3001 and webpack-dev-server on 3000
5. Make sure that mongodb is running
6. run `npm start` in main folder, then head over to `cd ./client`, and run `npm start` again to start webpack-dev-server.
7. Create new user via Signup Form