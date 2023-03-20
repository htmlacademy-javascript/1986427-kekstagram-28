export const getRandomInteger = (minNumber, maxNumber) => {
  const lower = Math.ceil(Math.min(minNumber, maxNumber));
  const upper = Math.floor(Math.max(minNumber, maxNumber));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

export const getArrayRandomElement = (items) => items[getRandomInteger(0, items.length - 1)];

export const createIdGenerator = () => {
  let lastId = 0;

  return function () {
    lastId += 1;
    return lastId;
  };
};

export const isEscapeKey = (evt) => evt.key === 'Escape';
