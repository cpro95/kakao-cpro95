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

  componentDidMount() {
    this.sendLink();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.sendLink();
    this.setState({text: ""});
  }
  sendLink() {
    // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
    window.Kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
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
      <div>
          <div className="form-group">
            <label htmlFor="FormControlTextarea1">내용 쓰기</label>
            <textarea
              className="form-control"
              id="FormControlTextarea1"
              rows="3"
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
            />
          </div>
          <button className="btn btn-secondary"
          onClick={ (e) => this.setState({text:""})}
          >다시쓰기</button>
        <span>{" "}</span>
          <button
            className="btn btn-primary"
            id="kakao-link-btn"
            onClick={e => this.handleSubmit(e)}
          >
            카카오톡 전송
          </button>
      </div>
    );
  }
}

export default KakaoLink;
