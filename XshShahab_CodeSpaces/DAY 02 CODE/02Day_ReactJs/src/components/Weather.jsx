const Weather = (props) => {
  let temp = props.temp;
  if (temp < 15) {
    return <div>It's Cold outside</div>;
  } else if (temp >= 15 && temp <= 25) {
    return <div>It's Nice outside</div>;
  } else if (temp > 25) {
    return <div>It's hot outside</div>;
  }
};

export default Weather;
