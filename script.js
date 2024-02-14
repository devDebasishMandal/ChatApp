let user="";
const btn =document.getElementById("btn");
const userInput=document.getElementById("user");
const login=document.getElementById("login");
const main=document.getElementById("main");
btn.addEventListener('click',(e)=>{
e.preventDefault();
user=userInput.value;
if(user){
login.style.display="none";
main.style.display="block";
}
userInput.value="";
})

