const express = require("express");
const fs = require("fs");
const router = express.Router();
const axios = require("axios");
const routers = router.post("/article", async (req, res) => {
  try {
    const data = await axios.get(
      `https://script.google.com/macros/s/AKfycbzWwXGkmnhNRrrP-J4gMCiKT773cJqMEPb4Sw9lOP3Cp8qtDTK_XiTuV4gvYRH_sPNQFQ/exec?id=${req.body.article_id}`
    );
    console.log("redddd", req.body);
    if (data instanceof Object) {
      return res.status(200).json({ status: true, response: data.data });
    } else {
      res
        .status(200)
        .json({ status: false, response: "Error reading sheet data" });
    }
    return res.status(200).json({ message: "Article submitted successfully" });
  } catch (error) {
    console.error("Error adding data:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while adding Article" });
  }
});

module.exports = routers;
