const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const runPrompt = async () => {
    const prompt = "This is a test, so tell me about the sun.";

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048,
        temperature: 1
    });

    console.log(response.data.choices[0].text);
};

runPrompt();