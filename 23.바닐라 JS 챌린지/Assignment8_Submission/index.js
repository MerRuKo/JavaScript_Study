const clockTitle = document.querySelector(".js-clock");

function getTimeUntilChristmas() {
  const nowDate = new Date();
  const currentYear = nowDate.getFullYear();
  const nextChristmas = new Date(currentYear, 11, 25);
  // Date 객체의 생성자에서 사용하는 월(month) 인덱스는 0부터 시작해서 12가 아니고 11

  // 올해 크리스마스 지났다면 년도 플러스1
  if (nowDate > nextChristmas) {
    nextChristmas.setFullYear(currentYear + 1);
  }

  // 남은 시간 계산
  const totalSeconds = Math.floor((nextChristmas - nowDate) / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  // 012d 03h 04m 05s 형식으로 패딩
  const paddedDays = String(days).padStart(3, "0");
  const paddedHours = String(hours).padStart(2, "0");
  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  displayTime(paddedDays, paddedHours, paddedMinutes, paddedSeconds);
}

function displayTime(days, hours, minutes, seconds) {
  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getTimeUntilChristmas();

setInterval(getTimeUntilChristmas, 1000);
