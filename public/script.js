let socket=io();//this calls the io.on function ans creates a connection 
//it gives us a socket in the socket variable.

let user="";

const btn =document.getElementById("btn");
const userInput=document.getElementById("user");
const login=document.getElementById("login");
const main=document.getElementById("main");
const textinput=document.getElementById("textInput");
const sendBtn=document.getElementById("sendBtn");
const messagesContainer=document.getElementById("messages");
// alert("helll1");
btn.addEventListener('click',(e)=>{
e.preventDefault();
user=userInput.value;
if(user){
login.style.display="none";
main.style.display="block";
}
userInput.value="";
})

sendBtn.addEventListener("click",(e)=>{
e.preventDefault();
//collectiing data
let data={
    id:socket.id,
    username:user,
    message:textinput.value,
}
//to emit the message in all direction
//secrete message is my own event
socket.emit("secrete message",data);
// rendring messagein screen
renderMessage(data,"SENT");
})


function renderMessage(data , messageType){
    // alert("helll333");
    const textMessage=document.createElement("p");
    textMessage.innerText = `${data.username} : ${data.message}`;
    // alert(textMessage);
    if(messageType==="SENT"){
    textMessage.setAttribute("class","text sent");
    }else if(messageType==="RECIEVED"){
    textMessage.setAttribute("class","text");
    }
    // alert(messageType);
    messagesContainer.append(textMessage);
    textinput.value="";
}


// when io is emmiting data to catch the same
socket.on("io secrete message",(data)=>{
    // this data has socket id
    //so to not recieve our own messages
    // we check that the id sent form backend(data.id) is not same as 
    // our  local id (socket.id).
    if(data.id !== socket.id){
        renderMessage(data,"RECIEVED");
    }
    
})