const { Configuration, OpenAIApi} = require("openai");
require("dotenv").config();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

////////// RANDOMIZER //////////

const monstersArr = ["Lich", "Mind Flayer", "Goblin", "Dragon", "Ice Troll", "Necromancer"];
const monsterGenerator = Math.floor(Math.random() * monstersArr.length);
const monster = monstersArr[monsterGenerator];

const numOfCharactersArr = ["1", "2", "3", "4", "5"];
const numOfCharactersGenerator = Math.floor(Math.random() * numOfCharactersArr.length);
const numOfCharacters = numOfCharactersArr[numOfCharactersGenerator];

const charactersArr = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer", "Blood Hunter"];
const characterGenerator = Math.floor(Math.random() * charactersArr.length);
const character = charactersArr[characterGenerator];

const deadlyEncountersArr = ["Easy", "Medium", "Hard", "Deadly", "Double Deadly", "Total Party Kill"];
const deadlyEncountersGenerator = Math.floor(Math.random() * deadlyEncountersArr.length);
const levelOfDeadliness = deadlyEncountersArr[deadlyEncountersGenerator];

//******** An appropriately equipped and well-rested party of four adventurers should be able to defeat a monster that has a challenge rating equal to its level without suffering any deaths. For example, a party of four 3rd-level characters should find a monster with a challenge rating of 3 to be a worthy challenge, but not a deadly one. ********\\
const challengeRatingsArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
const challengeRatingsGenerator = Math.floor(Math.random() * challengeRatingsArr.length);
const challengeRatings = challengeRatingsArr[challengeRatingsGenerator];

const levelOfCharactersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
const levelOfCharactersGenerator = Math.floor(Math.random() * levelOfCharactersArr.length);
const levelOfCharacters = levelOfCharactersArr[levelOfCharactersGenerator];

// ======================= \\

const runPrompt = async() => {
    const prompt = `I need help creating my D&D encounter for my session. In 200 words or less, can you help create an encounter where the party walks into a potential fight? Also, make sure the encounter is a ${levelOfDeadliness} encounter which includes a ${monster} with a challenge rating of ${challengeRatings}. The party is comprised of ${numOfCharacters} level ${levelOfCharacters} characters: 1 bard, 1 barbarian, 1 sorcerer, and 1 druid.`;

    // console.log(prompt);

    const basicPrompt = 'I need help creating my D&D encounter for my session. In 200 words or less, can you help create an encounter where the party walks into a potential fight? Also, make sure the encounter is a medium encounter which includes a dragon with a challenge rating equal to a medium encounter level. The party is comprised of 4 level 10 characters: 1 bard, 1 barbarian, 1 sorcerer, and 1 druid.'

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: basicPrompt,
        max_tokens: 500,
    });

    console.log(response.data.choices[0].text);
}

runPrompt();