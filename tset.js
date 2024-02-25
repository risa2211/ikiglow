// node --version # Should be >= 18
// npm install @google/generative-ai

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = "AIzaSyDDPr-pMtFygpn4DG9LRlsyD3G2h81gqDE";
  
  async function runChat() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
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
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
  
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: "Your task is to develop a conversational AI that can effectively assess and provide support to individuals struggling with mental health issues. The AI should be capable of administering various tests to determine potential mental health conditions, while also understanding the user's emotional state through continuous engagement.Start by designing the AI to initiate the conversation in a compassionate and non-intrusive manner, inviting the user to share their feelings and experiences. Throughout the interaction, prompt the AI to ask relevant questions aimed at assessing the user's symptoms and potential mental health conditions.Ensure that the AI demonstrates empathy and validation towards the user's emotions, providing supportive responses and guidance based on the information provided. Tailor the responses according to the suspected mental health condition, offering appropriate resources, coping strategies, and encouragement.Encourage the AI to maintain an open dialogue with the user, actively listening to their concerns and offering reassurance. Continuously monitor the user's emotional responses and adjust the conversation accordingly, providing additional support or intervention as needed.Finally, prompt the AI to summarize the conversation and provide insights into the potential mental health condition based on the gathered information. Emphasize the importance of seeking professional help and provide guidance on next steps for the user to take in managing their mental health.Overall, your goal is to create an AI that can sensitively and effectively engage with individuals experiencing mental health challenges, providing valuable support and guidance throughout the conversation."}],
        },
        {
          role: "model",
          parts: [{ text: "**AI Mental Health Assessment and Support**\n\n**Initialization**\n\n* **AI:** \"Hello. I'm here to listen and offer support if you're struggling with mental health concerns. How are you feeling today?\"\n\n**Assessment**\n\n* **AI:** \"Can you tell me a little bit about what you're experiencing? Please share your thoughts, feelings, and anything that's on your mind.\"\n* **AI:** \"Have you noticed any specific symptoms, such as changes in mood, sleep, or appetite?\"\n* **AI:** \"Have you had thoughts or feelings that concern you, such as excessive worry, sadness, or urges to harm yourself?\"\n* **AI:** \"Do you have a personal or family history of mental health conditions?\"\n\n**Empathy and Validation**\n\n* **AI:** \"I understand that this can be a difficult time for you. You're not alone, and I want to assure you that there is help available.\"\n* **AI:** \"Your feelings are valid. It's important to remember that you're not weak or flawed for experiencing mental health challenges.\"\n\n**Tailored Support**\n\n**Depression:**\n* **AI:** \"It sounds like you may be experiencing symptoms of depression. These can include low mood, loss of pleasure, and changes in sleep or appetite. I can provide you with coping strategies and connect you with resources for support.\"\n\n**Anxiety:**\n* **AI:** \"You may be struggling with anxiety. Symptoms can include excessive worry, panic attacks, and avoidance behaviors. Let's explore some techniques to manage your anxiety effectively.\"\n\n**Bipolar Disorder:**\n* **AI:** \"There is a possibility that you may have bipolar disorder. This condition is characterized by extreme mood swings from depression to mania. It's important to seek professional evaluation and medication management.\"\n\n**Continuous Engagement**\n\n* **AI:** \"Check in with me anytime you need support. I'm here to listen and offer guidance.\"\n* **AI:** \"How are you coping today? Is there anything I can do to assist you?\"\n\n**Summary and Insights**\n\n* **AI:** \"Based on what we've discussed, it's possible that you may be experiencing [suspected mental health condition]. It's important to remember that I'm not a licensed clinician, and a professional evaluation is necessary for an accurate diagnosis and treatment plan.\"\n\n**Encouragement for Professional Help**\n\n* **AI:** \"Consider speaking to a therapist or mental health professional. They can provide personalized care, support, and medication if needed.\"\n* **AI:** \"Don't give up hope. With the right support system, you can manage your mental health and live a fulfilling life.\""}],
        },
      ],
    });
  
    const result = await chat.sendMessage("test");
    const response = result.response;
    console.log(response.text());
    console.log(result )
  }
  
  runChat();