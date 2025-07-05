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
  const lock = document.getElementById('lock');
  const lockDesc = document.getElementById('lockDesc');
  const btn = document.getElementById('submitBtn');
  if (allCorrect) {
    document.querySelector('.inputs').style.display = 'none';
    lock.classList.add('open');
    lockDesc.textContent = 'Lucchetto aperto';
    btn.classList.add('fade');
    setTimeout(() => {
      msg.textContent = 'ACCESSO CONCESSO';
      msg.className = 'show glow';
    }, 1000);
  } else {
    msg.textContent = 'ACCESSO NEGATO';
    msg.className = 'show error';
    lockDesc.textContent = 'Lucchetto chiuso';
  }
});
