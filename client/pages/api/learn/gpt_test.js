const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    // get input from frontend
    const input = req.body.input;
    // send input to GPT-3 API via npm package
    const ai_response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: input,
        temperature: 0,
        maxTokens: 15
    });
    console.log(ai_response.data);

    res.send({
        answer: "This is a test of the GPT-3 API.",
        ai_answer: ai_response.data.choices[0].text
    })
}