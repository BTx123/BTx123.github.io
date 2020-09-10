import React from "react";

const Recipe = ({ pageContext }) => {
  const { recipe } = pageContext;
  return <div dangerouslySetInnerHTML={{ __html: recipe.html }} />;
};

export default Recipe;
