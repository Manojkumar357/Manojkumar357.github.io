//  qUerys

db.employees.insertOne({
    name:"Cathy G",
    email:"cathy@gmail.com",
    department:"IT",
    salary:3456,
    location:["AZ","TX"],
    date:Date()
}) 

db.employees.find()

//db.employees.find().skip(1) will skip first and all will display
//db.employees.find().limit(1) only display first becuase 1 is there
//db.employees.find().skip(1).lmit(1) dispaly second one
//db.employees.find().sort({name:1}) A TO Z it will provide the documants in ascending order
//db.employees.find().sort({name:-1})Z TO A it will provide in descending order
//db.employees.find().sort({name:1}).limit(1)

//db.employees.find({filter},{the filed we want})
//db.employees.find({department:"IT"})
//db.employees.find({},{name:1})//if you wna to display only name field with id
//db.employees.find({},{_id:0,name:1})//if you wna to display only name field 0 or 1 will can display 0 is flase 
//and 1 is true and we give false or true also for easy 0 and 1 
//in logic only id works if we dont wnat any filed dont give dont use 0 or 1 or true or flase it will not work

//db.employees.find({},{EmpName:"$name"}) it wil dispaly as EmpName we are not changing just display purpose
