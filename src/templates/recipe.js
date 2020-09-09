function Recipe({ pageContext }) {
  const { recipe } = pageContext;
  return <div>{recipe.html}</div>;
}
