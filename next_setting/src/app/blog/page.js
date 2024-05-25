import Link from "next/link";
import React from "react";

export default function BlogPage() {
  return (
    <>
      <h1>blog page</h1>
      <p>
        <Link href={"/blog/post-1"}>게시글1</Link>
      </p>
      <p>
        <Link href={"/blog/post-2"}>게시글2</Link>
      </p>
    </>
  );
}

//하나의 블로그에는 무수히 많은 게시글이 있을 수 있음
//일일히 url로 만들어 줄 수 없음
//동적 url을 사용 (동적 라우트)
// 폴더명을 [slug] 로 적용
//blog 폴더 밑에 [slug] 폴더를 만들면 (+page.js까지)
// blog/~~~ 로 이동 가능
