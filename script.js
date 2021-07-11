const gameboard = (() => {
  let num = 0;

  const setField = (e) => {
    if (e.target.innerText == "") {
      e.target.innerText = num % 2 == 0 ? "X" : "O";
      num++;
    }
  };

  return {
    setField,
  };
})();

const gamePlay = (() => {
  const area = document.querySelectorAll(".area");
  area.forEach((eachBlock) => {
    eachBlock.addEventListener("click", gameboard.setField);
  });

  const checkWin = () => {};
})();

const player = (name, icon) => {};
