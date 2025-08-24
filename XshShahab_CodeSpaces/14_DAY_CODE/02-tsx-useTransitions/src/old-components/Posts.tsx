import React from "react";

const Posts: React.FC = () => {
  // Generating a lot of posts

  const posts = Array.from(
    { length: 100000 },
    (_, index) => `Posts : ${index + 1}`
  );

  return (
    <div>
      {posts.map((post) => (
        <div key={post}>{post}</div>
      ))}
    </div>
  );
};

export default Posts;
