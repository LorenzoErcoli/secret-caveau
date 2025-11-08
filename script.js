const sequences = new Map([
  ['seqAlpha', 'AURORA'],
  ['seqBeta', 'CRIOGEN'],
  ['seqGamma', 'VORTEX13'],
  ['seqDelta', 'ANTIDOTO']
]);

const statusMessages = {
  pending: 'In attesa',
  success: 'Sequenza valida',
  error: 'Sequenza errata'
};

const form = document.getElementById('accessForm');
const codeDisplay = document.getElementById('secretCode');

function resetFieldState(fieldLabel) {
  fieldLabel.dataset.state = '';
  const status = fieldLabel.querySelector('[data-status]');
  status.textContent = statusMessages.pending;
}

function evaluateField(fieldLabel) {
  const input = fieldLabel.querySelector('input');
  const target = sequences.get(input.id);
  const status = fieldLabel.querySelector('[data-status]');
  const userValue = input.value.trim().toUpperCase();

  if (!userValue) {
    fieldLabel.dataset.state = '';
    status.textContent = statusMessages.pending;
    return false;
  }

  if (userValue === target) {
    fieldLabel.dataset.state = 'success';
    status.textContent = statusMessages.success;
    return true;
  }

  fieldLabel.dataset.state = 'error';
  status.textContent = statusMessages.error;
  return false;
}

function setFormDisabled(disabled) {
  form.querySelectorAll('input, button').forEach((control) => {
    control.disabled = disabled;
  });
}

function triggerDecryptAnimation(secretCode) {
  codeDisplay.dataset.animate = 'true';
  let iteration = 0;
  const glyphs = '█▓▒░#@$&?';
  const revealSteps = 18;
  const finalText = secretCode;
  const scrambleInterval = setInterval(() => {
    const progress = Math.min(iteration / revealSteps, 1);
    const revealLength = Math.floor(progress * finalText.length);
    const scrambled = finalText
      .split('')
      .map((char, index) => {
        if (index < revealLength) {
          return char;
        }
        return glyphs[Math.floor(Math.random() * glyphs.length)];
      })
      .join('');
    codeDisplay.textContent = scrambled;
    iteration += 1;
    if (progress >= 1) {
      clearInterval(scrambleInterval);
      codeDisplay.textContent = finalText;
    }
  }, 70);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let allValid = true;

  form.querySelectorAll('.field').forEach((fieldLabel) => {
    const result = evaluateField(fieldLabel);
    if (!result) {
      allValid = false;
    }
  });

  if (allValid) {
    setFormDisabled(true);
    codeDisplay.textContent = 'ACCESSO CONCESSO — Preparare il reattore!';
    setTimeout(() => {
      triggerDecryptAnimation('VX-13-Ω-7 :: ANTIDOTO LIBERATO');
    }, 900);
  } else {
    codeDisplay.dataset.animate = 'false';
    codeDisplay.textContent = 'Sequenze non valide — riprovare';
  }
});

form.querySelectorAll('input').forEach((input) => {
  const fieldLabel = input.closest('.field');
  input.addEventListener('input', () => {
    resetFieldState(fieldLabel);
    codeDisplay.dataset.animate = 'false';
    codeDisplay.textContent = 'In attesa di decriptazione…';
  });
});
