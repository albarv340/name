function generateName() {
  fetch("adjektiv.txt")
    .then(response => response.text())
    .then(text => {
      const adjektiv = text.split("\n");
      fetch("substantiv.txt")
        .then(response => response.text())
        .then(text => {
          const substantiv = text.split("\n");
          let resultAdjektiv = adjektiv[
            Math.floor(Math.random() * adjektiv.length)
          ].replace(/(\r\n|\n|\r)/gm, "");
          resultAdjektiv =
            resultAdjektiv.charAt(0).toUpperCase() + resultAdjektiv.slice(1);
          let resultSubstantiv = substantiv[
            Math.floor(Math.random() * substantiv.length)
          ].replace(/(\r\n|\n|\r)/gm, "");
          resultSubstantiv =
            resultSubstantiv.charAt(0).toUpperCase() +
            resultSubstantiv.slice(1);
          const result =
            resultAdjektiv +
            resultSubstantiv +
            Math.floor(Math.random() * 9) +
            Math.floor(Math.random() * 9);
          document.getElementById("name").innerText = result;
        });
    });
}
generateName();
