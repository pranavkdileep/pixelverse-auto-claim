const { get } = require("express/lib/response");

const getResponce = async () => {
    const res = await fetch("https://api.yescoin.gold/game/collectCoin", {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en",
          "content-type": "application/json",
          "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Linux\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTk2NTc1ODYxIiwiY2hhdElkIjoiMTE5NjU3NTg2MSIsImlhdCI6MTcxNzE1MjE1OSwiZXhwIjoxNzE5NzQ0MTU5LCJyb2xlQXV0aG9yaXplcyI6W10sInVzZXJJZCI6MTc5MTMwOTM4ODA5Nzk3ODM2OH0.lxdsnKd-Vd3G4LHfNHOyVqGsmE5dpXUcFu0c2ikTFYlzXsfo8p3rSszNeESN-YB7BlQGZfKEiY7KWf00jKFL0w"
        },
        "referrer": "https://www.yescoin.gold/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "1500",
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
      });
    const data = await res.json();
    console.log(data);
    return data;
}


getResponce();
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 60000*5);
}).then(() => {
    getResponce();
}
);

