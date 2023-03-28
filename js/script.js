document.addEventListener("DOMContentLoaded", () => {
  const adviceIdSpan = document.getElementById("advice_id");
  const adviceTextDiv = document.querySelector(".advice__text");
  const dice = document.querySelector(".dice");

  const getQoute = async () => {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    const data = await response.json();
    adviceIdSpan.innerText = data.slip.id;
    adviceTextDiv.innerText = `"${data.slip.advice}"`;
  };


  dice.onclick = () => {
    getQoute()
  };
});
