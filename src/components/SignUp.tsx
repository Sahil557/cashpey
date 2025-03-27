import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import BrandingSection from "./BrandingSection";
import InputBox from "./common/InputBox";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signing up", { username, email, phone });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <BrandingSection />

      {/* Right Side - Signup Form */}
      <div className="md:w-7/12 w-full flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-md">
          <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-l from-[#2800ff] to-[#6377ff] bg-clip-text text-transparent">Hello !</h2>
          <p className="text-md md:text-xl text-center text-gray-400">Create your account</p>

          <form onSubmit={handleSubmit} className="space-y-4 py-4 md:py-10">
            <InputBox
              placeholder="Username"
              value={username}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputBox
              placeholder="test@cashpey.com"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputBox
              placeholder="99999 99999"
              value={phone}
              type="tel"
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              type="submit"
              className="cursor-pointer w-full bg-gradient-to-l from-[#2800ff] to-[#6377ff] text-white py-2 mt-6 rounded-lg hover:opacity-90 transition"
            >
              Sign up
            </button>
          </form>

          <div className="md:mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-600 hover:underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
