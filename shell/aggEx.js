/*
 * simple aggregation demo against the data
 */
const aggEx = (() => {
    const setDB = (dbname='demo') => {
        db = db.getSiblingDB(dbname);
    };

    return {
        // db -> name of database, coll -> collection name, agg -> array of agg commands
        runAgg: (dbname, coll, agg) => {
            setDB(dbname);
            db[coll].aggregate(agg).forEach(
                doc => {printjson(doc);}
            );
        }
    };
})();