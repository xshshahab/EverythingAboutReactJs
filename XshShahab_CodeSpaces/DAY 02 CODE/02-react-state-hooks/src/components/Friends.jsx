import { useState } from "react";

const Friends = () => {
  const [friends, setFriends] = useState([
    "Sam",
    "Sid",
    "Rupa",
    "Rani",
    "Sita",
  ]);

  const handleAddNewFriend = () => {
    let newFriend = "XshShahab";
    setFriends([...friends, newFriend]);
  };

  const handleRemoveFriend = () => {
    let removeFr = [...friends];
    removeFr.pop();
    setFriends(removeFr);
  };

  const deleteMe = () => {
    setFriends(friends.filter((f) => f !== "XshShahab"));
  };

  const handleUpdateOneFriend = () => {
    setFriends(friends.map((f) => (f === "XshShahab" ? "Xsh Shahab" : f)));
  };
  return (
    <section style={{ marginTop: "20px" }}>
      {friends.map((friend, index) => {
        return (
          <ul key={index * Math.floor(Math.random() * 10)}>
            <li onClick={deleteMe}>{friend} - Del</li>
          </ul>
        );
      })}
      <button onClick={handleAddNewFriend}>Add New Friend</button>
      <button onClick={handleRemoveFriend}>Remove One Friend</button>
      <button onClick={handleUpdateOneFriend}>Update One Friend</button>
    </section>
  );
};

export default Friends;
