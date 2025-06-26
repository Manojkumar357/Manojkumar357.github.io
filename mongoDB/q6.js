// Indexes  whcih we can acess faster or search
db.employees.getIndexes()
//show indexes in current collections

db.employees.createIndex({email:1})
// creates the email index
//if dont need index then 
db.employees.dropIndex()

//for performance show we can see by below see the field docsexaimned
db.employees.find({email:"john1@gmail.com"}).explain("executionStats")

