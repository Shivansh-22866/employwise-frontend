import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers, deleteUser } from "../services/api";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../components/Modal";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

interface FetchUsersResponse {
  data: {
    data: User[];
    total_pages: number;
  };
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);  // Modal visibility
  const [userToDelete, setUserToDelete] = useState<User | null>(null); // User to delete
  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      try {
        const { data }: FetchUsersResponse = await fetchUsers(currentPage);
        setUsers(data.data);
        setTotalPages(data.total_pages);
      } catch (err) {
        localStorage.removeItem("token");
        setError("Failed to fetch users");
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    };    
    loadUsers();
  }, [currentPage, navigate]);

  const handleDelete = async () => {
    if (userToDelete) {
      try {
        await deleteUser(userToDelete.id);
        setUsers(users.filter(user => user.id !== userToDelete.id));
        toast.success("User successfully deleted!", {
          position: 'bottom-right',
          autoClose: 3000
        });
      } catch (err) {
        toast.error("Failed to delete user.", {
          position: 'bottom-right',
          autoClose: 3000
        });
      } finally {
        setShowModal(false); // Close the modal after deletion
        setUserToDelete(null); // Reset user to delete
      }
    }
  };

  const openDeleteModal = (user: User) => {
    setUserToDelete(user);
    setShowModal(true);
  };

  if(isLoading) return <Loading/>

  if(error) return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-700 bg-clip-text text-transparent">
            User Management
          </h1>
          <p className="mt-2 text-gray-400">Error: {error}</p>
        </header>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-700 bg-clip-text text-transparent">
            User Management
          </h1>
          <p className="mt-2 text-gray-400">Browse and manage registered users</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => (
            <UserCard 
              key={user.id} 
              user={user} 
              onDelete={() => openDeleteModal(user)}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            />
          ))}
        </div>

        <div className="mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            className="bg-gray-800 rounded-lg p-2"
          />
        </div>
      </div>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onConfirm={handleDelete}
          user={userToDelete}
        />
      )}
    </div>
  );
};

export default UserList;