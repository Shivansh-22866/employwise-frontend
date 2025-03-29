import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, updateUser } from "../services/api";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import Loading from "../components/Loading";
import { toast } from "react-toastify";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
}

const EditUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) return;
      try {
        setIsLoading(true);
        const { data } = await getUser(id);
        setFormData({
          first_name: data.data.first_name || "",
          last_name: data.data.last_name || "",
          email: data.data.email || "",
        });
      } catch (err) {
        setError("Failed to fetch user data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateUser(id!, formData);
      navigate("/users");
      toast.success("User successfully updated!", {
        position: 'bottom-right',
        autoClose: 3000
      })
    } catch (err: any) {
      setError(err.response?.data?.error || "Update failed");
    } finally {
      if (error) {
        toast.error(error, {
          position: 'bottom-right',
          autoClose: 3000
        })
      }
      
    }
  };

  if (isLoading) {
    return (
      <Loading/>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <BackgroundGradient className="p-8 bg-slate-900 rounded-3xl">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
          <p className="text-gray-300">{error}</p>
          <button
            onClick={() => navigate("/users")}
            className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
          >
            Return to Users
          </button>
        </BackgroundGradient>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900/95 flex items-center justify-center">

      <BackgroundGradient className="p-8 bg-slate-900 rounded-3xl sm:w-xl w-xs max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Edit User Profile
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <LabelInputContainer>
            <Label htmlFor="first_name">First Name</Label>
            <Input
              id="first_name"
              type="text"
              placeholder="John"
              value={formData.first_name}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              className="bg-slate-800 text-white"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              id="last_name"
              type="text"
              placeholder="Doe"
              value={formData.last_name}
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
              className="bg-slate-800 text-white"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-slate-800 text-white"
            />
          </LabelInputContainer>

          <div className="flex gap-4 mt-8">
            <button
              type="button"
              onClick={() => navigate("/users")}
              className={cn(
                "w-full px-4 py-2 rounded-lg border border-gray-700",
                "text-gray-300 hover:bg-gray-800 transition-colors"
              )}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={cn(
                "w-full px-4 py-2 rounded-lg bg-gradient-to-br from-pink-600 to-orange-600",
                "text-white hover:from-pink-700 hover:to-orange-700 transition-all"
              )}
            >
              Save Changes
            </button>
          </div>
        </form>
      </BackgroundGradient>
    </div>
  );
};

export default EditUser;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
