let users=[]
let user={}
const validateUser=()=>{
    let email=document.getElementById('email').value;
     let password=document.getElementById('password').value;
    const found=users.find((value)=>value.email===email && value.password===password);
    if(found){
        showHome()
    }else{
        document.getElementById("error").innerHTML="Access Denied";
    }
}
const loginForm=()=>{
    const str=`
    <h1>Login Form</h1>
    <p id="error" class='err'></P>
       <p>Email:<input type='email' id='email'></p><br>
    <p>Passwrod:<input type='password' id='password'></p><br>
    <button onclick='validateUser()'>Submit</button><br><br>
   <p>New User? then Click on<button onclick='RegisterForm()'>Create Account </button></P>
   <h2>LIST OF USERS </h2>
   <h3 id='userlist'></h3>
    `
    root.innerHTML=str
    showUsers();
}

const RegisterForm=()=>{
    const str=`
  <h1>Register Form</h1>
    <p>Name:<input type='text' id='name'></p><br>
    <p>Email:<input type='email' id='email'></p><br>
    <p>Passwrod:<input type='password' id='password'></p><br>
    <button onclick='saveUser()'>Submit</button><br>
    <p>Already a User?<button onclick='loginForm()'>Login</button></p>
    `
    root.innerHTML=str
}

const showHome=()=>{
    const str=`
    <h1>Welocme Home<h1>
    <button onclick='loginForm()'>Logout</button>
    `
    root.innerHTML=str
}

const saveUser=()=>{
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    user.name=name;
    user.email=email;
    user.password=password;
    users.push(user);
    loginForm()
}

const showUsers=()=>{
    const userList=document.getElementById("userlist");
    let h='<ol>'
    for(let i=0;i<users.length;i++){
        h+=`<li>Name: ${users[i].name} Email: ${users[i].email}</li>`
    }
    h+='</ol>'
    userList.innerHTML=h;
}