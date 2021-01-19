const mailgun = require("mailgun-js");
require("dotenv").config();

exports.handler = function (event, context, callback) {
  const theBody = JSON.parse(event.body);

  const DOMAIN = process.env.MAILGUN_DOMAIN;
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API,
    domain: DOMAIN,
  });
  const data = {
    from: theBody.email,
    to: process.env.TO_EMAIL,
    subject: `You are recieving this email from ${theBody.name}`,
    text: theBody.message,
  };
  mg.messages().send(data, (error, body) => {
    if (error) {
      return console.log(error);
    }
    callback(null, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: "Mail sent",
    });
  });
};
