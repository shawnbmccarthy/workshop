/*
 * simple shell module
 */
const deleteEx = (() => {
    const setDB = (dbname='demo') => {
        db = db.getSiblingDB(dbname);
    };

    return {
        deleteOneDoc: (dbname, coll, q) => {
            setDB(dbname);
            return db[coll].deleteOne(q);
        },
        deleteManyDocs: (dbname, coll, q) => {
            setDB(dbname);
            return db[coll].deleteMany(db, coll, q);
        }
    }
})();