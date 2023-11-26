let numbers = [];

document.getElementById('numInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addNumber();
  }
});

function addNumber() {
  const input = document.getElementById('numInput');
  const numbersListSpan = document.getElementById('numbersList');

  const value = parseFloat(input.value);

  if (!isNaN(value)) {
    numbers.push(value);
    input.value = '';
    displayNumbersList();
  } else {
    alert('Por favor, insira um número válido.');
  }
}

function calculateAverage() {
  const resultSpan = document.getElementById('averageResult');

  if (numbers.length === 0) {
    alert('Adicione pelo menos um número antes de calcular a média.');
    return;
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;

  resultSpan.textContent = average.toFixed(2);
}

function resetCalculator() {
  numbers = [];
  document.getElementById('numInput').value = '';
  document.getElementById('averageResult').textContent = '0';
  displayNumbersList();
}

function displayNumbersList() {
  const numbersListSpan = document.getElementById('numbersList');

  if (numbers.length > 0) {
    const numbersString = numbers.join(', ');
    numbersListSpan.textContent = `Números digitados: ${numbersString}`;
  } else {
    numbersListSpan.textContent = 'Nenhum número digitado';
  }
}
