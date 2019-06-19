var mysql=require("mysql");
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"um781"
});
con.connect(function(err){
  if(err) throw err;
  console.log("connected");
  var sql="select * from emp";
  con.query(sql,function(err1,result,fields){
    if(err1) throw err1;
    console.log(result);
  });
});
