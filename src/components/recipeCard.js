import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Chip,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Card,
  CardActionArea,
} from "@material-ui/core";
import { navigate } from "@reach/router";
import PropType from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: "300px",
  },
}));

const RecipeCard = ({ title, date, excerpt, tags, path }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea onClick={() => navigate(path)}>
        <CardMedia className={classes.media} image="images/" />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">{date}</Typography>
          <Typography variant="body2">{excerpt}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* TODO: onClick function to handle filtering */}
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            color="secondary"
            size="small"
            component="a"
            href="#"
            clickable
          />
        ))}
      </CardActions>
    </Card>
  );
};

RecipeCard.propTypes = {
  title: PropType.string.isRequired,
  date: PropType.string.isRequired,
  excerpt: PropType.string,
  tags: PropType.arrayOf(PropType.string),
};

RecipeCard.defaultProps = {
  excerpt: "",
  tags: [],
};

export default RecipeCard;
