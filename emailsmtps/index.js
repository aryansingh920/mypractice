const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const app = express();
const ajax = require('ajax');
// const Email = require(__dirname+'/smtp.js');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render('root', {

  });
});

app.post("/", function(req, res) {
  var Email = {
    send: function(a) {
      return new Promise(function(n, e) {
        a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
        var t = JSON.stringify(a);
        Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) {
          n(e)
        })
      })
    },
    ajaxPost: function(e, n, t) {
      var a = Email.createCORSRequest("POST", e);
      a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function() {
        var e = a.responseText;
        null != t && t(e)
      }, a.send(n)
    },
    ajax: function(e, n) {
      var t = Email.createCORSRequest("GET", e);
      t.onload = function() {
        var e = t.responseText;
        null != n && n(e)
      }, t.send()
    },
    createCORSRequest: function(e, n) {
      var t = new XMLHttpRequest;
      return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
    }
  };
  Email.send({
    SecureToken: "cc92afa3-d222-4d5e-900b-a4ace94e32d3",
    To: 'aryan@zigy.in', //reciever
    From: req.body.email, //sender
    Subject: "hi aryan is the subject" + req.body.name,
    Body: req.body.msg,
  }).then(
    message => {
      if (message == 'ok') {
        alert("message delivered");
      } else {
        alert("message not delivered")
      }
    }
  );
  console.log(req.body.name);
  res.redirect('/');
});

app.listen(3000, function(req, res) {
  console.log("running on port 3000");
})
