import { useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import {useAuth} from "../context/AdminContext"

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setAdmin} = useAuth()

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/admin/login", { email, password });
      setAdmin(res.data.admin)
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center p-5">
      <form
        onSubmit={handleSubmit}
        className="p-5 rounded-lg max-w-md w-full flex flex-col gap-5"
      >
        <h1 className="text-3xl">Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="input outline-none w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="input outline-none w-full"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
        </div>

        <button className="btn btn-success" type="submit" disabled={loading}>
          {loading ? "Please wait..." : "Submit"}
        </button>
      </form>
      
    </div>
  );
};

export default Login;
