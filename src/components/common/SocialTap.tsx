import React from "react";

interface SocialButtonProps {
  type: "facebook" | "instagram" | "youtube";
  onClick?: () => void;
}

const socialMediaPaths: Record<string, { path: string; color: string; viewBox: string }> = {
  facebook: {
    path: "M9 8H6V12H9V24H14V12H17.642L18 8H14V6.333C14 5.378 14.192 5 15.115 5H18V0H14.192C10.596 0 9 1.583 9 4.615V8Z",
    color: "#1877F2",
    viewBox: "0 0 24 24",
  },
  instagram: {
    path: "M8 2c-3.313 0-6 2.687-6 6v8c0 3.313 2.687 6 6 6h8c3.313 0 6-2.687 6-6v-8c0-3.313-2.687-6-6-6h-8zm0 2h8c2.205 0 4 1.795 4 4v8c0 2.205-1.795 4-4 4h-8c-2.205 0-4-1.795-4-4v-8c0-2.205 1.795-4 4-4zm10 1c-.553 0-1 .447-1 1s.447 1 1 1 1-.447 1-1-.447-1-1-1zm-6 2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm0 2c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z",
    color: "#E1306C",
    viewBox: "0 0 24 24",
  },
  youtube: {
    path: "M23.5 7.1c-.3-1.3-1.3-2.3-2.6-2.5C18.4 4 12 4 12 4s-6.4 0-8.9.6C1.8 4.8.8 5.8.5 7.1.2 8.6.2 12 .2 12s0 3.4.3 4.9c.3 1.3 1.3 2.3 2.6 2.5C5.6 20 12 20 12 20s6.4 0 8.9-.6c1.3-.3 2.3-1.3 2.6-2.5.3-1.5.3-4.9.3-4.9s0-3.4-.3-4.9zM9.6 15.4V8.6L16.2 12l-6.6 3.4z",
    color: "#FF0000",
    viewBox: "0 0 24 24",
  },
};

const SocialButton: React.FC<SocialButtonProps> = ({ type, onClick }) => {
  const { path, color, viewBox } = socialMediaPaths[type];

  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer h-9 w-9 rounded-full bg-white shadow-md flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill={color}
        viewBox={viewBox}
      >
        <path d={path} />
      </svg>
    </button>
  );
};

export default SocialButton;
