/**
 * @param {string} str
 * @param {number}  maxLength
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
