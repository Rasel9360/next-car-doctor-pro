const { MongoClient, ServerApiVersion } = require('mongodb');
let db;
export const connectDB = async () => {
    if (db) return db
    try {
        const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bhgag9l.mongodb.net/?appName=Cluster0`;
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
       db = client.db('car-doctor-pro')
       return db
    } catch (error) {
        console.log(error);
    }
}