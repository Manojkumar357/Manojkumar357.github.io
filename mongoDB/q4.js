//operator
//$eq is ==
//$gt is >
//$gte is >=
//$lt is<
//$lte is <=
// $ne is !=
//$or:[{},{}]
//$and:[{},{}]
db.employees.find({department:{$eq:"IT"}})
db.employees.find({salary:{$gt:3000}})
db.employees.find({salary:{$gte:3000}})
db.employees.find({salary:{$lt:3000}})
db.employees.find({salary:{$lte:3000}})
db.employees.find({salary:{$ne:3000}})
db.employees.find({salary:{$ne:3000},department:{$eq:"IT"}},{_id:0,name:1})
db.employees.find({salary:{$ne:3000},department:{$eq:"IT"}},{_id:0,name:1}).limit(1)


db.employees.find().sort({salary:-1}).limit(2)//sorting top two

 db.users.insertMany([{name:"John",email:"John@gmail.com",password:"abc123"},
 {name:"Shyam",email:"shyam@gmail.com",password:"cde123"},
 {name:"Ram",email:"Ram@gmail.com",password:"efg123"},])

// db.employees.find({$and:[{},{}]})
 db.employees.find(
    {$and:[{salary:{$ne:3000},department:{$eq:"IT"}}]}
 )

