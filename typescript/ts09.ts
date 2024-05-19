// type을 저장 (type alias)

//1. 변수에 쓰이는 타입 방법
type myNewType = string | number | undefined;

//2.함수에 쓰이는 타입을 저장 (매개변수와 리턴의 타입)
//str이라는 매개변수로 문자열을 받아서 return number타입으로 리턴하는 타입
type myFuncType = (str: string) => number;

// 함수 타입 적용
let 함수09: myFuncType = (str) => {
  return 10;
};

함수09("문자열");

//3.클래스 타입 (클래스 : 변수 + 함수 주제에 맞게 뭉쳐놓은 것)
//사람 클래스
class Person {
  // 멤버변수 (:클래스 안에 있는 변수)
  name: string; // 그 사람의 이름
  age: number; // 그 사람의 나이
  job: string; // 그 사람의 직업

  //메서드(: 클래스 안에 있는 함수)
  소개함수(): void {
    console.log(this.name, "는", this.job); //this. === 멤버의 자기자신
  }

  //특별한 메서드(처음 생성할 때 사용되는 생성자 함수)
  constructor(name: string, age: number, job?: string) {
    //매개변수로 받은 것을 멤버변수에 백업
    this.name;
    this.age;
    this.job;
  }
}

let 짱구아빠 = new Person("신영만", 33, "회사원"); //new 생성자()
let 짱구 = new Person("신짱구", 5); // new constructor()

console.log(짱구아빠.소개함수());
console.log(짱구.소개함수());
