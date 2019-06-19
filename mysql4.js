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
  var sql="insert into emp values (1,'ajay','chd')";
  con.query(sql,function(err1,result){
    if(err1) throw err1;
    console.log("row inserted");
  });
});
