import randomWords from "random-words";

const generateRandomWord = () => {
  const word = randomWords();
  return word;
};

export default generateRandomWord;
