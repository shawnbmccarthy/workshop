/*
 * Sample create functions exported to the createEx namespace
 */
const createEx = (() => {
    const setDB = (dbname='demo') => {
        db = db.getSiblingDB(dbname);
    };

    return {
        // db -> name of database, coll -> name of collection, doc -> json document to insert
        insertOne: (dbname, coll, doc) => {
            setDB(dbname);
            return  db.getCollection(coll).insertOne(doc);
        },
        // db -> name of database, coll -> name of collection, docs -> array of json documents
        insertMany: (dbname, coll, docs) => {
            setDB(dbname);
            return  db.getCollection(coll).insertMany(docs);
        }
    }
})();