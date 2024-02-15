const express = require("express");
const socketIo = require("socket.io");
const http = require("http"); //native node modules
const  Socket  = require("engine.io");

const serverClass = socketIo.Server;
const app = express(); // this is an pure express server;

//http server
const httpServer = http.createServer(app);
// making socketIo compatible server
const io = new serverClass(httpServer);
//on connecting io gives us socket
//making the connection event(.on ===addEventListener)
io.on("connection", (socket) => {
  //io is unique.
  //everytime somone hits connection io provied a unique socket.
  socket.on("secrete message",(data)=>{
  //--socket.emit in frontend triggers the socket.on here
  //now we need io to emit the data in all direction
     io.emit("io secrete message",data);
  })
});

//serving static files in express
// app.use(express.static("public"));
app.use(express.static(("public")));
// app.get('/',(req,res)=>{
//     res.send('');
// })
httpServer.listen(3000, () => {
  console.log("server started on port 3000");
});
