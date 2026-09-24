document.querySelectorAll('.demo-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    if (status) {
      status.textContent = 'V tomto náhledu se nic neodesílá. Ostrá verze bude napojená až při nasazení.';
    }
  });
});
