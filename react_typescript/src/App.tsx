import React from "react";

import "./App.css";
import Profile from "./components/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState, 증가, 감소, 더하기, 초기화 } from "./index";

// 타입스크립트 (자바스크립트 + 타입명시)
// let name : string = 'june';
// let age : number = 13;
// let isStudent : boolean = false;
// let role : (string | number)[]  = [1,2,3,"가","나"]

/*type Person = { 
    name: string; 
    age: number; 
    isAdult?: boolean 
};

let person: Person = { 
    name: "june", 
    age: 13, 
    isAdult: false 
};
/*

/*
  function App() : JSX.Element {
    let 박스 : JSE.Element = <div>박스</div>
  }
*/

function App(): JSX.Element {
  //index.tsx 에서 초기값 이라는 변수를 가져온다는 내용의 코드
  //리덕스에서 state/변수 꺼내올려면 useSelector 사용
  //const 리덕스에서꺼내옴 = useSelector((state: {count:number}) => state);
  const 리덕스에서꺼내옴 = useSelector((state: RootState) => state);

  //index.tsx 에서 reducer 함수를 가져오는 훅
  //dispatch라는 키워드를 통해서 리듀서의 함수를 사용 가능
  //리듀서의 함수는 리덕스에 보관된 상태/변수를 수정하기 위해 제공
  const dispatch: Dispatch = useDispatch();

  return (
    <div className="App">
      <Profile name={"홍길동"} age={20} />
      {/* <p>{리덕스에서꺼내옴.count}</p> */}
      <p>{리덕스에서꺼내옴.리듀서1.count}</p>
      <p>{리덕스에서꺼내옴.리듀서1.user}</p>
      <button onClick={() => dispatch(증가())}>버튼</button>
      <button onClick={() => dispatch(감소())}>감소</button>
      <button onClick={() => dispatch(더하기(3))}>더하기</button>
      <button onClick={() => dispatch(초기화())}>초기화</button>
    </div>
  );
}

export default App;
