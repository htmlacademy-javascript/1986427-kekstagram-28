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
  [Effect.CHROME]: [0, 1, .1],
  [Effect.SEPIA]: [0, 1, .1],
  [Effect.MARVIN]: [0, 100, 1],
  [Effect.PHOBOS]: [0, 3, .1],
  [Effect.HEAT]: [1, 3, .1]
};

const effectFormatter = {
  [Effect.CHROME]: (value) => `grayscale(${value})`,
  [Effect.HEAT]: (value) => `brightness(${value})`,
  [Effect.SEPIA]: (value) => `sepia(${value})`,
  [Effect.MARVIN]: (value) => `invert(${value}%)`,
  [Effect.PHOBOS]: (value) => `blur(${value}px)`,
  [Effect.NONE]: () => ''
};

const createSliderOptions = (name) => {
  const [min, max, step] = effectRange[name];
  const format = {
    to: effectFormatter[name],
    from: Number
  };

  return {
    range: {min, max},
    step,
    start: max,
    format,
    behaviour: 'snap',
    connect: 'lower'
  };
};

const uploadPreview = document.querySelector('.img-upload__preview img');
export const effectPicker = document.querySelector('.img-upload__effects');
const effectLevel = document.querySelector('.effect-level__value');

export const effectSlider = noUiSlider.create(
  document.querySelector('.effect-level__slider'),
  createSliderOptions(Effect.NONE)
);

export const setEffect = (name) => {
  uploadPreview.setAttribute('class', `effects__preview--${name}`);
  effectSlider.updateOptions(createSliderOptions(name));
  effectLevel.parentElement.classList.toggle('hidden', name === Effect.NONE);
};

export const onEffectPickerChange = (event) => {
  const name = event.target.getAttribute('value');

  setEffect(name);
};

export const onEffectSliderUpdate = () => {
  uploadPreview.style.setProperty('filter', effectSlider.get());
  effectLevel.setAttribute('value', effectSlider.get(true));
};

