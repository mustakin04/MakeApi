const nodemailer = require("nodemailer");
async function emailverification(email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "mustakinhasan60@gmail.com",
      pass: "wnmp idyv tixz kywn",
    },
  });
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch" mustakinhasan60@gmail.com',
    to: email,
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body
  });
}
module.exports = emailverification;
