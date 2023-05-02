const { Configuration, OpenAIApi } = require("openai");
// Measure the time it takes to run the prompt
const start = new Date().getTime();

const openai = new OpenAIApi(configuration);

const runPrompt = async () => {
    const prompt = "This is a test, so tell me about the sun.";

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 100,
        temperature: 1
    });

    console.log(response.data.choices[0].text);
    console.log("Time taken: " + (new Date().getTime() - start) + "ms");
};

runPrompt();