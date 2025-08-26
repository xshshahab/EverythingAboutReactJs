import { FaBookmark, FaTrash, FaEdit } from "react-icons/fa";
import type { BLOG } from "../../types/blogTypes";

interface ArticleCardProps {
  article: BLOG;
  onDelete: () => void;
  onEdit: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="flex p-4 bg-white w-[40rem] mb-6 ml-[2rem] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={article.image}
        alt={article.title}
        className="object-cover h-24 rounded-lg shadow-md w-36"
      />
      <div className="flex flex-col flex-1 ml-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          {article.title}
        </h3>
        <p className="flex-1 text-sm text-gray-700">{article.description}</p>
        <div className="flex items-center justify-between mt-4 text-gray-600">
          <span className="text-xs">{article.time}</span>
          <div className="flex space-x-3">
            <FaBookmark className="text-gray-500 transition-colors duration-200 cursor-pointer hover:text-gray-700" />
            <FaEdit
              onClick={onEdit}
              className="text-blue-500 transition-colors duration-200 cursor-pointer hover:text-blue-600"
            />
            <FaTrash
              onClick={onDelete}
              className="text-red-500 transition-colors duration-200 cursor-pointer hover:text-red-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
