import { useState, useEffect } from "react";
import type { BLOG } from "../../types/blogTypes";
import { useBlogs } from "../../context/BlogContext";

interface BlogFormProps {
  existingBlog?: BLOG | null;
  onClose: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ existingBlog, onClose }) => {
  const { addBlog, updateBlog } = useBlogs();
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [description, setDescription] = useState(
    existingBlog?.description || ""
  );
  const [image, setImage] = useState(existingBlog?.image || "");
  const [time, setTime] = useState(existingBlog?.time || "");

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setImage(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog]);

  const handleSubmit = () => {
    const blog: BLOG = {
      id: existingBlog ? existingBlog.id : Date.now(),
      title,
      description,
      image,
      time,
    };

    if (existingBlog) {
      updateBlog(blog);
    } else {
      addBlog(blog);
    }

    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-lg  w-[30rem] mx-auto">
      <h3 className="mb-2 text-xl font-semibold text-gray-800">
        {existingBlog ? "Edit Blog" : "Add Blog"}
      </h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full h-32 px-4 py-2 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="date"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="flex justify-end mt-6 space-x-4">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-black"
        >
          {existingBlog ? "Update" : "Add"}
        </button>
        <button
          onClick={onClose}
          className="px-6 py-2 font-semibold text-white bg-gray-500 rounded-lg shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BlogForm;
