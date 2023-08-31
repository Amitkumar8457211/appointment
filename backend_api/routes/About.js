const express = require("express");
const router = express.Router();
const axios = require("axios");
router.get("/aboutus", async (req, res) => {
  try {
    const data = await axios.get(
      "https://script.google.com/macros/s/AKfycbyI8OlSN4WTMZ9fm90_7B68FHr3I9UWBthni8SHP1XqTUG38sGJAyXWtwxh2CNmQFGg_w/exec?id=1DtwR2OeN1urfR0vQayKjC-tYIGfKkcq09ALV8He4iyE"
    );
    console.log("abouttt", data);
    if (data instanceof Object && Object.keys(data).length) {
      res.status(200).json({ status: true, response: data.data });
      console.log("ifcasee");
    } else {
      res
        .status(200)
        .json({ status: false, response: "Error reading sheet data" });
      console.log("elsecsasee");
    }
  } catch (err) {
    res
      .status(200)
      .json({ status: false, response: `Error in API call :- ${err}` });
  }
});

module.exports = router;
