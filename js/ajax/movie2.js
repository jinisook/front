// axios
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
  axios.get(url).then((reponse) => {
    console.log(reponse.data);
    // movieCd, movieNm, rank, rankInten
    const dailyBoxOfficeList = reponse.data.boxOfficeResult.dailyBoxOfficeList;
    let contents = "";
    dailyBoxOfficeList.forEach((item) => {
      console.log(item.movieCd, item.movieNm, item.rank, item.rankInten);
      // 1위 위키드 : 포 굿(0)
      // 7위 세계의 주인(▴ 1)
      // 9위 퍼스트 라이드(▾ 1)
      contents += `${item.rank}위 `;
      contents += `<a href=${item.movieCd}> ${item.movieNm} </a>`;
      contents += `(`;
      if (item.rankInten > 0) {
        contents += `▴ ${item.rankInten})`;
      } else if (item.rankInten < 0) {
        contents += `▾ ${item.rankInten})`;
      } else {
        contents += `${item.rankInten})`;
      }
      contents += `<br>`;
      // let contents = `<div> ${item.rank} ${item.movieNm} ${item.rankInten} </div>`;
    });
    document.querySelector("#msg").innerHTML = contents;
  });
});

// 영화 제목 클릭 시
// 영화상세정보 요청

// a 태그 기능 중지
// movieCd 값 가져오기
document.querySelector("#msg").addEventListener("click", (e) => {
  e.preventDefault();
  // 이벤트 대상 확인
  console.log(e.target);
  console.log(e.target.href);
  const movieCd = e.target.getAttribute("href");
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f0a0229b62a9532f46c231ececcb1339&movieCd=${movieCd}`;

  // 한글제목 : 위키드:포 굿
  // 영어이름 : Wicked:For Good
  // 상영시간 : 137분
  // 장르 : 판타지, 뮤지컬, 어드벤쳐
  // 감독 : 존 추
  // 배우 : 산시아 에리보, 아리아나 그란데, 조나단 베일리, ~~~, 제프 골드블럼
  // 장르, 배우만 forEach

  axios.get(url).then((reponse) => {
    console.log(reponse.data.movieInfoResult.movieInfo);
    const movieInfo = reponse.data.movieInfoResult.movieInfo;
    let movieDetail = "<ul>";
    movieDetail += `<li>한글 제목 : ${movieInfo.movieNm}</li>`;
    movieDetail += `<li>영어 제목 : ${movieInfo.movieNmEn}</li>`;
    movieDetail += `<li>상영시간 : ${movieInfo.showTm}</li>`;
    let genres = "";
    movieInfo.genres.forEach((genre) => {
      genres += `${genre.genreNm},`;
    });
    movieDetail += `<li>장르 : ${genres}</li>`;
    let directors = "";
    movieInfo.directors.forEach((director) => {
      directors += `${director.peopleNm},`;
    });
    movieDetail += `<li>감독 : ${directors}</li>`;
    let actors = "";
    movieInfo.actors.forEach((actor) => {
      actors += `${actor.peopleNm},`;
    });
    movieDetail += `<li>배우 : ${actors}</li>`;
    movieDetail += `</ul>`;
    document.querySelector("#detail").innerHTML = movieDetail;
  });
});
