import React, { Component } from "react";
// import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import Footer from "./components/Footer";
import KakaoLink from "./components/KakaoLink";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <Paper className={classes.root} elevation={1}>
        <Info />
        <KakaoLink />
        </Paper>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  classes : PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
