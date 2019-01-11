import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
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
      files: FileList,
      imageUrl: ""
    };
    // 사용할 앱의 JavaScript 키를 설정해 주세요.
    window.Kakao.init("1598359c558c0e811105006367eb346d");
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ text: "" });
    if(this.state.files.length > 0) {
      console.log("image > 0");
      var files = this.state.files;
      window.Kakao.Link.uploadImage({
        file: files
      }).then(function(res){
        console.log(res.infos.original.url);
        this.setState({imageUrl: res.infos.original.url})
      });

      this.sendLink();
    }
  }

  handleUpload(e) {
    e.preventDefault();
    // const files = Array.from(e.target.files);
    // const files = [...e.target.files];
    console.log(e.target.files);
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name)
    // console.log(files[0].size);
    // console.log(files[1].name);
    this.setState({ files: e.target.files });
    console.log(this.state.files);
  }

  sendLink() {
    window.Kakao.Link.sendDefault({
      // container: "#kakao-link-btn",  // sendDefault에는 container가 필요없다.
      objectType: "text",
      text: this.state.text,
      imageUrl: this.state.imageUrl,
      link: {
        mobileWebUrl: "",
        webUrl: ""
      }
    });
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
          <Button
            variant="contained"
            onClick={e => this.setState({ text: "" })}
          >
            다시 쓰기
          </Button>
          <span> </span>
          <Button
            variant="contained"
            color="primary"
            id="kakao-link-btn"
            onClick={e => this.handleSubmit(e)}
          >
            카톡 전송
          </Button>
        </div>
        <div>
          <Button component="label" className={classes.button}>
            Upload
            <input
              accept="image/*"
              className={classes.input}
              id="raised-button-file"
              multiple
              type="file"
              onChange={e => this.handleUpload(e)}
            />
          </Button>
          <TextField
            value={this.state.files}
          />
        </div>
      </div>
    );
  }
}

Talk.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Talk);
