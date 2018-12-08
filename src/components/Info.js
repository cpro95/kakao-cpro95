import React from "react";

function Info() {
  return (
    <section className="hero is-info is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">카카오 서비스</h1>
          <h2 className="subtitle">내 컴퓨터로 카카오톡 쓰기</h2>
          <div className="container">
            <p className="is-size-6">
              카카오 i디벨로퍼 API를 이용해서 컴퓨터로 간단하게 카카오톡 링크를
              전송할 수 있습니다.
            </p>
            <p className="is-size-6">
              아래 폼에 내용을 쓰고 카카오톡 전송 버튼을 누르면 카카오 아이디
              로그인 창이 뜨면서 메시지를 원하는 친구나 채팅창에 전송할 수
              있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
