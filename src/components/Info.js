import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  text: {
    lineHeight: "2.0rem",
    fontWeight: "bold"
  }
});

function Info(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h3">
        카카오 서비스
      </Typography>
      <br />
      <Typography component="p" className={classes.text}>
        카카오 디벨로퍼 API를 이용해서
        <br />
        컴퓨터로 간단하게 카카오톡 링크를 전송할 수 있습니다.
        <br />
        아래 폼에 내용을 쓰고 카카오톡 전송 버튼을 누르면
        <br />
        카카오 아이디 로그인 창이 뜨면서
        <br />
        메시지를 원하는 친구나 채팅창에 전송할 수 있습니다.
        <br />
      </Typography>
    </div>
  );
}

Info.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Info);
