const { GoogleSpreadsheet } = require("google-spreadsheet");
const express = require("express");
const fs = require("fs");
const { StatusDescription } = require("../classes/StatusDescription");
const { ResponseWrapper } = require("../classes/responseWrapper");
const router = express.Router();
const RESPONSES_SHEET_ID = "1MUcv7zAkFu9TXnSM_lV-sxXTndCzvoPR0rv481JQWk8";
const CREDENTIALS = JSON.parse(
  fs.readFileSync("./config/western-well-396305-5d14ad187d68.json")
);
const axios = require("axios");
const routers = router.post("/getmail", async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: CREDENTIALS.client_email,
      private_key: CREDENTIALS.private_key,
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];

    // Get all the rows
    await sheet.addRow(req.body);
    console.log(req.body, "req");

    res.status(201).json({ message: "Email added successfully" });
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).json({ error: "An error occurred while adding email" });
  }
});

module.exports = routers;
