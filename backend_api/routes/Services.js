const express = require("express");
const router = express.Router();
const axios = require("axios");
router.get("/services", async (req, res) => {
  try {
    const data = await axios.get(
      "https://script.google.com/macros/s/AKfycbyI8OlSN4WTMZ9fm90_7B68FHr3I9UWBthni8SHP1XqTUG38sGJAyXWtwxh2CNmQFGg_w/exec?id=1M4wGT8qp2TNEY1d7nekuC_lMWFfjbePbWf-1Sujp-5A"
    );
    if (data instanceof Object && Object.keys(data).length) {
      res.status(200).json({ status: true, response: data.data });
    } else {
      res
        .status(200)
        .json({ status: false, response: "Error reading sheet data" });
    }
  } catch (err) {
    res
      .status(200)
      .json({ status: false, response: `Error in API call :- ${err}` });
  }
});

module.exports = router;
