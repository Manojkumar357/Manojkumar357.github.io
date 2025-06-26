//mongosh to connect to server in command prompt and to connec tto atlas then mongsh link
//we use cls to clear
//we can use show dbs to know the databas 
// show collections to see collection
//exit command  to move comand prompt 
// use lpua command


//db.users.insertOne({name:"Manoj",age:21}) to insert a document only one
// db.users.insertMany([
// {name:"Shwan",age:23},
// {name:"Chastity",age:60},
// ])
//show collection to know the creation
//db.users.find() to show the collections
//db.users.findOne() only first document
//db.users.drop() to delete the colelction


// db.users.insertOne({name:"Amy",age:25}) 
//db.employees.count() // gives number of documants

db.employees.insertMany([
    {
        name:"Amy",
        email:"amy@gmail.com",
        department:"HR",
        salary:2000,
        location:["NY","Tx"],
        date:Date()
    },
    {
        name:"Rafeal",
        email:"rafeal@gmail.com",
        department:"Admin",
        salary:1500,
        location:["OH","TX"],
        date:Date()

    }
])