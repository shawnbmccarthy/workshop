const indexEx = (() => {
    const setDB = (dbname='demo') => {
        db = db.getSiblingDB(dbname);
    };

    return {
        createIndex: (db, coll,  idx, opt) => {
            setDb(db);
            db[coll].createIndex(idx, opt);
        },
        explain: (db, coll,  q) => {
            setDb(db);
            printjson(db[coll].find(q).explain())
        },
        fullExplain: (db, coll,  q) => {
            setDb(db);
            printjson(db[coll].find(q).explain(true));
        }
    }
})();