const readEx = (() => {
    const setDB = (dbname='demo') => {
        db = db.getSiblingDB(dbname);
    };

    return {
        //db -> name  of database, coll -> name of collection, q -> query to run
        findOneDoc: (db, coll, q) => {
            setDb(db);
            printjson(db[coll].findOne(q));
        },
        //db -> name of database, coll  -> name of collection, q -> query to run, limit -> limit for cursor
        FindDoc: (db, coll, q, limit=100) => {
            setDb(db);
            db[coll].find(q).limit(100).forEach(
                doc =>  {printjson(doc);}
            );
        },
        //db -> name of database, coll -> name  of collection, q -> query, p -> projection, limit -> limit for cursor
        findAndProject: (db, coll, q, p, limit=100) => {
            setDb(db);
            db[coll].find(q, p).limit(100).forEach(
                doc => {printjson(doc);}
            );
        }
    }
})();