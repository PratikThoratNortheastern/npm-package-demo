import quotes from "./quotes.js";
import funnyQuotes from "./funnyQuotes.js";
const randNum = Math.floor(Math.random() * quotes.length);
export const getMotivationalQuote = () => {
    const getMotivationalQuote = quotes[randNum];
    return getMotivationalQuote;
};
export const getFunnyQuote = () => {
    const getFunnyQuote = funnyQuotes[randNum];
    return getFunnyQuote;
};
