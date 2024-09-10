const fetchContactsUsData = async (data) => {
  const options = {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  try {
    await fetch('/mail.php', options);
  } catch (error) {
    console.log(error);
  }
};

export default fetchContactsUsData;
