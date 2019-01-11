import React from "react";
import { Link, withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TalkIcon from "@material-ui/icons/Chat";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = {
  root: {
    flexGrow: 1
  },

  flex: {
    flex: 1
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },

  inputButton: {
    marginLeft: 20,
    marginRight: -12,
    color: "white",
    backgroundColor: "transparent",
    float: "right"
  },

  searchBox: {
    flex: 1,
    float: "right"
  },

  list: {
    width: "auto"
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      left: false,
      right: false
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleDrawer(side, open) {
    this.setState({
      [side]: open
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const search = this.state.search;
    this.setState({
      search: ""
    });
    this.props.history.push(`/search?q=${search}`);
  }

  handleChange = async event => {
    const { target } = event;
    const value = target.value;
    await this.setState({
      search: value
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <ListItem button>
            <ListItemIcon>
              <TalkIcon />
            </ListItemIcon>
            <ListItemText primary="Talk" />
          </ListItem>
        </Link>
        <Divider />
        <a style={{ textDecoration: "none" }} href="http://github.com/cpro95">
          <ListItem button>
            <ListItemIcon>
              <SvgIcon>
                <path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
              </SvgIcon>
            </ListItemIcon>
            <ListItemText primary="Github" />
          </ListItem>
        </a>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon onClick={() => this.toggleDrawer("left", true)} />
              <Drawer
                open={this.state.left}
                onClose={() => this.toggleDrawer("left", false)}
              >
                <div
                  tabIndex={0}
                  role="button"
                  onClick={() => this.toggleDrawer("left", false)}
                  onKeyDown={() => this.toggleDrawer("left", false)}
                >
                  {sideList}
                </div>
              </Drawer>
            </IconButton>
            <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Talk
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Header));
