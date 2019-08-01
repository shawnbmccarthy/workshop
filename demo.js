/*
 * to use:
 * > cd path/to/workshop
 * > mongo "MONGO_URL" ./demo.js --shell
 * PRIMARY:>  createEx.insertOne('database', 'collection', {k: 'value'});
 */
load('./shell/createEx.js');
load('./shell/readEx.js');
load('./shell/updateEx.js');
load('./shell/deleteEx.js');
load('./shell/indexEx.js');
load('./shell/aggEx.js');