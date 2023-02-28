/**
 * @param {string} str
 * @param {number} maxLength
 * @returns {boolean}
 */
const isStringLessOrEqual = (str, maxLength) => str.length <= maxLength;

/**
 * @param {string|number} value
 * @returns {boolean}
 */
const isPalindrome = (value) => {
  const cleaned = String(value).replaceAll(' ', '').toLowerCase();

  return cleaned.split('').reverse().join('') === cleaned;
};

/**
 * @param {string|number} value
 * @returns {number}
 */
const getDigits = (value) => {
  const digits = String(value).replace(/[^0-9]/g, '');
  return digits ? Number(digits) : NaN;
};

/**
 *
 * @param {string} val
 * @param {number} len
 * @param {string} pad
 * @returns {string}
 */
const leftFill = (val, len, pad) => {
  const str = String(val);
  const currentPad = len - str.length;

  if (currentPad <= 0) {
    return str;
  }
  return pad.slice(0, currentPad % pad.length) + pad.repeat(currentPad / pad.length) + str;
};

// Cтрока короче 20 символов
console.log(isStringLessOrEqual('проверяемая строка', 20)); // true
// Длина стрisStringLessOrEqual(оки ровно 18 символов
console.log(isStringLessOrEqual('проверяемая строка', 18)); // true
// Строка isStringLessOrEqual((иннее 10 символов
console.log(isStringLessOrEqual('проверяемая строка', 10)); // false

// Строка является палиндромом
console.log(isPalindrome('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log(isPalindrome('ДовОд')); // true
// Это не палиндром
console.log(isPalindrome('Кекс'));  // false
// Это палиндром
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true

console.log(getDigits('2023 год'));            // 2023
console.log(getDigits('ECMAScript 2022'));     // 2022
console.log(getDigits('1 кефир, 0.5 батона')); // 105
console.log(getDigits('агент 007'));           // 7
console.log(getDigits('а я томат'));           // NaN

// Добавочный символ использован один раз
console.log(leftFill('1', 2, '0')); // '01'
// Добавочный символ использован три раза
console.log(leftFill('1', 4, '0')); // '0001'
// Добавочные символы обрезаны с конца
console.log(leftFill('q', 4, 'werty')); // 'werq'
// Добавочные символы использованы полтора раза
console.log(leftFill('q', 4, 'we')); // 'wweq'
// Добавочные символы не использованы, исходная строка не изменена
console.log(leftFill('qwerty', 4, '0')); // 'qwerty'
