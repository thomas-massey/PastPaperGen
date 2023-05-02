const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    // Get the prompt from the request body
    const { prompt } = req.body;
    console.log("Prompt: " + prompt)
    // Generate the answer
    const gptResponse = await openai.createCompletion({
        model: 'davinci',
        prompt: prompt,
        temperature: 0,
        maxTokens: 300,
    })
    console.log("GPT Response: " + gptResponse.data.choices[0].text)
    // Send the answer back to the client
    res.status(200).json({ ai_answer: gptResponse.data.choices[0].text });
}