const Move = () => {
  const moveHandler = () => {
    alert("Does Your Mouse Moving towards the text.");
    console.log("Mouse move event triggered");
  };

  return (
    <div onMouseMove={moveHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi mollitia,
      quo quis tempora ducimus molestiae ea unde, dolores sed, sint consequatur
      a voluptatibus?
    </div>
  );
};

export default Move;
