import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ScrolltoTop from "../Shared/ScrolltoTop";

const Blog = () => {
  // default scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <ScrolltoTop></ScrolltoTop>
      <Helmet>
        <title>About | Doc-House</title>
      </Helmet>
    </div>
  );
};

export default Blog;
