const passwordField = document.getElementById('password');
const lengthField = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+{}:"<>?|[];\',./`~';

function getRandomCharacter(str) {
    return str[Math.floor(Math.random() * str.length)];
}

function generatePassword() {
    let length = parseInt(lengthField.value);
    let availableCharacters = '';
    let password = '';

    if (uppercaseCheckbox.checked) {
        availableCharacters += uppercaseLetters;
    }
    if (lowercaseCheckbox.checked) {
        availableCharacters += lowercaseLetters;
    }
    if (numbersCheckbox.checked) {
        availableCharacters += numbers;
    }
    if (symbolsCheckbox.checked) {
        availableCharacters += symbols;
    }

    if (availableCharacters.length === 0) {
        alert('Please select at least one option.');
        return;
    }

    for (let i = 0; i < length; i++) {
        password += getRandomCharacter(availableCharacters);
    }

    passwordField.value = password;
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});

// Teks Berjalan

const mainHeading = document.getElementById('main-heading');

function typeWriter(text, element, delay = 100) {
    let i = 0;
    element.innerHTML = ''; // Kosongkan teks sebelum mengetik ulang
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, delay);
}

window.onload = () => {
    const originalText = 'Password Generator';
    const newText = 'by Anbas :)';

    typeWriter(originalText, mainHeading, 150); // Mengetik 'Password Generator'

    // Setelah selesai, ubah menjadi "by Anbas :)"
    setTimeout(() => {
        typeWriter(newText, mainHeading, 150); // Mengetik ulang menjadi 'by Anbas :)'
    }, 3000); // Setelah 3 detik
};
