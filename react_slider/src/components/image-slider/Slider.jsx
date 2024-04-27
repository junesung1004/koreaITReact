import React, { useEffect, useState } from "react";
import "./Slider.css";
//npm install react-icons --> 리액트 아이콘
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Slider(props) {
  //state를 2개 만든다 (이미지, 현재슬라이드 번호)
  let [images, setImages] = useState([]);
  let [curSlide, setCurSlide] = useState(0);
  let [loading, setLoading] = useState(false);
  let [errMsg, setErrMsg] = useState(null);

  //picsum 서버에서 get요청을 통해 이미지를 받아오자
  useEffect(() => {
    //mount 생성시, update 갱신시, unmount 제거시
    //3개의 이벤트에 대해서 실행할 코드를 넣는 공간
    //평소에는 mount와 update는 같이 동작
    //unmount는 return()에서 동작
    //update의 동작을 특정 대상에 대해서만 실행하려면
    //두번째 인자에 [] 넣어줌
    if (props.url !== "") {
      //fetch를 통해서 이미지를 get요청하자
      fetchImages(props.url);
      console.log(images);
    }

    return () => {
      //unmount 공간
    };
  }, [props.url]); // [] 안에 state를 넣으면 update가 해당 state갱신시에만 발동하게 변경

  async function fetchImages(getUrl) {
    setLoading(true);
    //get 요청으로 이미지 경로를 받아온다 (async 비동기 : 화면동작에 영향을 미치지 않기 위해)
    let response = await fetch(
      `${getUrl}?page=${props.page}&limit=${props.limit}`
    );
    const data = await response.json();

    if (data) {
      setImages((prev) => data);
      setLoading((prev) => false);
    }
  }
  //console.log(images);

  function goPrev() {
    if (curSlide === 0) {
      //마지막 위치는 전체크기에서 -1
      setCurSlide(images.length - 1);
    } else {
      //이전 슬라이드 번호로
      setCurSlide(curSlide - 1);
    }
  }

  function goNext() {
    //마지막 위치면 첫번째 슬라이드로 이동
    if (curSlide === images.length - 1) {
      setCurSlide(0);
    } else {
      setCurSlide(curSlide + 1);
    }
  }

  return (
    <>
      <div className="slider-container">
        <FaArrowLeft className={"arrow arrow-left"} onClick={goPrev} />
        {images && images.length ? (
          images.map((image, idx) => {
            return (
              <img
                key={idx}
                src={image.download_url}
                width={"300px"}
                className={
                  curSlide === idx
                    ? "current-image"
                    : "current-image hide-cuurent-image"
                }
              />
            );
          })
        ) : (
          <div>이미지 로딩중.....</div>
        )}
        <FaArrowRight className={"arrow arrow-right"} onClick={goNext} />
      </div>
    </>
  );
}

// export default : 파일의 대표
// export : 추가로 내보낼 변수 또는 함수
