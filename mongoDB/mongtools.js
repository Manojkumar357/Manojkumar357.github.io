// mongodump -d lpua -o D:\lpubackupmongo
//restoring in 
//mongoerestore -d lpua  D:\lpubackupmongo\lpua

//regex operator
 
db.employees.find({name:{$regex:"Cathy"}})
// makes case insentive  
db.employees.find({name:{$regex:"Cathy",$options:"i"}})
// All letteers begin with C
db.employees.find({name:{$regex:"^C"}})
// ends with y
db.employees.find({name:{$regex:"y$"}})