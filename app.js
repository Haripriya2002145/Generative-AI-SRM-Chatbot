const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const intents = require('./data/intentsNew.json'); // Load intents from the JSON file

app.use(bodyParser.json());

// Use the cors middleware to enable CORS
app.use(cors());

// Your getBotResponse function
const getBotResponse = (userInput) => {
  return new Promise((resolve, reject) => {
    const matchedIntent = intents.intents.find((intent) =>
      intent.patterns.some((pattern) => userInput.includes(pattern.toLowerCase()))
    );

    if (matchedIntent) {
      console.log(matchedIntent);
      const randomResponse =
        matchedIntent.responses[
          Math.floor(Math.random() * matchedIntent.responses.length)
        ];
      resolve(randomResponse);
    } else {
      resolve("I'm sorry, I don't understand that.");
    }
  });
};

app.post('/chatbot', async (req, res) => {
  const userInput = req.body.message.toLowerCase();
  const botResponse = await getBotResponse(userInput); // Wait for the promise to resolve

  res.json({ response: botResponse }); // Send the response property
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
