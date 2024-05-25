import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

/* next.js
  1. next.js : react.js(프론트엔드) 에 node.js(백엔드) 코드를 넣을 수 있게 제공
  -백엔드 : db연결, 파일쓰기, 권한, 서버
  2. 메타(구 페이스북 제공)
  3. 리액트 기반 프레임워크
  - 리액트 : 자바스크립트 라이브러리 <코드제공>
  - 넥스트 : 리액트 프레임워크 <틀을 제공>
  4. 서버 사이드 렌더링이 가능
  5. 파일 기반의 라우팅 제공 (코드로 url을 결정하는 것이 아닌 파일 구조로 결정)

  npx create-next-app@latest 프로젝트명
  
  next.js = 리액트 프레임워크 (틀 기반 작업)
  page.js : 각 페이지
  layout.js : page.js를 감싸는 파일  = 즉 경로 설정하는 페이지
  non-found.js : Not Found 오류에 해당하는 페이지
  error.js : 기타 오류에 대한 페이지
  loading.js : 로딩 페이지
  route.js : API 경로 생성 (JSON) 페이지
*/

export default function Home() {
  return (
    <>
      <div>
        <Link href={"/about"}>about page 이동</Link>
      </div>
      <div>
        <Link href={"/blog"}>blog page 이동</Link>
      </div>
    </>
  );
}
