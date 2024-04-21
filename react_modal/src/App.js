import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/modal-popup/Modal.jsx";
import { useState } from "react";
// .jsx : 자바스크립트에서 html형식으로 코딩할 수 있게 해주는 확장자
// state를 만들어서 모달창을 띄우고 지우고

function App() {
  const [showModal, setShowModal] = useState(false); // true면 모달창 뜨고 false면 안뜨고

  function modalClose() {
    setShowModal((prev) => false);
  }

  // 버튼을 누르면 setShowModal 을 true로 바꾼다. (showModal을 true로 바꾼다.)
  const clickShowModal = () => {
    setShowModal((prev) => true);
  };
  return (
    <div className="App">
      <button onClick={clickShowModal}>모달창 열기</button>
      {showModal === true ? (
        <Modal
          id={"modal-1"}
          onClose={modalClose}
          _header={<h1>Blog</h1>}
          _main={<div>블로그 기록</div>}
          _footer={<p>설명</p>}
        />
      ) : null}
    </div>
  );
}

export default App;
