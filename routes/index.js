var express = require('express');
var router = express.Router();
var success=require('../modules/success');
//var news=require('../modules/news');
var new1=success.find({});
//var news1=news.find({});

/* GET home page. */
router.get('/', function(req, res, next) {

      res.render('home');


  });

  router.get('/edit:id',function(req,res,next){
  var id=req.params.id;
  var edit=success.findById(id);
  edit.exec(function(err,data){
    res.render('success1',{title:'Edit Profile',row:data });
  });
});

router.post('/update',function(req,res,next){
console.log(req.body.id);
console.log(req.body.uname);
  var upd=success.findByIdAndUpdate(req.body.id,{

    signup:req.body.signup,
    username:req.body.uname,
    password:req.body.pass,
    fname:req.body.firstname,
    lname:req.body.lastname,
    email:req.body.email,
    mobnumber:req.body.mob,
    caste:req.body.caste,
    city:req.body.city,
    income:req.body.income,
    edu:req.body.edu,
    marks1:req.body.x,
    marks2:req.body.xii,
    age:req.body.age,
    land:req.body.land,
    disability:req.body.disability

  });
  upd.exec(function(err,data){

    res.render('success3',{title:'Profile Updated Successfully' });
      });
});

router.get('/delete:id',function(req,res,next){
var id=req.params.id;
var delete1=success.findByIdAndDelete(id);
delete1.exec(function(err,data){
  res.render('success3',{title:'Profile Deleted Successfully' });
});
});

  router.get('/faq', function(req, res, next) {

        res.render('faq');
  });
  router.get('/animate', function(req, res, next) {

        res.render('animate');
  });
router.get('/Signupstudent', function(req, res, next) {
    res.render('stu');
  });

  router.get('/Signupworker', function(req, res, next) {
      res.render('worker');
    });
    router.get('/Signupfarmer', function(req, res, next) {
        res.render('farmer');
      });


      router.post('/login/', function(req, res, next) {

          var uName=req.body.uname;
          var fpass=req.body.pass;


          var stuflt=new1.find({$and: [{username:uName},{password:fpass}]});

            stuflt.exec(function(err,data){

            res.render('success', { title: 'Your Profile',records:data });

 });
});



router.post('/scheme',function(req,res,next){

  if(req.body.caste=="open"&& req.body.signup=="STUDENT"){
        res.render('open');
  }
 else if(req.body.caste=="obc" && req.body.income<100000&& req.body.signup=="STUDENT") {
     res.render('obc');
 }
 else if(req.body.caste=="obc" && req.body.income>100000 && req.body.income<800000&& req.body.signup=="STUDENT") {
     res.render('obc1');
 }
 else if(req.body.caste=="vjnt" && req.body.income<100000&& req.body.signup=="STUDENT" ) {
     res.render('vjnt');
 }
 else if(req.body.caste=="vjnt" && req.body.income>100000 && req.body.income<800000&& req.body.signup=="STUDENT") {
     res.render('vjnt1');
 }
 else if(req.body.caste=="sbc" && req.body.income<100000&& req.body.signup=="STUDENT" ) {
     res.render('sbc');
 }
 else if(req.body.caste=="sbc" && req.body.income>100000 && req.body.income<800000&& req.body.signup=="STUDENT") {
     res.render('sbc1');
 }
 else if(req.body.caste=="st"&& req.body.signup=="STUDENT"){
       res.render('st');
 }
 else if( req.body.signup=="WORKER"){
       res.render('worsch');
 }
 else if( req.body.signup=="FARMER"){
       res.render('farsch');
 }
});



  router.post('/Signupstudent',function(req,res,next){
    //  res.render('stu');
  var stu1=new success({
       signup:req.body.signup,
       username:req.body.uname,
       password:req.body.pass,
       fname:req.body.firstname,
       lname:req.body.lastname,
       email:req.body.email,
       mobnumber:req.body.mob,
       caste:req.body.caste,
       city:req.body.city,
       income:req.body.income,
       edu:req.body.edu,
       marks1:req.body.x,
       marks2:req.body.xii,
       age:req.body.age,
       land:req.body.land,
       disability:req.body.disability

  });

      stu1.save();

    res.render('success3',{title:'Profile Created Successfully'});
});

router.post('/Signupworker',function(req,res,next){
  //  res.render('stu');
  var wor=new success({
       signup:req.body.signup,
     username:req.body.user,
      password:req.body.pass,

    fname:req.body.firstname,
     lname:req.body.lastname,
     email:req.body.email,
     mobnumber:req.body.mob,
      caste:req.body.caste1,
     city:req.body.city,
     income:req.body.income,
     edu:req.body.edu,
     age:req.body.age,
    disability:req.body.disability

});
    wor.save();

res.render('success3',{title:'Profile Created Successfully'});
});

router.post('/Signupfarmer',function(req,res,next){
  //  res.render('stu');
  var far=new success({
       signup:req.body.signup,
     username:req.body.uname,
      password:req.body.pass,

    fname:req.body.firstname,
     lname:req.body.lastname,
     email:req.body.email,
     mobnumber:req.body.mob,
     caste:req.body.caste,
      city:req.body.city,
      income:req.body.income,
       edu:req.body.edu,
       marks1:req.body.marks1,

       marks1:req.body.marks1,

     age:req.body.age,
     land:req.body.land,
    disability:req.body.disability

});
  far.save();

  res.render('success3',{title:'Profile Created Successfully'});
});
module.exports = router;
