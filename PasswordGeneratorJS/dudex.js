function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let allowedChars = "";
    let password = "";
    lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    symbolChars = "!@#$%^&*()_+-=";
    numberChars = "1234567890";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    allowedChars += includeNumbers ? numberChars : "";

    if (length <= 0) {
        return `(Password Length must be at least 1)`;
    }
    if (allowedChars.length === 0) {
        return `(At least 1 set must be selected)`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length) + 1;
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated Password: ${password}`);