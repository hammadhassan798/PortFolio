const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = async (name, email, subject, message) => {

  const mailOptions = {
    from: process.env.EMAIL_USER,

    to: process.env.EMAIL_USER,

    subject: `Portfolio Contact | ${subject}`,

    html: `
      <h2>New Portfolio Contact</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Subject:</strong> ${subject}</p>

      <hr/>

      <p>${message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;