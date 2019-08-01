const updateEx = (() => {
    const setDB = (dbname='demo') => {
        db = db.getSiblingDB(dbname);
    };
    
    return {
        updateOneDoc: (db, coll, q, u) => {
            setDB(db);
            /*
             * your code here
             */
        },
        upsertOneDoc:  (db, coll, q, u) => {
            setDB(db);
            /*
             * your code here
             */
        }
    }
})();