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
// eslint-disable-next-line no-console
console.log(isStringLessOrEqual('проверяемая строка', 20)); // true
// Длина стрisStringLessOrEqual(оки ровно 18 символов
// eslint-disable-next-line no-console
console.log(isStringLessOrEqual('проверяемая строка', 18)); // true
// Строка isStringLessOrEqual((иннее 10 символов
// eslint-disable-next-line no-console
console.log(isStringLessOrEqual('проверяемая строка', 10)); // false

// Строка является палиндромом
// eslint-disable-next-line no-console
console.log(isPalindrome('топот')); // true
// Несмотря на разный регистр, тоже палиндром
// eslint-disable-next-line no-console
console.log(isPalindrome('ДовОд')); // true
// Это не палиндром
// eslint-disable-next-line no-console
console.log(isPalindrome('Кекс')); // false
// Это палиндром
// eslint-disable-next-line no-console
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true

// eslint-disable-next-line no-console
console.log(getDigits('2023 год')); // 2023
// eslint-disable-next-line no-console
console.log(getDigits('ECMAScript 2022')); // 2022
// eslint-disable-next-line no-console
console.log(getDigits('1 кефир, 0.5 батона')); // 105
// eslint-disable-next-line no-console
console.log(getDigits('агент 007')); // 7
// eslint-disable-next-line no-console
console.log(getDigits('а я томат')); // NaN

// Добавочный символ использован один раз
// eslint-disable-next-line no-console
console.log(leftFill('1', 2, '0')); // '01'
// Добавочный символ использован три раза
// eslint-disable-next-line no-console
console.log(leftFill('1', 4, '0')); // '0001'
// Добавочные символы обрезаны с конца
// eslint-disable-next-line no-console
console.log(leftFill('q', 4, 'werty')); // 'werq'
// Добавочные символы использованы полтора раза
// eslint-disable-next-line no-console
console.log(leftFill('q', 4, 'we')); // 'wweq'
// Добавочные символы не использованы, исходная строка не изменена
// eslint-disable-next-line no-console
console.log(leftFill('qwerty', 4, '0')); // 'qwerty'
