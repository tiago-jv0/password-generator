
const shuffle = ({ array }: { array: Array<string> }) => {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const generatePassword = ({
  hasLowercase,
  hasNumbers,
  hasSymbols,
  hasUppercase,
  length,
}: {
  hasLowercase: boolean;
  hasUppercase: boolean;
  hasNumbers: boolean;
  hasSymbols: boolean;
  length: number;
}) => {
  console.log(hasLowercase, hasSymbols, hasUppercase, hasNumbers, length);
  let possibleMatches: Array<string> = [];

  if (hasLowercase) {
    // eslint-disable-next-line prettier/prettier
      const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    possibleMatches = possibleMatches.concat(lowercaseLetters);
  }

  if (hasUppercase) {
    // eslint-disable-next-line prettier/prettier
    const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    possibleMatches = possibleMatches.concat(uppercaseLetters);
  }

  if (hasNumbers) {
    // eslint-disable-next-line prettier/prettier
    const numbers = ['0','1','2','3','4','5','6','7','8','9']
    possibleMatches = possibleMatches.concat(numbers);
  }

  if (hasSymbols) {
    const symbols = [
      "~",
      "`",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
      "+",
      "=",
      "{",
      "}",
      "[",
      "]",
      "|",
      "\\",
      "/",
      ":",
      ";",
      '"',
      "'",
      "<",
      ">",
      ",",
      ".",
      "?",
    ];
    possibleMatches = possibleMatches.concat(symbols);
  }

  const shuffledArray = shuffle({ array: possibleMatches });
  return shuffledArray.slice(0, length).join("");
};