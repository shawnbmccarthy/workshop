const updateEx = (() => {
    const setDB = (dbname='demo') => {
        db = db.getSiblingDB(dbname);
    };
    
    return {
        updateOneDoc: (dbname, coll, q, u) => {
            setDB(dbname);
            /*
             * your code here
             */
            return db[coll].updateOne(q, u);
        },
        upsertOneDoc:  (dbname, coll, q, u) => {
            setDB(dbname);
            /*
             * your code here
             */
            return db[coll].updateOne(q, u, {upsert: true});
        },
        updateManyDocs: (dbname, coll, q, u) => {
            setDB(dbname);
            /*
             * your code here
             */
            return db[coll].updateMany(q, u);
        },
        upsertManyDocs:  (dbname, coll, q, u) => {
            setDB(dbname);
            /*
             * your code here
             */
            return db[coll].updateMany(q, u, {upsert: true});
        }
    }
})();