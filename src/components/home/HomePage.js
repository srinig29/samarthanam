import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AgeCard from "../agecard/AgeCard";
import lrData from "../../assests/data/learningRate.json";

import happy from "../../assests/images/happy.png";
import neutral from "../../assests/images/neutral.png";
import surprise from "../../assests/images/surprise.png";
import sad from "../../assests/images/sad.png";
import angry from "../../assests/images/angry.png";
import buttonImage from "../../assests/images/button.png";

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: "left",
    paddingLeft: theme.spacing.unit * 3
  },
  container: {
    background: "#f0f1f3",
    paddingLeft: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2
  },
  learningStatsTitle: {
    fontSize: "1.25em",
    fontWeight: "normal",
    width: "210px",
    borderBottom: "0.2em solid #445f8a"
  },
  learningStatsHeading: {
    textAlign: "left"
  },
  learningStatsContent: {
    textAlign: "left",
    paddingBottom: theme.spacing.unit * 2
  },
  learningStatsInfo: {
    textAlign: "left",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  emotionimages: {
    height: "100px"
    // background: "#a5e5c0"
  },
  row: {
    display: "flex",
    backgroundColor: theme.palette.common.white
  },
  rowItem: {
    margin: "auto"
  }
});

class HomePage extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const learningData = lrData.lr;
    return (
      <div className={classes.root}>
        <span className={classes.learningStatsTitle}>Learning Statistics</span>
        <Grid className={classes.container} container>
          <Grid item xs={12} className={classes.learningStatsHeading}>
            <Typography variant="subheading"> Learning Rate</Typography>
          </Grid>
          <Grid item xs={12} className={classes.learningStatsContent}>
            <Typography>
              This is the measure of the effectiveness of how slow or fast
              students are navigating through various activities across
              categories
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ul style={{ display: "flex" }}>
              {learningData.map(function(learningRate, index) {
                return <AgeCard key={index} item={learningRate} />;
              })}
            </ul>
          </Grid>
          <Grid item xs={12} className={classes.learningStatsInfo}>
            <Typography>
              The above table represents school wise “Learning Rate” data across
              four categories. This is an aggregated view that gives a sense of
              learning rate at the ID School. Higher the LR or a value close to
              1, signifies that the students are learning activities of the
              category for the age level faster and in an effecient way.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", float: "right" }}>
              <span style={{ margin: "auto", marginRight: "10px" }}>
                {" "}
                Learning Graph
              </span>
              <img src={buttonImage} style={{ height: "40px" }} />
            </div>
          </Grid>
        </Grid>
        <div style={{ height: "20px" }} />
        <span className={classes.learningStatsTitle}>Emotional Statistics</span>
        <Grid className={classes.container} container>
          <Grid item xs={12} className={classes.learningStatsHeading}>
            <Typography variant="subheading">How were the response?</Typography>
          </Grid>
          <Grid container spacing={16}>
            <Grid item xs>
              <div className={classes.row}>
                <img
                  className={classes.emotionimages}
                  src={happy}
                  alt="happy"
                />
                <div className={classes.rowItem}>
                  <Typography variant="h5"> Happy</Typography>
                  <Typography variant="h3"> 40%</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs>
              <div className={classes.row}>
                <div style={{ position: "relative" }}>
                  <img
                    className={classes.emotionimages}
                    style={{ display: "block" }}
                    // backgroundColor: "#98ebf1"
                    src={neutral}
                    alt="Neutral"
                  />
                  <div
                    style={{
                      position: "absolute",
                      height: "100%",
                      backgroundColor: "#FFF333"
                    }}
                  />
                </div>
                <div className={classes.rowItem}>
                  <Typography variant="h5"> Neutral</Typography>
                  <Typography variant="h3"> 40%</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs>
              <div className={classes.row}>
                <img
                  className={classes.emotionimages}
                  style={{ backgroundColor: "#ebe496" }}
                  src={surprise}
                  alt="Surprise"
                />
                <div className={classes.rowItem}>
                  <Typography variant="h5"> Surprise</Typography>
                  <Typography variant="h3"> 40%</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs>
              <div className={classes.row}>
                <img
                  className={classes.emotionimages}
                  style={{ backgroundColor: "#af9c96" }}
                  src={sad}
                  alt="Sad"
                />
                <div className={classes.rowItem}>
                  <Typography variant="h5"> Sad</Typography>
                  <Typography variant="h3"> 40%</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs>
              <div className={classes.row}>
                <img
                  className={classes.emotionimages}
                  style={{ backgroundColor: "#dfadae" }}
                  src={angry}
                  alt="Angry"
                />
                <div className={classes.rowItem}>
                  <Typography variant="h5"> Angry</Typography>
                  <Typography variant="h3"> 40%</Typography>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", float: "right", marginTop: "20px" }}>
              <span style={{ margin: "auto", marginRight: "10px" }}>
                {" "}
                Emotional Tracking
              </span>
              <img src={buttonImage} style={{ height: "40px" }} />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
