var db = function localConnect(){
  return require('mysql').createConnection({
    hostname  : 'localhost',
    user      : 'root',
    password  : 'root',
    database  : 'db-setudents'
  });
  connection.connect();
}
module.exports.localConnect = db;
