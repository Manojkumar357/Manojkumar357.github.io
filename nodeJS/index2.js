//josn web token
const jwt=require('jsonwebtoken');
const SECRET="sometext";

// const user={
//     name:"John",
//     email:"john@gmail.com",
//     role:"admin"
// }

// const token=jwt.sign(user,SECRET,{expiresIn:"1h"});
// console.log(token);

const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NTE2MDUwNDMsImV4cCI6MTc1MTYwODY0M30.FzJBHgwHhGxsynV2TTIleMEQnFYjF1bPA6-OU1HN2MQ"

//Decoding

const user=jwt.verify(token,SECRET);
console.log(user);

