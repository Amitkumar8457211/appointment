const express = require("express");
const router = express.Router();
const axios = require("axios");
router.get("/verify", async (req, res) => {
    const token = req.query.token;
    try {
        const data = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=6Lc-MDwoAAAAAItrXmylp59-CkILEBiVQdidZR5v&response=${token}`
        );
        if (data.data.success) {
            res.status(200).json({ status: true});
        } else {
            res.status(200).json({ status: false});
            console.log("Failed Captcha");
        }
    } catch (err) {
        res.status(200).json({ status: false, response: `Error in API call :- ${err}` });
    }
});

module.exports = router;
