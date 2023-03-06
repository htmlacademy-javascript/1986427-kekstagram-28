const USER_REVIEWS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'John',
  'Boris',
  'Евгений',
  'Елена',
  'Иван',
];

const POST_COUNT_MIN_LIKES = 1;
const POST_COUNT_MAX_LIKES = 6;
const USER_PIC_MIN_COUNT = 1;
const USER_PIC_MAX_COUNT = 5;
const COMMENT_MIN_COUNT = 1;
const COMMENT_MAX_COUNT = 5;
const START_RANDOM_GENERATE = 0;

const getRandomInteger = (minNumber, maxNumber) => {
  const lower = Math.ceil(Math.min(minNumber, maxNumber));
  const upper = Math.floor(Math.max(minNumber, maxNumber));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getArrayRandomElement = (items) => items[getRandomInteger(START_RANDOM_GENERATE, items.length - 1)];

const createIdGenerator = () => {
  let lastId = 0;

  return function () {
    lastId += 1;
    return lastId;
  };
};

const generateCommentId = createIdGenerator();

const createUserMessage = () => Array.from({
  length: getRandomInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT)
},
() => {
  getArrayRandomElement(USER_REVIEWS);
}).join(' ');

const createUserComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(USER_PIC_MIN_COUNT, USER_PIC_MAX_COUNT)}.svg`,
  message: createUserMessage(),
  name: getArrayRandomElement(NAMES)
});

const createUserPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getArrayRandomElement(USER_REVIEWS),
  likes:getRandomInteger(POST_COUNT_MIN_LIKES, POST_COUNT_MAX_LIKES)
});
