const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#ff7e8b",
        borderRadius: "50%",
      }}
      onClick={onClick}
    ></div>
  );
};


export default PrevArrow;