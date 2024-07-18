import refs from '/js/refs';

refs.contactsUsForm.addEventListener('input', onContactsUsFormInput);
refs.contactsUsForm.addEventListener('submit', onContactsUsFormSubmit);

function onContactsUsFormSubmit(e) {
  e.preventDefault();
  const contactsUsFormData = {};

  const formData = new FormData(e.currentTarget);
  formData.forEach((value, key) => {
    contactsUsFormData[key] = value;
  });

  console.log(contactsUsFormData);
}

function onContactsUsFormInput(e) {
  const contactsUsFormData = {};

  const formData = new FormData(e.currentTarget);
  formData.forEach((value, key) => {
    contactsUsFormData[key] = value;
  });

  const formValues = Object.values(contactsUsFormData);
  refs.contactsUsFormSubmitBtn.disabled = formValues.some((value) => !value);
}
