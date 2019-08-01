const indexEx = (() => {
    const setDB = (dbname='demo') => {
        db = db.getSiblingDB(dbname);
    };

    return {
        createIndex: (dbname, coll,  idx, opt) => {
            setDB(dbname);
            db[coll].createIndex(idx, opt);
        },
        explain: (dbname, coll,  q) => {
            setDB(dbname);
            printjson(db[coll].find(q).explain())
        },
        fullExplain: (dbname, coll,  q) => {
            setDB(dbname);
            printjson(db[coll].find(q).explain(true));
        }
    }
})();