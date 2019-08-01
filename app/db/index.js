const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.MURL, {useNewUrlParser: true});

const getDatabase = async () => {
    if(! client.isConnected()){
        await client.connect();
    }
    return client.db();
};

module.exports.getDatabase =  getDatabase;