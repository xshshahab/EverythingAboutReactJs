const UserStatus = ({ loggedIn, isAdmin }) => {
  if (loggedIn && isAdmin) {
    return <h1>Welcome! Admin</h1>;
  } else {
    return <div>Welcome! User</div>;
  }

  //   return loggedIn && isAdmin ? <h1>Welcome Admin</h1> : <h2>Welcome User</h2>;
};

export default UserStatus;
