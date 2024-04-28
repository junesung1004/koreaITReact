import React, { useEffect, useState } from "react";
import "./ScrollIndicator.css";

//ScrollIndicator({url})  함수에 props로 url을 넣었으면 상위 컴포넌트 app컴포넌트에 url을 넣어야 한다
// function App() {
//   return (
//     <div className="App">
//       <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
//     </div>
//   );
// }

export default function ScrollIndicator({ url }) {
  // useEffect에서 비동기로 fetch(get요청)
  //useEffect는 화면과 별개인 작업들을 별개로 작업을 주로 한다 setTimeout setInterval
  //1.서버에서 데이터를 받아옴
  //2.서버의주소
  //3.데이터를 저장할 state
  //4.fetch와 같은 오래 걸리는 작업을 처리할 useEffect

  //응답 데이터를 받아서 저장할 state
  //data 빈 배열
  const [data, setData] = useState([]); // useEffect안에 fetch 로 요청한 get data를 state 에 담기 위해 선언.

  //상태 : 서버데이터, 로딩체크, 에러, 스크롤 위치
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  let [scrollPercentage, setScrollPercentage] = useState(0);

  //fetch (http요청)은 화면에 영향이 가지 않도록 async 제작
  async function fetchData() {
    try {
      //서버에 요청을 하기 전에 로딩 상태로 만든다
      setLoading(true); // 로딩상태 on

      //처리가 완료 될때까지 기다리기 위해 await
      let res = await fetch(url); // get요청

      // fetch로 get요청을 한 데이터를 응답으로 받은 문자열을 json으로 인식
      const res_json = await res.json();
      setData((prev) => res_json.products); // setData는 === const [data, setData] = useState([]); state를 가르킨다.

      //데이터에 성공적으로 저장했으니깐 로딩상태 해제
      setLoading(false);
    } catch (e) {
      //에러 발생시 (try코드를 수행하다가 에러가 발생하면 즉시 이곳으로)
      setErrMsg(e.message);
      console.log("err :", e);
    }
  }
  //console.log(data);

  //사이드 기능(화면 외)은 useEffect
  //useEffects : 컴포넌트 생성시, 변경시, 해제시 코드 삽입
  useEffect(() => {
    //처음에는 무조건 1번 실행(mount)
    //fetch로 get요청해서 데이터를 받아서 data에 넣자
    fetchData(url);

    return () => {
      //update시 실행
      <></>;
    };
  }, [url]); // url이 바뀔때마다 실행(안적으면 모든 데이터에 대해 실행) - unmount

  //스크롤 이벤트
  useEffect(() => {
    window.addEventListener("scroll", changeScrollEvent);
    return () => {
      window.removeEventListener("scroll", changeScrollEvent);
    };
  }, []);
  //스크롤 이벤트 함수
  function changeScrollEvent() {
    //스크롤 위치를 감지 ==> 현재 스크롤 위치
    let scrolled = document.documentElement.scrollTop;

    //창이 작을수도 있으니깐 현재 열려있는 창의 스크롤 범위를 계산
    //전체 스크롤 가능한 높이값을 계산
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // (현재 ÷ 전체) * 100 : 퍼센트
    setScrollPercentage((scrolled / height) * 100);
  }
  console.log(scrollPercentage);

  //로딩일때 데이터 로딩중이라고 화면에 잠시 띄우는코드
  if (loading) {
    // 로딩중이면(true면)
    //컴포넌트도 함수이기 때문에 return을 만나면 그 즉시 종료(밑에 코드 실행x)
    return <div>데이터 로딩중...</div>;
  }

  // 에러메시지에 무언가 있으면
  if (errMsg) {
    return <div>{errMsg}</div>;
  }

  return (
    <>
      <div className="top-nav-container">
        <h1>Scroll Indicator</h1>
        {/* 스크롤 진행도 전체 범위 */}
        <div className="scroll-progress-bar">
          {/* 스크롤의 실제 위치를 퍼센트로 그려줄 박스 */}
          <div
            className="curuent-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* 스크롤용 데이터 */}
      <div className="data-list">
        {
          //data를 map을 통해 p 태그로 title을 출력
          //data가 비어있지 않고 길이가 0보다 클때 p태그 생성
          data && data.length > 0
            ? data.map((el, idx) => {
                return <p key={idx}>{el.title}</p>;
              })
            : null
        }
      </div>
    </>
  );
}
