import { useState } from "react";
import type { BLOG } from "./types/blogTypes";
import Navigation from "./components/Navigation";
import { IoMdAddCircle } from "react-icons/io";
import PeopleToFollow from "./components/PeopleToFollow";
import TrendsList from "./components/TrendsList";
import TopicsList from "./components/TopicsList";
import Modal from "./shared/modal/Modal";
import ArticleList from "./shared/article/ArticleList";
import BlogForm from "./shared/form/BlogForm";

const App = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [editingBlog, setEditingBlog] = useState<BLOG | null>(null);

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setModalOpen(true);
  };

  const openModalForEdit = (blog: BLOG) => {
    setEditingBlog(blog);
    setModalOpen(true);
  };

  return (
    <div>
      <Navigation />

      <div className="flex justify-center">
        <div className="p-6 mx-auto">
          <div>
            <button
              onClick={openModalForNewBlog}
              className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
            >
              Add New Blog <IoMdAddCircle className="ml-[.5rem]" />
            </button>

            <ArticleList onEdit={openModalForEdit} />
            {isModalOpen && (
              <Modal onClose={() => setModalOpen(false)}>
                <BlogForm
                  existingBlog={editingBlog}
                  onClose={() => setModalOpen(false)}
                />
              </Modal>
            )}
          </div>
        </div>

        <div className="w-[30%]">
          <PeopleToFollow />
          <TrendsList />
          <TopicsList />
        </div>
      </div>
    </div>
  );
};

export default App;
