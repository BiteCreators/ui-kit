import React from "react";

type Props = {
  isLoading: boolean;
};

export const LinearLoader = ({ isLoading }: Props) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className={`linear-loader ${isLoading ? "active" : ""}`}>
      <div className={"linear-loader-bar"} />
    </div>
  );
};
