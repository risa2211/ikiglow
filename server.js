const express = require('express');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const cors = require('cors');
const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} = require('firebase/auth');
// var admin = require("firebase-admin");

var serviceAccount = require("./serverkey.json");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const API_KEY = 'AIzaSyDDPr-pMtFygpn4DG9LRlsyD3G2h81gqDE';
const MODEL_NAME = 'gemini-1.0-pro';

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });


const firebaseConfig = {
    apiKey: "AIzaSyD2oPgH11WU6dHS5cvXJV3Wv8XUvQl6OPM",
    authDomain: "project-reva-7764b.firebaseapp.com",
    projectId: "project-reva-7764b",
    storageBucket: "project-reva-7764b.appspot.com",
    messagingSenderId: "385252140221",
    appId: "1:385252140221:web:669a4508e09992581583d4",
    measurementId: "G-MKMT6FFCJX"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    res.status(201).json({ message: 'User registered successfully', uid: user.uid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body)
  
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }
  
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user.uid);
      res.status(200).json({ message: 'Login successful', uid: user.uid });

    } catch (error) {
      console.error(error);
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });

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
  ];

  try {
    const chat = await model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });

    const result = await chat.sendMessage(req.body.message);
    res.json({ data: result.response.candidates });
  } catch (error) {
    console.error("Error during chat message processing:", error);
    res.status(500).send("An error occurred while processing the chat message.");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
