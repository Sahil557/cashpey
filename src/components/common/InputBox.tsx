import React, { useState } from "react";

interface InputBoxProps {
  placeholder?: string;
  value: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder = "Enter text",
  value,
  type = "text",
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div
      className="flex items-center border border-gray-300 rounded-xl px-4 py-1.5 bg-white focus-within:border-blue-400 relative shadow-[5px_5px_15px_#0000004d]"
    >
      <div className="flex items-center justify-center">
        <button className="relative w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center shadow-[10px_4px_10px_rgba(0,0,0,0.8)">
          <div className="absolute inset-0 bg-purple-100 rounded-full opacity-30"></div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#E91E63"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="7" r="5" />
            <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
          </svg>
        </button>
      </div>
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="ml-2 outline-none w-full bg-transparent text-gray-600 placeholder-gray-400"
      />
      {type === "password" && (
        <span
          className="absolute right-4 cursor-pointer text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <svg width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.5C7.5 4.5 3.73 7.61 2.5 12c1.23 4.39 5 7.5 9.5 7.5s8.27-3.11 9.5-7.5c-1.23-4.39-5-7.5-9.5-7.5zm0 12c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5 16.5 9.51 16.5 12s-2.01 4.5-4.5 4.5z" fill="#A9A9A9" />
              <circle cx="12" cy="12" r="2" fill="#A9A9A9" />
            </svg>
          ) : (
            <svg width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.5C7.5 4.5 3.73 7.61 2.5 12c1.23 4.39 5 7.5 9.5 7.5s8.27-3.11 9.5-7.5c-1.23-4.39-5-7.5-9.5-7.5zm0 12c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5 16.5 9.51 16.5 12s-2.01 4.5-4.5 4.5z" fill="#A9A9A9" />
              <line x1="3" y1="3" x2="21" y2="21" stroke="#A9A9A9" strokeWidth="2" />
            </svg>
          )}
        </span>
      )}
    </div>
  );
};

export default InputBox;
