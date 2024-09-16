

// import jwt from 'jsonwebtoken'

// //create token
// var token = jwt.sign({ Name: 'Node.js' }, 'privateKey',{expiresIn:60});
// console.log(token)

// //verify token
// try{
// var decoded = jwt.verify(token, 'privateKey');
// console.log("valid token")
// console.log(decoded)
//  }
// catch(erro){
//   console.log("Invalid token")
// }

// //2 types of module commonjs & ES(use)

import dotnev from "dotenv";
import Application from "./app";

dotnev.config();
// create the instance of an Application class from app.ts once created call start method of application class
(async ()=>{
  const app = Application.instance()
  app.start()
  
})();

// const app = express() // app is obj
// const port = 3000


//use app instance  by using use method (app.use)
// app.use("/user", UserRouter) 
//path , handler 
//UserRouter is mounted on path /user when there is req for /user this UserRouter will take for all req



