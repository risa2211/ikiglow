const express = require('express');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files

// Replace 'API_KEY' with your actual Google Generative AI API key
const API_KEY = 'AIzaSyDDPr-pMtFygpn4DG9LRlsyD3G2h81gqDE';
const MODEL_NAME = 'gemini-1.0-pro';

// Endpoint to handle chat messages
app.post('/chat', async (req, res) => {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = await genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        // Add other categories as needed
    ];

    try {
        const chat = await model.startChat({
            generationConfig,
            safetySettings,
            history: [
                // Your chat history configuration
            ],
        });

        const result = await chat.sendMessage(req.body.message); // Ensure this matches your request payload key
        res.json({ data: result.response.candidates }); // Assuming result is the response you want to send back
    } catch (error) {
        console.error("Error during chat message processing:", error);
        res.status(500).send("An error occurred while processing the chat message.");
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
