import React from "react";
/*
  로딩 게시글 페이지마다 글이 달라야 하니깐
  매개변수로 {params} 로 받는다.
  {params.slug} ==> 동적 url 생성
*/

export default function BlogPostPage({ params }) {
  return (
    <>
      <h1>blog post page</h1>
      <p>{params.slug}</p>
    </>
  );
}

/*
  {params} : 동적 라우트에서 사용되는 매개변수
  동적 라우트 설정하려면 폴더명에 []
*/
