const picture = document.querySelector('.img-upload__preview img');
export const scaleControl = document.querySelector('.img-upload__scale');

export const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25
};

export const setScale = (percent) => {
  picture.style.setProperty('transform', `scale(${percent / 100})`);
  scaleControl.querySelector('input').setAttribute('value', `${percent}%`);
};

export const onScaleControlClick = (event) => {
  const inputValue = Number.parseFloat(scaleControl.querySelector('.scale__control--value').value);
  if (event.target.classList.contains('scale__control--bigger')) {
    setScale(Math.min(inputValue + Scale.STEP, Scale.MAX));
    return;
  }
  if (event.target.classList.contains('scale__control--smaller')) {
    setScale(Math.max(inputValue - Scale.STEP, Scale.MIN));
  }
};

