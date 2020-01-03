var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/success',{useNewUrlParser: true});
var db=mongoose.connection;

var newshcema=new mongoose.Schema({
  signup:String,
  username:String,
  password:String,
  fname:String,
  lname:String,
  email:String,
  mobnumber:Number,
  caste:String,
  city:String,
  income:Number,
  edu:String,
  marks1:Number,
  marks2:Number,
  age:Number,
  land:String,
  disability:String
  });
var success=new mongoose.model('success',newshcema);
db.on("connected",function(){
  console.log('Connected Successfully...');
});
db.on("disconnected",function(){
  console.log('Disconnected Successfully...');
});

module.exports=success;
