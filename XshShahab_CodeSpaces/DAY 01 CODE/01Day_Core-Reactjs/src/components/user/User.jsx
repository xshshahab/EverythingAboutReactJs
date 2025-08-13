import "./User.css";

const User = (props) => {
  return (
    <section className="user-card">
      <img className="user-avatar" src={props.img} alt={props.name} />
      <h1 className="user-name">{props.name}</h1>
      <h2 className="user-meta">
        {props.age} - {props.gender}
      </h2>
      <p className="user-about">{props.about}</p>
      <p className="user-address">{props.address}</p>
    </section>
  );
};

export default User;
