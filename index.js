const Sequelize = require("sequelize");
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const sequelize = require("./utils/database");
const Result = require("./models/results");

const app = express();
app.use(cors());

app.post("/result/add", async (req, res) => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const dataObject = response.data;
    const dataArray = Object.values(dataObject);
    const top10Results = dataArray.slice(0, 10);

    let resultPresent = await Result.findAll();
    if (resultPresent) {
      res
        .status(200)
        .json({ success: true, result: "data already present in table" });
    } else {
      let obj;
      for (let result of top10Results) {
        obj = {
          name: result.name,
          last: result.last,
          buy: result.buy,
          sell: result.sell,
          volume: result.volume,
          base_unit: result.base_unit,
        };
        let resp = await Result.create(obj);
      }

      res.status(200).json({ success: true, result: top10Results });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, result: err });
  }
});

app.get("/result/get", async (req, res) => {
  try {
    let result = await Result.findAll({ limit: 10 });
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(400).json({ success: false, result: error });
  }
});

sequelize
  .sync()
  .then(() => {
    console.log("Database Connected...");
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server start on port 3000`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
