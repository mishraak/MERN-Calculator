var express = require('express');

exports.calculate = function(req,res){
    //console.log(eval(req.body.exp));
    //res.send({num : -113})
  res.send({result : eval(req.body.exp)});
}


