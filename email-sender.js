var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'ilydeen',
  auth: {
    user: 'ibraham.pharrell@ilydeen.org',
    pass: 'uzdru7A?'
  }
});

var mailOptions = {
  from: 'ibraham.pharrell@ilydeen.org',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});