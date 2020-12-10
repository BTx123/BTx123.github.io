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
import { navigate } from "gatsby";
import Img from "gatsby-image";
import PropType from "prop-types";

const useStyles = makeStyles((theme) => ({}));

const RecipeCard = ({ title, datetime, excerpt, tags, coverImage, path }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea onClick={() => navigate(path)}>
        <CardMedia>
          <Img
            fluid={coverImage}
            title={title}
            alt={title}
            style={{ height: 150 }}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {datetime}
          </Typography>
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
