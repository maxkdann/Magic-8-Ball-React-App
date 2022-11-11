const clickHandler = async () => {
  setAnimationActive(true);
  setTimeout(() => {
    setAnimationActive(false);
  }, 700);
  // call Magic 8 Ball API
  fetch(uri)
    .then((response) => response.json())
    .then((json) => {
      setAnswer(json.magic.answer);
    })
    .catch((err) => {
      console.log(err);
    });
};
