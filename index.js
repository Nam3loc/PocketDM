const { Configuration, OpenAIApi} = require("openai");
require("dotenv").config();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

const runPrompt = async() => {
    const prompt = "I need help creating my D&D encounter for my session. In 200 words or less, can you help create an encounter where the party walks into a potential fight? Also, make sure the encounter is a deadly encounter which includes a Lich. The party is comprised of 4 level 5 characters: 1 bard, 1 barbarian, 1 sorcerer, and 1 druid.";

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 500,
    });

    console.log(response.data.choices[0].text);
}

runPrompt();