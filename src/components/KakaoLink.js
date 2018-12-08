import React from "react";

class KakaoLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    // // 사용할 앱의 JavaScript 키를 설정해 주세요.
    window.Kakao.init("1598359c558c0e811105006367eb346d");
  }

  handleSubmit(e) {
    e.preventDefault();
    this.sendLink();
    this.setState({ text: "" });
  }
  sendLink() {
    window.Kakao.Link.sendDefault({
      // container: "#kakao-link-btn",  // sendDefault에는 container가 필요없다.
      objectType: "text",
      text: this.state.text,
      link: {
        mobileWebUrl: "",
        webUrl: ""
      }
    });
  }

  render() {
    return (
      <div className="section">
        <div className="field">
          <label className="label">내용 쓰기</label>
          <div className="control">
            <textarea
              className="textarea"
              rows="3"
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-primary"
              onClick={e => this.setState({ text: "" })}
            >
              다시쓰기
            </button>
            <span> </span>
          </div>
          <div className="control">
            <button
              className="button is-success"
              id="kakao-link-btn"
              onClick={e => this.handleSubmit(e)}
            >
              카카오톡 전송
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default KakaoLink;
