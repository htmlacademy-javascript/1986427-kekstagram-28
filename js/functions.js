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

const leftFill = (value, len, pad) => `${pad.repeat(len)}${value}`.slice(-len);
