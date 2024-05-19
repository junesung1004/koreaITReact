"use strict";
// export / import
// 타입스크립트도 자바스크립트와 동일하게 export / import
Object.defineProperty(exports, "__esModule", { value: true });
exports.함수10 = exports.num = exports.글자변수 = void 0;
//js01.js 에서 만든 변수나 함수를 내보내고 싶으면 앞에 export
//가져올 때는 import {변수명, 함수명} from '경로/파일명
// export로 내보내줘야 다른 파일에서 추가 가능
exports.글자변수 = "variable"; // import {글자변수} from './ts10';
exports.num = 3; // import {글자변수, num} from './ts10'
function 함수10() {
    return 10;
}
exports.함수10 = 함수10;
