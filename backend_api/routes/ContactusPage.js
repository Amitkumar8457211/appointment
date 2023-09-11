const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const data = await axios.get(
      "https://script.google.com/macros/s/AKfycbyI8OlSN4WTMZ9fm90_7B68FHr3I9UWBthni8SHP1XqTUG38sGJAyXWtwxh2CNmQFGg_w/exec?id=1R531pDCzbSPn5AffEuR-nUtYtddk_KsbT4thO4VN8UE"
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
