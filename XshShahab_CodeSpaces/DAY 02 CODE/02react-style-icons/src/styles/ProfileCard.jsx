// Using Seperated Style Object

const ProfileCard = () => {
  const styles = {
    backgroundColor: "lightgray",
    padding: "15px",
    color: "black",
    border: "1px solid grey",
    borderRadius: "8px",
  };

  return (
    <div style={styles}>
      <h2>Profile Card Section</h2>
      <img
        src="https://avatars.githubusercontent.com/u/153608835?v=4"
        alt="xshshahab-github-avatar"
      />
    </div>
  );
};
export default ProfileCard;
