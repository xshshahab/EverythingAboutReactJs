import { useContext } from "react";
import { createContext, useState } from "react";
import type { BLOG } from "../types/blogTypes";

// Define the context type
interface BlogContextType {
  blogs: BLOG[];
  addBlog: (blog: BLOG) => void;
  updateBlog: (blog: BLOG) => void;
  deleteBlog: (id: number) => void;
}

// Create the context
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Blog provider
export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<BLOG[]>([]);

  const addBlog = (blog: BLOG) => {
    setBlogs([...blogs, blog]);
  };

  const updateBlog = (updtBlog: BLOG) => {
    setBlogs(blogs.map((blog) => (blog.id === updtBlog.id ? updtBlog : blog)));
  };

  const deleteBlog = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook to use the context
export const useBlogs = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error("useBlogs must be used within a BlogProvider");
  }

  return context;
};
