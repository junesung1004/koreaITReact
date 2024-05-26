import React, { useState } from "react";

// 리액트 기반 컴포넌트는 .tsx 파일명으로 생성
// .ts는 리액트 컴포넌트는 안됨 (jsx문법 사용 불가)

export default function Profile(props: { name: string; age: number }): JSX.Element {
  //state는 일반적으로 타입을 명시x (초기값 적용)
  let [myState, setMyState] = useState([]);

  return (
    <>
      <p>{props.name} 입니다.</p>
    </>
  );
}
