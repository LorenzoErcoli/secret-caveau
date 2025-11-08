document.getElementById('submitBtn').addEventListener('click', function () {
  const values = [
    document.getElementById('pass1').value,
    document.getElementById('pass2').value,
    document.getElementById('pass3').value
  ];
  const targets = ['Giornata', 'Radio', 'Hollywood'];
  let allCorrect = true;
  values.forEach((val, idx) => {
    const indicator = document.getElementById('ind' + (idx + 1));
    const label = document.getElementById('ind' + (idx + 1) + '-text');
    if (val === targets[idx]) {
      indicator.className = 'indicator success';
      label.textContent = 'Corretto';
    } else {
      indicator.className = 'indicator error';
      label.textContent = 'Errato';
      allCorrect = false;
    }
  });
  const msg = document.getElementById('message');
  const scientistIcon = document.getElementById('scientistIcon');
  const accessIcon = document.getElementById('accessIcon');
  const accessDesc = document.getElementById('accessDesc');
  const btn = document.getElementById('submitBtn');
  if (allCorrect) {
    scientistIcon.classList.add('scientist-icon--active');
    accessDesc.textContent = 'Ritratto del Dr. Vortex, accesso aperto';
    accessIcon.classList.add('access-icon--active');
    accessDesc.textContent = 'Accesso aperto';
    btn.classList.add('panel__button--disabled');
    btn.disabled = true;
    msg.className = 'panel__message panel__message--success show';
    msg.textContent = 'ACCESSO CONCESSO — Preparare il reattore!';
    secret.setAttribute('aria-hidden', 'false');
    secret.classList.add('panel__secret--visible');
    document.querySelector('.panel__inputs').classList.add('panel__inputs--collapsed');
  } else {
    scientistIcon.classList.remove('scientist-icon--active');
    accessDesc.textContent = 'Ritratto del Dr. Vortex, accesso chiuso';
    accessIcon.classList.remove('access-icon--active');
    accessDesc.textContent = 'Accesso chiuso';
    btn.classList.remove('panel__button--disabled');
    btn.disabled = false;
    msg.className = 'panel__message panel__message--error show';
    msg.textContent = 'ACCESSO NEGATO — Ri-calibrare il flusso neurale!';
    secret.setAttribute('aria-hidden', 'true');
    secret.classList.remove('panel__secret--visible');
  }
});
