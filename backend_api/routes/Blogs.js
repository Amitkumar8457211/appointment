const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const data = await axios.get(
      "https://script.google.com/macros/s/AKfycbyI8OlSN4WTMZ9fm90_7B68FHr3I9UWBthni8SHP1XqTUG38sGJAyXWtwxh2CNmQFGg_w/exec?id=17tQxvwPRaT0PJVPY5hLGifyLuQxe31aMlOQ9EZ7eY44"
    );
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

router.get("/home", async (req, res) => {
  try {
    const data = await axios.get(
      "https://script.google.com/macros/s/AKfycbyI8OlSN4WTMZ9fm90_7B68FHr3I9UWBthni8SHP1XqTUG38sGJAyXWtwxh2CNmQFGg_w/exec?id=113orQ6Yp7vKmtBl_b-eiD5ZCzIKSCX2ZMejnZkfM9dI"
    );
    if (data instanceof Object && Object.keys(data).length) {
      res.status(200).json({ status: true, response: data.data.slice(0, 3) });
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
