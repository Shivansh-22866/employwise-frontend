import { Link } from "react-router-dom";

interface UserCardProps {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
  };
  onDelete: (id: number) => void;
  className?: string;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete, className }) => {
  return (
    <div className={`${className} bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700`}>
      <div className="flex flex-col items-center">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-20 h-20 rounded-full border-4 border-orange-400 mb-4"
        />
        <h3 className="text-xl font-semibold text-white mb-1">
          {user.first_name} {user.last_name}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{user.email}</p>
        
        <div className="flex space-x-3 w-full justify-center">
          <Link
            to={`/edit/${user.id}`}
            className="flex-1 px-4 py-2 bg-orange-800 hover:bg-orange-900 text-white rounded-lg transition-colors flex items-center justify-center"
          >
            <span>Edit</span>
          </Link>
          <button
            onClick={() => onDelete(user.id)}
            className="flex-1 px-4 py-2 bg-pink-800 hover:bg-pink-900 text-white rounded-lg transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;