import React from "react";
import notFound from "../../Images/404.jpg";

const NotFoundPage = () => {
  return (
    <div>
      <img className="my-[120px]" src={notFound} alt="" />
    </div>
  );
};

export default NotFoundPage;
