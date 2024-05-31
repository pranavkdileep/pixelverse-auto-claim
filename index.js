const express = require('express');

const app = express();
const telegramBotToken = "6846260168:AAGuSGtoqRfuYhhtvZ11xoacx2nyKI2ixN0";
const telegramChatId = "1196575861";

const getResponce = async () => {
    const res = await fetch("https://api-clicker.pixelverse.xyz/api/mining/claim", {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en",
          "initdata": "query_id=AAF1TFJHAAAAAHVMUkdaRRPY&user=%7B%22id%22%3A1196575861%2C%22first_name%22%3A%22PKD%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22pranavkdileep%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1717136836&hash=dc58d995ecae14eef883b6ad6db641402c112b6b1aa7c1da894224728c447d8d",
          "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Linux\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "secret": "40eaabfaef2b3d6187452521fa73de042b0df5aa3993076ad0d530ff58de6d42",
          "tg-id": "1196575861",
          "username": "pranavkdileep"
        },
        "referrer": "https://sexyzbot.pxlvrs.io/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
      });
    const data = await res.json();
    if(data.claimedAmount){
        sendTelegramMessage('Claimed: ' + data.claimedAmount);
    }
    return data;
}
async function sendTelegramMessage(message) {
    try {
        const response = await fetch("https://api.telegram.org/bot" + telegramBotToken + "/sendMessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: message
            })
        });

        const data = await response.json();
        messageId = data.result.message_id; 
        console.log(messageId); // Printing the response data

    } catch (error) {
        //console.error('Error sending telegram message:', error);
        //sendTelegramMessage('Error sending telegram message: ' + error);    
    }
}



app.get('/', (req, res) => {
    getResponce().then(data => {
        console.log(data);
        res.send(data);
    });
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});