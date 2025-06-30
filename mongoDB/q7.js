//Aggrgation more    to find() performance wise it is better
//Aggragation pipeline for grouping and getting compound results
//pull opration
//lookup opration
db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{name:1,salary:1}},
    {$sort:{salary:1}},
    {$limit:2}
])// we get name slaary of department "IT"

db.employees.aggregate([
    {$group:{
        _id:"department",
        total:{$sum:"$salary"}
    }},
    
])// we will get answer total of all salaries in department

db.employees.aggregate([
    {$project:{name:0}}
])//name will not display everything will be displayed // we chnage it also empname:$name
//multiplaying 


db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        bonus:{$multiply:["$salary",2]}
    }
}
])// it is adding the bonus field and multiply rhe slaraies


db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{
        name:1,
        email:1,
        salary:1
    }}
])

// display annual salalry of all employees

db.employees.aggregate([
    {$project:{
        salary:1,
        AnnSalary:{$multiply:["$salary",12]}
    }}
])

//display employees whose salary is greater than 3000 and show CTC instead of salary field
db.employees.aggregate([
    {$match:{salary:{$gt:3000}}},
    {$project:{
        CTC:"$salary"
    }}
])

//

db.students.insertOne(
    {
        name:"Alice Johnson",
        age:23,
        courses:["Math","Physics"],
        enrolled:true
    }
)
db.students.insertMany([
    {
        name:"Tom",
        age:22,
    },
    {
        name:"Sara",
        age:24
    },
    {
        name:"Mike",
        age:21
    }
])
//calculate avg age of students

db.students.aggregate([
    {$group:{
        _id:"age",
        avgAge:{$avg:"$age"}
    }}
])
//Update the age of studnet to 24 alison 
db.students.updateMany(
    {name:"Alice Johnson"},
    {$set:{age:24}}
)
//Add  a new courses Chemisrtry to  a student courses array if not exist
db.students.updateMany(
    {},
    {$addToSet:{courses:"Chemistry"}}
)
// avg
db.students.aggregate([
    {$group:{_id:null,}}
])

db.students.aggregate([

])

db.address.insertOne(
    {
        studentId:ObjectId('685cdd85cc3084fdf6748a60'),
        city:"",
        country:"USA"
    }
)

// used to connect one other 
db.students.aggregate([
    {$lookup:{
        from:"address",
        localField:"_id",
        foreignField:"studentId",
        as:"address"
    }},
    {$unwind:"$address"},
    {$project:{name:1,"address.city":1,"address.country":1}}
])//$unwind used to unwind array to object  without it we get address as a array

//example
db.employees.aggregate([
    {$project:{name:1,location:1}},
    {$unwind:"$location"}
])
























