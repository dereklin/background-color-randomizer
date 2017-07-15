export const randomizeBgColors = (interval = 1000, totalTime = 10000) => {
  let usedBgColors = {};

  function getRandomHexColor() {
    let c = '#000000'.replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
    while (usedBgColors[c] !== undefined) {
      c = getRandomHexColor();
    }
    usedBgColors[c] = true;
    return c;
  }

  document.body.style['background-color'] = getRandomHexColor();
  const bgInterval = setInterval(() => {
    document.body.style['background-color'] = getRandomHexColor();
  }, interval);
  setTimeout(() => {
    clearInterval(bgInterval);
  }, totalTime - interval);

};