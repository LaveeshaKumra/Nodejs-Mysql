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
  var sql="insert into emp values ?";
  var values=[
    [100,'john','highwaay 71'],
    [2,'peter','vcvcuds'],
    [45,'werctv','ytdcvycv  udy g']
  ];

  con.query(sql,[values],function(err1,result){
    if(err1) throw err1;
    console.log(result.affectedRows+"row inserted");
  });
});
