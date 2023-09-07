const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;
// const db = require("./models");
require("dotenv").config();
// Router

//Home routes
const HomeCarouselRouter = require("./routes/HomeCarousel");
const Blogsrouter = require("./routes/Blogs");
const servicesrouter = require("./routes/Services");
const Resourcerouter = require("./routes/Resource");
const AboutSection = require("./routes/About");
const GetmailId = require("./routes/Getmail");
const ContactForm = require("./routes/ContactForm");
const Articlerouter = require("./routes/Article");
const Mailerrouter = require("./routes/Mailer");

app.use("/home", HomeCarouselRouter);
app.use("/blogs", Blogsrouter);
app.use("/services", servicesrouter);
app.use("/resources", Resourcerouter);
app.use("/about", AboutSection);
app.use("/getmail", GetmailId);
app.use("/contactform", ContactForm);
app.use("/article", Articlerouter);
app.use("/getmailnew", Mailerrouter);
//Home routes

app.listen(port, () => {
  try {
    console.log(`Server running on port http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});
// });
