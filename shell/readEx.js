const readEx = (() => {
    const setDB = (dbname='demo') => {
        db = db.getSiblingDB(dbname);
    };

    return {
        //db -> name  of database, coll -> name of collection, q -> query to run
        findOneDoc: (dbname, coll, q) => {
            setDB(dbname);
            printjson(db[coll].findOne(q));
        },
        //db -> name of database, coll  -> name of collection, q -> query to run, limit -> limit for cursor
        FindDoc: (dbname, coll, q, limit=100) => {
            setDB(dbname);
            db[coll].find(q).limit(limit).forEach(
                doc =>  {printjson(doc);}
            );
        },
        //db -> name of database, coll -> name  of collection, q -> query, p -> projection, limit -> limit for cursor
        findAndProject: (dbname, coll, q, p, limit=100) => {
            setDB(dbname);
            db[coll].find(q, p).limit(limit).forEach(
                doc => {printjson(doc);}
            );
        }
    }
})();