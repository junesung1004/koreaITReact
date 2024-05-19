// export / import
// 타입스크립트도 자바스크립트와 동일하게 export / import

//js01.js 에서 만든 변수나 함수를 내보내고 싶으면 앞에 export
//가져올 때는 import {변수명, 함수명} from '경로/파일명

// export로 내보내줘야 다른 파일에서 추가 가능
export let 글자변수 = "variable"; // import {글자변수} from './ts10';
export let num = 3; // import {글자변수, num} from './ts10'

export function 함수10(): number {
  return 10;
}

//타입도 내보내기가 가능
export type newType = string | number | undefined;
