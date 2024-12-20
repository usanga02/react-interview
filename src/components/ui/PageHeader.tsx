import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const PageHeader = ({ title, subtitle }: Props) => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-black">{title}</h1>
      <h4>{subtitle}</h4>
    </div>
  );
};

export default PageHeader;
