
const express = require('express');
const app = express();
const moment = require("moment");

module.exports = app

  app.get("/api", (req, res) => {
    let startDate = moment(req.query.currentDate).format("L");
    let result;
      const half = startDate.split("/");
      let year = half[2];
      const currDate = new Date(startDate);
      let numberOfDays = req.query.totalDays;
      let day = currDate.getDay();
      let week = currDate.getDate();
      let month = currDate.getMonth();
      let monthDays;
      
      let getCost = 0;
      let price = 0;

      function getDays(x) {
        if (x == 1) {
  return (monthDays = 28);
        } else if (x == 3 || x == 5 || x == 8 || x == 10) {
          return (monthDays = 30);
        } else {
          return (monthDays = 31);
        }
      }
      getDays(month);

      function getPrice(x) {
        if (x <= 7) {
          return (price = 0.05);
        } else if (x > 7 && x <= 14) {
          return (price = 0.1);
        } else if (x > 14 && x <= 21) {
          return (price = 0.15);
        } else if (x > 21 && x <= 28) {
          return (price = 0.2);
        } else {
          return (price = 0.25);
        }
      }

      for (let i = 0; i < numberOfDays; i++) {
        if (day !== 6 && day !== 0) {
          getPrice(week);
          getCost = getCost + price;
        }

        day++;
        if (day > 6) {
          day = day % 7;
        }
        week++;
        if (week > monthDays) {
          month++;
          if (month > 11) {
            year++;
            month = 0;
          }
          getDays(month);
          week = 1;
        }
      }

      result = getCost.toFixed(2);
    res.json({ totalPrice: result });
  });

