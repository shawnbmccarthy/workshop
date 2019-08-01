/*
 * Sample create functions exported to the createEx namespace
 */
const createEx = (() => {
    const setDB = (dbname='demo') => {
        db = db.getSiblingDB(dbname);
    };

    return {
        // db -> name of database, coll -> name of collection, doc -> json document to insert
        insertOne: (db, coll, doc) => {
            setDb(db);
            return  db[coll].insertOne(doc);
        },
        // db -> name of database, coll -> name of collection, docs -> array of json documents
        insertMany: (db, coll, docs) => {
            setDb(db);
            return  db[coll].insertMany(docs);
        }
    }
})();