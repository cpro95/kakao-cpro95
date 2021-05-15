import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AdSense from "react-adsense";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  flex: {
    flex: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.margin}>
      <AdSense.Google
        client="ca-pub-7748316956330968"
        slot="7806394673"
        style={{ display: "block" }}
        format="auto"
        responsive="true"
        layoutKey="-gw-1+2a-9x+5c"
      />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit" className={classes.flex}>
            카카오톡 웹
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
