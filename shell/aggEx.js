/*
 * simple aggregation demo against the data
 */
const aggEx = (() => {
    const setDB = (dbname='demo') => {
        db = db.getSiblingDB(dbname);
    };

    return {
        // db -> name of database, coll -> collection name, agg -> array of agg commands
        runAgg: (db, coll, agg) => {
            setDb(db);
            db[coll].aggregate(agg).forEach(
                doc => {printjson(doc);}
            );
        }
    };
})();