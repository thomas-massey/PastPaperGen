const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    // Get the prompt from the request body
    const prompt = req.body.input;
    console.log(prompt);
    const runPrompt = async () => {    
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 100,
            temperature: 1
        });
        console.log(response.data.choices[0].text);
        res.status(200).json({ ai_answer: response.data.choices[0].text });
    };
    runPrompt();
}