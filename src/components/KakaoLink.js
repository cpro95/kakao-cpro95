import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Talk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      files: [],
      localUrl: ""
    };
    // 사용할 앱의 JavaScript 키를 설정해 주세요.
    window.Kakao.init("1598359c558c0e811105006367eb346d");
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log("files length: " + this.state.files.length);
    if (this.state.files.length > 0) {
      // console.log("image > 0");
      var files = this.state.files;
      window.Kakao.Link.uploadImage({
        file: files
      }).then(res => {
        // console.log("image url : " + res.infos.original.url);
        this.sendLink(res.infos.original.url);
      });
    } else {
      this.sendLink(""); // url to blank
    }
  }

  handleUpload(e) {
    e.preventDefault();
    const localUrl = URL.createObjectURL(e.target.files[0]);
    // console.log("localUrl : " + localUrl);
    this.setState({ localUrl: localUrl });
    this.setState({ files: e.target.files });
  }

  sendLink(imageUrl) {
    var url = "";
    if (imageUrl.length > 0) {
      url = imageUrl;
    }
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: this.state.text,
        imageUrl: url,
        link: {
          webUrl: url,
          mobileWebUrl: url
        }
      }
    });

    // setState 초기화
    this.setState({ text: "",files: [], localUrl: "" });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <TextField
            id="outlined-full-width"
            label="메시지"
            style={{ margin: 8 }}
            placeholder="여기에 카톡 내용을 써 주세요"
            fullWidth
            autoFocus
            multiline
            rows="5"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            value={this.state.text}
            onChange={e => this.setState({ text: e.target.value })}
          />
        </div>
        <div>
          <Button variant="outlined" onClick={e => this.setState({ text: "" })}>
            다시 쓰기
          </Button>
          <span> </span>
          <Button
            variant="outlined"
            color="primary"
            id="kakao-link-btn"
            onClick={e => this.handleSubmit(e)}
          >
            카톡 전송
          </Button>
          <input
            accept="image/*"
            className={classes.input}
            id="button-file"
            // multiple
            type="file"
            onChange={e => this.handleUpload(e)}
          />
          <label htmlFor="button-file">
            <Button
              variant="outlined"
              color="secondary"
              component="span"
              className={classes.button}
            >
              이미지 올리기
            </Button>
          </label>
        </div>
        {this.state.localUrl.length > 0 ? (
          <div>
            <CardMedia
              className={classes.media}
              image={this.state.localUrl}
              title="Uploaded Image"
            />
          </div>
        ) : (
          <span />
        )}
      </div>
    );
  }
}

Talk.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Talk);
