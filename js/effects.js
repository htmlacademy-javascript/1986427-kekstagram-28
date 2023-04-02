const uploadPreview = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');
export const effectPicker = document.querySelector('.img-upload__effects');

export const Effect = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const effectRange = {
  [Effect.NONE]: [0, 100, 1],
  [Effect.CHROME]: [0, 1, 0.1],
  [Effect.SEPIA]: [0, 1, 0.1],
  [Effect.MARVIN]: [0, 100, 1],
  [Effect.PHOBOS]: [0, 3, 0.1],
  [Effect.HEAT]: [1, 3, 0.1]
};

const effectsMotion = {
  [Effect.CHROME]: (value) => `grayscale(${value})`,
  [Effect.HEAT]: (value) => `brightness(${value})`,
  [Effect.SEPIA]: (value) => `sepia(${value})`,
  [Effect.MARVIN]: (value) => `invert(${value}%)`,
  [Effect.PHOBOS]: (value) => `blur(${value}px)`,
  [Effect.NONE]: () => ''
};

const createSliderOptions = (name) => {
  const [min, max, step] = effectRange[name];

  return {
    range: {min, max},
    step,
    start: max,
    behaviour: 'snap',
    connect: 'lower',
    format: {
      to: effectsMotion[name],
      from: Number
    },
  };
};

export const effectSlider = noUiSlider.create(
  slider,
  createSliderOptions(Effect.NONE)
);

export const setEffect = (name) => {
  if (name !== Effect.NONE) {
    effectLevel.parentElement.classList.toggle('hidden');
  }
  uploadPreview.setAttribute('class', `effects__preview--${name}`);
  effectSlider.updateOptions(createSliderOptions(name));
};

export const onEffectSliderUpdate = () => {
  uploadPreview.style.setProperty('filter', effectSlider.get());
  effectLevel.setAttribute('value', effectSlider.get(true));
};

