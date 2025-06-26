//Updation of MongoDB
 // and delttion of mongogDB from 65
db.employees.updateOne({},{$set:{}})//same like find first one filter and second is updation
db.employees.updateMany({},{})//so many

db.employees.updateOne(
    {email:"john@gmail.com"},
    {$set:{salary:2000}}
)//updates the slaary of john@gmaill.com

db.employees.updateMany({},
    {$set:{points:1}}
)//updates all the documents even thoguh there is no points field it will add it

db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:1}}
)// increments the point where dep is IT inc is operator
db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:3}}
)// we can use -1 also to decrease


db.employees.updateMany({},
    {$rename:{points:"score"}}
)// Renaming to all documents to score

// unset operator to remove a field 
db.employees.updateMany({},
    {$unset:{score:""}}
)


//push operator to create  a array add to the document
db.employees.updateMany({},
{$push:{skills:"Python"}}
)
db.employees.updateMany(
    {email:"john@gmail.com"},
{$push:{skills:"MERN"}}
)
//pull operator to remove
db.employees.updateMany(
    {email:"john@gmail.com"},
{$pull:{skills:"MERN"}}
)// if we use skills:1 it will remove the last remove -1 first one will removed
// if use multiple it will insert that time to avoid that we use addToSet
db.employees.updateMany(
    {email:"john@gmail.com"},
{$addToSet:{skills:"MERN"}}
)// use this for uniqueness it will not upadte if it is already present

db.employees.updateOne(
    {email:"brian@gmail.com"},
{$set:{name:"Brian"}}
)// it will not matching so it will not update
db.employees.updateOne(
    {email:"brian@gmail.com"},
{$set:{name:"Brian"}},
{upsert:true}
)//it will update if present if not it will insert as a sperate document

//deletion of document not  field
db.employees.deleteOne(
    {email:"brian@gmail.com"}
)
db.employees.deleteMany({})// condition matched delete all of it

























