const ScoopOptions = ({ imagePath, name }) => {
  return (
    <>
      <img src={imagePath} alt={`${name}scoop`} />
    </>
  );
};

export default ScoopOptions;
