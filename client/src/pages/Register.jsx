import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        data.error;
      } else {
        setData({});
        toast.success("Register Successful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <div className="flex flex-col">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-small text-black">
            MariKerja
          </h2>
        </div>
        <div className="relative mb-4">
          <h2 className="title-font sm:text-2xl text-3xl mb-4 font-small text-black">
            Create a new account
          </h2>
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            className="w-full bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="relative mb-4">
          <input
            type="email"
            className="w-full bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="relative mb-4">
          <input
            type="password"
            className="w-full bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="relative mb-4">
          <button
            type="submit"
            className="font-inter w-full text-white bg-black border-0 py-2 px-6 rounded text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
