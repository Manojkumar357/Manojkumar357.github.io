const loginForm=()=>{
    const str=`
    <h1>Login Form</h1>
    <button onclick='showHome()'>Submit</button><br><br>
   <p>New User? then<button onclick='RegisterForm()'>Create Account </button></P>
    `
    root.innerHTML=str
}

const RegisterForm=()=>{
    const str=`
    <h3>Register Form<h3>
    <button onclick='showHome()'>Submit</button><br>
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