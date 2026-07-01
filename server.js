require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Enagic Bharat backend is running",
  });
});

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");


// Contact Route
app.use("/api", require("./Routes/ConatctRoute")); // path apne project ke hisaab se
// app.use("/api", require("./Routes/ContactRoute"));  
// app.use("/api", require("./Routes/ContactRoute.js"));

const PORT = process.env.PORT || 5000;
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
