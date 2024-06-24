
const rangeMin = document.getElementById('rangeMin');
const rangeMax = document.getElementById('rangeMax');
const priceValue = document.getElementById('priceValue');
const applyButton = document.getElementById('applyButton');
const track = document.querySelector('.range-slider .track');

function updateTrack() {
  const minValue = parseInt(rangeMin.value);
  const maxValue = parseInt(rangeMax.value);
  const range = rangeMax.max - rangeMax.min;
  const minPercent = ((minValue - rangeMax.min) / range) * 100;
  const maxPercent = ((maxValue - rangeMax.min) / range) * 100;

  track.style.left = `${minPercent}%`;
  track.style.width = `${maxPercent - minPercent}%`;
  priceValue.textContent = `$${minValue} - $${maxValue}`;
}

rangeMin.addEventListener('input', () => {
  if (parseInt(rangeMin.value) > parseInt(rangeMax.value) - 1) {
    rangeMin.value = parseInt(rangeMax.value) - 1;
  }
  updateTrack();
});

rangeMax.addEventListener('input', () => {
  if (parseInt(rangeMax.value) < parseInt(rangeMin.value) + 1) {
    rangeMax.value = parseInt(rangeMin.value) + 1;
  }
  updateTrack();
});

applyButton.addEventListener('click', () => {
  alert(`Price range selected: $${rangeMin.value} - $${rangeMax.value}`);
});

updateTrack();
