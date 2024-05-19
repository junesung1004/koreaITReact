// ...파라미터(무한히 들어올 수 있는 매개변수)
// rest parameter (...) : 몇개가 입력될지 정확히 모를 때, 배열형태로 무한히 받음
function 함수8(...variable: (number | string)[]) {
  console.log(variable); // [1,2,3,4]
}

함수8(1);
함수8(1, 2, 3, 4, "a", "c");

// ... : rest파라미터 (매개변수)
// ... : spread operator (배열 / 객체 나누기)

let arr1 = [1, 2, 3]; //number[]
let arr2 = ["a", "b", "c"]; //string[]

// unknown, any : 뭐든지 다 가능
// 배열을 붙일 때는 ...으로 분해하고 합친 후 다시 []
let arr3: (string | number)[] = [...arr1, ...arr2];

let [변수명1, 변수명2]: (string | number)[] = ["hello", 300];
let { key1, key2 } = { key1: true, key2: 30 };
let obj08 = { key1: true, key2: 30 };

//<Component1 id:id, pw:pw />
function Component1(props: { id: string; pw: string }) {
  console.log(props.id);
  console.log(props.pw);
}

function Component2({ id, pw }) {
  console.log(id);
  console.log(pw);
}
