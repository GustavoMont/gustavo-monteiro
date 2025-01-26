import React from "react";

type Props = {
  src: string;
  className?: string;
};

export const Avatar: React.FC<Props> = ({ src, className }) => {
  return (
    <div className="avatar">
      <div className={`rounded-full ${className}`}>
        <img src={src} alt="foto de perfil" />
      </div>
    </div>
  );
};
