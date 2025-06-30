//
//Aggregate dispaly purpose
// operator $cond to check
db.employees.aggregate([
{$project:{_id:0,name:1,dept:"$department"}}
])

// checking the every filed and ehich are grater get grades to give graDES
db.employees.aggregate([
    {$project:{_id:0,name:1,salary:1,
        Grade:{$cond:[{$gt:["$salary",2000]},"Grade A","Grade B"]}

    }}
])

//using if
db.employees.aggregate([
    {$project:{_id:0,name:1,salary:1,
        Grade:{$cond:{if:{$gt:["$salary",2000]},
        then:"Grade A",
        else:"Grade B"}
}

    }}
])


// Add a new filed in str slaary in employees
//store "2500" for IT employees
//store "1000" for other employess
//4proejct opeartor in aggregte is only for diaplaying not for updating

db.employees.updateMany(
    {department:"Admin"},
    {$set:{strSalary:"1000"}}
)
//or

//$convert operator converting string to integer or any ohter
db.employees.aggregate([
    {$project:{_id:0,name:1,department:1,Sal:{$convert:{input:"$strSalary",to:"int"}}}},
    {$group:{_id:"_id",total:{$sum:"$Sal"}}}
])
//creating collections suiogn$out
db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        department:1,
        Sal:{$convert:{input:"$strSalary",to:"int"}}

    }},
    {$group:{_id:"$department",total:{$sum:"$Sal"}}},
    {$out:"depWiseSalary"}
])


// to live upadtion 
db.createView("ViewName","collection name",["aggregatequery"])