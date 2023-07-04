const ToppingOptions = ({ imagePath, name }) => {
  return (
    <>
      <img src={imagePath} alt={`${name}topping`} />
    </>
  );
};
export default ToppingOptions;
