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

  // Validation
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

  // Brevo ENV Check
  if (!process.env.BREVO_USER || !process.env.BREVO_PASS) {
    return res.status(500).json({
      success: false,
      message: "Brevo SMTP is not configured",
    });
  }

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

    const info = await transporter.sendMail({
      from: `"Enagic Bharat" <${process.env.BREVO_USER}>`,
      to: "fakeid1266@gmail.com",
      replyTo: email,
      subject: "New Contact Form Submission",

      html: `
        <h2>New Contact Request</h2>

        <table border="1" cellpadding="8" cellspacing="0">
          <tr>
            <td><b>Name</b></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><b>Email</b></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><b>City</b></td>
            <td>${city}</td>
          </tr>

          <tr>
            <td><b>Pincode</b></td>
            <td>${pincode}</td>
          </tr>

          <tr>
            <td><b>Time Slot</b></td>
            <td>${timeSlot}</td>
          </tr>

          <tr>
            <td><b>Message</b></td>
            <td>${message}</td>
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
      message: err.message,
      code: err.code,
    });
  }
});

module.exports = router;