// Make a number guessing game using Javascript!

// 0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
// 범위에는 음수가 포함될 수 없습니다.
// 실시간으로 범위 값을 업데이트해야 합니다.
// 유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
// 유저에게 게임의 승패를 알려야 합니다.

const mainForm = document.getElementById("main-Form");
const maximumNumberElement = document.getElementById("maximumNumber");
const guessNumberElement = document.getElementById("guessNumber");
const resultNumberElement = document.getElementById("resultNumber");
const finalResultElement = document.getElementById("finalResult");

function createRandomNumber(maximumNumber) {
  const randomNumber = Math.round(Math.random() * maximumNumber);
  if (randomNumber === 0) {
    return 1;
  }
  return randomNumber;
}

function checkValidationNumber(maximumNumber, guessNumber) {
  let maximumNumberFlg;
  let guessNumberFlg;
  let checkRequiredNumberFlg;

  if (maximumNumber < 1) {
    alert("Please enter a positive number in Maximum Number.");
    maximumNumberElement.value = "";
  } else {
    maximumNumberFlg = true;
  }

  if (guessNumber < 1) {
    alert("Please enter a positive number in Guess Number.");
    guessNumberElement.value = "";
  } else if (guessNumber > maximumNumber) {
    alert("The Guess Number is greater than the Maximum Number.");
    guessNumberElement.value = "";
  } else {
    guessNumberFlg = true;
  }

  if (maximumNumberFlg && guessNumberFlg) {
    checkRequiredNumberFlg = true;
  } else {
    checkRequiredNumberFlg = false;
  }

  return checkRequiredNumberFlg;
}

function paintResult(randomNumber, guessNumber) {
  if (guessNumber === randomNumber) {
    finalResultElement.innerText = "You won!";
  } else {
    finalResultElement.innerText = "You lost!";
  }
  resultNumberElement.innerText = `You chose : ${guessNumber} , the machine chose : ${randomNumber}`;
}

function clickPlayButton(event) {
  event.preventDefault();
  const maximumNumber = parseInt(maximumNumberElement.value);
  const guessNumber = parseInt(guessNumberElement.value);
  const randomNumber = createRandomNumber(maximumNumber);
  if (checkValidationNumber(maximumNumber, guessNumber)) {
    paintResult(randomNumber, guessNumber);
  } else {
    resultNumberElement.innerText = "";
    finalResultElement.innerText = "Please enter a right number.";
  }
}

mainForm.addEventListener("submit", clickPlayButton);
