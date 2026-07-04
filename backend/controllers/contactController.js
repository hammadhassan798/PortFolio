const sendMail = require("../services/mailService");

const sendContactEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields.",
      });
    }

    await sendMail(name, email, subject, message);

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};

module.exports = {
  sendContactEmail,
};