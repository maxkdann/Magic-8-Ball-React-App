const clickHandler = () => {
  setAnimationActive(true);
  setAnswer("");
  setTimeout(() => {
    setAnimationActive(false);
  }, 700);
  // step 2: call Magic 8 Ball API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setAnswer(data.magic.answer);
    })
    .catch((err) => {
      console.error(err);
    });
};
