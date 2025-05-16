const slider = document.getElementById('tierSlider');
const output = document.getElementById('priceOutput');

if (slider && output) {
  const prices = {
    1: 'Basic - $100',
    2: 'Standard - $200',
    3: 'Premium - $300'
  };

  slider.addEventListener('input', function () {
    output.textContent = prices[this.value];
  });
}
