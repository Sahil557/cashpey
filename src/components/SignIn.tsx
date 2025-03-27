import { useState } from "react";
import { Link } from "react-router-dom";
import BrandingSection from "./BrandingSection";
import InputBox from "./common/InputBox";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Email:", email, "Phone:", phone);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <BrandingSection />

      {/* Right Side - Login Form */}
      <div className="md:w-7/12 w-full flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-md">
          <div>
            <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-l from-[#2800ff] to-[#6377ff] bg-clip-text text-transparent">
              Welcome Back!
            </h2>
            <p className="text-md md:text-xl text-center text-gray-400">Please login with your credentials</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 py-5 md:py-10">
            <InputBox
              placeholder="test@cashpey.com"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputBox
              placeholder="********"
              value={phone}
              type="password"
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              type="submit"
              className="cursor-pointer w-full bg-gradient-to-l from-[#2800ff] to-[#6377ff] text-white py-2 mt-6 rounded-lg hover:opacity-90 transition"
            >
              Sign in
            </button>
          </form>

          <div className="mt-2 md:mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
