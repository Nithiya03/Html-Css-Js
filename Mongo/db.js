
const { MongoClient } = require("mongodb");
let dbConnection
module.exports={
    connectToDb:(cb)=>{
        MongoClient.connect('mongodb+srv://Nithiya:Nithiya03@cluster0.dtnrx.mongodb.net/demo?retryWrites=true&w=majority')
        .then((client)=>{
            dbConnection=client.db()
            return cb()
        })
        .catch(err=>{
            console.log(err)
            return cb(err)
        })
    },
    getDb:()=>{
        return dbConnection
    }
}