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
    if (val === targets[idx]) {
      indicator.className = 'indicator success';
    } else {
      indicator.className = 'indicator error';
      allCorrect = false;
    }
  });
  const msg = document.getElementById('message');
  if (allCorrect) {
    msg.textContent = 'Caveau aperto';
  } else {
    msg.textContent = '';
  }
});
