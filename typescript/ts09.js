// type을 저장 (type alias)
// 함수 타입 적용
var 함수09 = function (str) {
    return 10;
};
함수09("문자열");
//3.클래스 타입 (클래스 : 변수 + 함수 주제에 맞게 뭉쳐놓은 것)
//사람 클래스
var Person = /** @class */ (function () {
    //특별한 메서드(처음 생성할 때 사용되는 생성자 함수)
    function Person(name, age, job) {
        //매개변수로 받은 것을 멤버변수에 백업
        this.name;
        this.age;
        this.job;
    }
    //메서드(: 클래스 안에 있는 함수)
    Person.prototype.소개함수 = function () {
        console.log(this.name, "는", this.job); //this. === 멤버의 자기자신
    };
    return Person;
}());
var 짱구아빠 = new Person("신영만", 33, "회사원"); //new 생성자()
var 짱구 = new Person("신짱구", 5); // new constructor()
console.log(짱구아빠.소개함수());
console.log(짱구.소개함수());
