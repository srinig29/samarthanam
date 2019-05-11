import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    marginRight: "10px",
    maxWidth: 260
  },
  cardHeader: {
    backgroundColor: "#3D619B",
    color: "red"
  },
  cardContentLable: {
    float: "left"
  },
  cardContentValue: {
    paddingLeft: "15em"
  },
  title: {
    color: "#FFFFFF"
  },
  subheader: {
    color: "#FFFFFF"
  }
});

class AgeCard extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, key, item } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardHeader
            title="Age Level"
            subheader={item.ageLevel}
            className={classes.cardHeader}
            classes={{
              title: classes.title,
              subheader: classes.subheader
            }}
          />
          <CardContent>
            <Typography
              type="title"
              color="inherit"
              className={classes.cardContentLable}
            >
              Cognitive:
            </Typography>

            <Typography
              type="content"
              color="inherit"
              className={classes.cardContentValue}
            >
              {item.cognitive}
            </Typography>
            <Typography
              type="title"
              color="inherit"
              className={classes.cardContentLable}
            >
              Communication & Language:
            </Typography>

            <Typography
              type="content"
              color="inherit"
              className={classes.cardContentValue}
            >
              {item.commLang}
            </Typography>

            <Typography
              type="title"
              color="inherit"
              className={classes.cardContentLable}
            >
              Self Help:
            </Typography>

            <Typography
              type="content"
              color="inherit"
              className={classes.cardContentValue}
            >
              {item.selfHelp}
            </Typography>

            <Typography
              type="title"
              color="inherit"
              className={classes.cardContentLable}
            >
              Social:
            </Typography>

            <Typography
              type="content"
              color="inherit"
              className={classes.cardContentValue}
            >
              {item.social}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

AgeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AgeCard);
