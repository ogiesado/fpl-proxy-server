const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const fplApiUrl = "https://fantasy.premierleague.com/api";

app.get("/", (req, res) => {
  res.send("Yoh 2!");
});

app.get("/api/entry/:id", cors(), async (req, res) => {
  const response = await axios.get(`${fplApiUrl}/entry/${req.params.id}/`);
  res.json(response.data);
});

app.get(
  "/api/entry/:playerId/event/:weekNumber/picks",
  cors(),
  async (req, res) => {
    const response = await axios.get(
      `${fplApiUrl}/entry/${req.params.playerId}/event/${
        req.params.weekNumber
      }/picks/`
    );
    res.json(response.data);
  }
);

app.listen(process.env.PORT, process.env.IP, () => {
  console.info(
    `The server is running at http://${process.env.IP}:${process.env.PORT}/`
  );
});
