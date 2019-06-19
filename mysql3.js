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
  var sql="create table emp(empno int(20),name varchar(20),address varchar(20))";
  con.query(sql,function(err,result){
    if(err) throw err;
    console.log("table created ");
  });
});
