document.getElementById('submitBtn').addEventListener('click', function () {
  const inputs = [
    document.getElementById('pass1'),
    document.getElementById('pass2'),
    document.getElementById('pass3'),
    document.getElementById('pass4')
  ];

  const values = inputs.map((input) => input.value.trim().toLowerCase());
  const targets = ['drago', 'sale', 'neurotrasmettitore', 'sistema'];
  let allCorrect = true;

  values.forEach((val, idx) => {
    const indicator = document.getElementById('ind' + (idx + 1));
    const label = document.getElementById('ind' + (idx + 1) + '-text');
    if (val === targets[idx]) {
      indicator.className = 'indicator indicator--success';
      label.textContent = 'Corretto';
    } else {
      indicator.className = 'indicator indicator--error';
      label.textContent = 'Errato';
      allCorrect = false;
    }
  });

  const msg = document.getElementById('message');
  const lock = document.getElementById('lock');
  const lockDesc = document.getElementById('lockDesc');
  const btn = document.getElementById('submitBtn');
  const secret = document.getElementById('secret');

  if (allCorrect) {
    lock.classList.add('lock--open');
    lockDesc.textContent = 'Lucchetto aperto';
    btn.classList.add('panel__button--disabled');
    btn.disabled = true;
    msg.className = 'panel__message panel__message--success show';
    msg.textContent = 'ACCESSO CONCESSO — Preparare il reattore!';
    secret.setAttribute('aria-hidden', 'false');
    secret.classList.add('panel__secret--visible');
    document.querySelector('.panel__inputs').classList.add('panel__inputs--collapsed');
  } else {
    lock.classList.remove('lock--open');
    lockDesc.textContent = 'Lucchetto chiuso';
    btn.classList.remove('panel__button--disabled');
    btn.disabled = false;
    msg.className = 'panel__message panel__message--error show';
    msg.textContent = 'ACCESSO NEGATO — Ri-calibrare il flusso neurale!';
    secret.setAttribute('aria-hidden', 'true');
    secret.classList.remove('panel__secret--visible');
  }
});
