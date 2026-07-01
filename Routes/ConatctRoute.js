const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, phone, city, message, pincode , timeSlot } = req.body;
    console.log("API HIT");
    console.log(req.body);

  if (!name || !email || !phone || !city || !message || !pincode || !timeSlot) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields",
    });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(500).json({
      success: false,
      message: "Email service is not configured",
    });
  }

  

  try {
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   connectionTimeout: 10000,
    //   greetingTimeout: 10000,
    //   socketTimeout: 15000,
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

await transporter.verify();
console.log("SMTP Connected");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "fakeid1266@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Address:</strong> ${city}</p>
        <p><strong>Mobile:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Pincode:</strong> ${pincode}</p>
        <p><strong>Time Slot:</strong> ${timeSlot}</p>
      `,
    });

    res.json({
      success: true,
      message: "Email Sent Successfully",
    });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       message: "Email Failed",
//     });
//   }
// });

} catch (err) {
  console.error("EMAIL ERROR");
  console.error("Message:", err.message);
  console.error("Code:", err.code);
  console.error(err);

  res.status(500).json({
    success: false,
    message: err.message,
    code: err.code,
  });
}});

module.exports = router;
