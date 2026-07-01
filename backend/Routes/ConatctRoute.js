// const express = require("express");
// const nodemailer = require("nodemailer");

// const router = express.Router();

// router.post("/contact", async (req, res) => {
//   const { name, email, phone, city, message, pincode , timeSlot } = req.body;
//     console.log("API HIT");
//     console.log(req.body);

//   if (!name || !email || !phone || !city || !message || !pincode || !timeSlot) {
//     return res.status(400).json({
//       success: false,
//       message: "Please fill all required fields",
//     });
//   }

//   if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//     return res.status(500).json({
//       success: false,
//       message: "Email service is not configured",
//     });
//   }

  

//   try {
// const transporter = nodemailer.createTransport({
//   host: "smtp-relay.brevo.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.BREVO_USER,
//     pass: process.env.BREVO_PASS,
//   },
// });

// await transporter.verify();
// console.log("SMTP Connected");

//     console.log("Before sendMail");

// await transporter.sendMail({
//   from: `"Enagic Bharat" <${process.env.BREVO_USER}>`,
//   to: "fakeid1266@gmail.com",
//   replyTo: email,
//   subject: "New Contact Form Submission",
//   html: `
//     <h2>New Contact Request</h2>

//     <p><b>Name:</b> ${name}</p>
//     <p><b>Email:</b> ${email}</p>
//     <p><b>Phone:</b> ${phone}</p>
//     <p><b>City:</b> ${city}</p>
//     <p><b>Pincode:</b> ${pincode}</p>
//     <p><b>Time Slot:</b> ${timeSlot}</p>

//     <hr>

//     <p>${message}</p>
//   `,
// });

//     console.log("After sendMail");

//     res.json({
//       success: true,
//       message: "Email Sent Successfully",
//     });


// } catch (err) {
//   console.error("EMAIL ERROR");
//   console.error("Message:", err.message);
//   console.error("Code:", err.code);
//   console.error(err.stack);

//   return res.status(500).json({
//     success: false,
//     message: err.message,
//     code: err.code,
//   });
// }});

// module.exports = router;


const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

const requiredEnv = ["BREVO_USER", "BREVO_PASS"];

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

router.post("/contact", async (req, res) => {
  const {
    name,
    email,
    phone,
    city,
    message,
    pincode,
    timeSlot,
  } = req.body;

  console.log("API HIT");
  console.log(req.body);

  if (
    !name ||
    !email ||
    !phone ||
    !city ||
    !message ||
    !pincode ||
    !timeSlot
  ) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields",
    });
  }

  const missingEnv = requiredEnv.filter((key) => !process.env[key]);
  if (missingEnv.length) {
    console.error("Missing email env:", missingEnv.join(", "));

    return res.status(500).json({
      success: false,
      message: "Brevo SMTP is not configured",
      missing: missingEnv,
    });
  }

  const fromEmail = process.env.MAIL_FROM || process.env.BREVO_USER;
  const toEmail = process.env.MAIL_TO || "fakeid1266@gmail.com";

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
      },
    });

    await transporter.verify();
    console.log("SMTP Connected");

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCity = escapeHtml(city);
    const safePincode = escapeHtml(pincode);
    const safeTimeSlot = escapeHtml(timeSlot);
    const safeMessage = escapeHtml(message);

    const info = await transporter.sendMail({
      from: `"Enagic Bharat" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: "New Contact Form Submission",

      html: `
        <h2>New Contact Request</h2>

        <table border="1" cellpadding="8" cellspacing="0">
          <tr>
            <td><b>Name</b></td>
            <td>${safeName}</td>
          </tr>

          <tr>
            <td><b>Email</b></td>
            <td>${safeEmail}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>${safePhone}</td>
          </tr>

          <tr>
            <td><b>Address</b></td>
            <td>${safeCity}</td>
          </tr>

          <tr>
            <td><b>Pincode</b></td>
            <td>${safePincode}</td>
          </tr>

          <tr>
            <td><b>Time Slot</b></td>
            <td>${safeTimeSlot}</td>
          </tr>

          <tr>
            <td><b>Message</b></td>
            <td>${safeMessage}</td>
          </tr>

        </table>
      `,
    });

    console.log("Mail Sent");
    console.log(info.messageId);

    return res.status(200).json({
      success: true,
      message: "Email Sent Successfully",
    });
  } catch (err) {
    console.error("EMAIL ERROR");
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.response || err.message || "Email send failed",
      code: err.code,
    });
  }
});

module.exports = router;
