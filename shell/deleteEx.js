/*
 * simple shell module
 */
const deleteEx = (() => {
    const setDB = (dbname='demo') => {
        db = db.getSiblingDB(dbname);
    };

    return {
        deleteOneDoc: (db, coll, q) => {
            setDb(db);
            return db[coll].deleteOne(q);
        },
        deleteManyDocs: (db, coll, q) => {
            setDb(db);
            return db[coll].deleteMany(db, coll, q);
        }
    }
})();