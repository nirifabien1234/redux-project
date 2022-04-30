import React from "react";
import Counter from "./Counter";

/* =============================================
Landing Page Function Component
This is the home page component to be rendered
as the landing page view
============================================== */

const Home = () => {
  return (
    <div className="h-screen pt-16">
      <Counter />
    </div>
  );
};

export default Home;
