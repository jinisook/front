// fetch
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

// 페이지가 로드되면
const init = () => {
  // 1. 어제 날짜를 보여주기
  const now = new Date();
  console.log(now);

  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 월 0부터 시작함
  const day = now.getDate() - 1; // 어제 날짜

  console.log(year, month, day);

  // 2. 구한 어제 날짜를 화면에 보여주기

  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};

init();

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  // 사용자가 입력한 날짜 가져오기
  const date = txtYear.value + selMon.value + selDay.value;
  console.log(date);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f0a0229b62a9532f46c231ececcb1339&targetDt=${date}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // movieCd, movieNm, rank, rankInten
      const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      dailyBoxOfficeList.forEach((item) => {
        console.log(item.movieCd, item.movieNm, item.rank, item.rankInten);
      });
    });
});
