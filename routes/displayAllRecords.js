var connection = require('../routes/db').localConnect();

module.exports = function DisplayAllRecords(req, res, next){
  connection.query('Select * from student', function(err, rows){
    if (err) {
      console.log("Error Selecting : %s ", err);
    }else{
      res.render('student', {page_title: "List of students", data: rows});
    }
  });
}
