var nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'TON LOGIN GMAIL ICI',
    pass: 'TON MOT DE PASSE ICI'
  }
});
console.log('gmailok');
module.exports = {
    init: function(req, callback) {
      let mailOptions = {
        from: 'Pierre - propierrebouet@gmail.com', // sender address
        to: req.body.email, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.text, // plain text body
        html: req.body.text// html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        } else {
          callback(200, info);
          console.log('Message %s sent: %s', info.messageId, info.response);
        }
      });
    }
  }
