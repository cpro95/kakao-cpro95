import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign : 'center'  
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <div>
      <br />
      <Paper className={classes.root} elevation={1}>
        <Typography component="p">
          Made with React & Material-UI / MIT Licence.
        </Typography>
      </Paper>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);