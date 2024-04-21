import React, { useState, useEffect } from "react";
import Card from "./Card";

function TrendyTechnology() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="h-auto" style={{ minHeight: "100vh" }}>
      <div>
        <h1 className="font-bold text-2xl ml-4 mt-7 relative sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Trendy Technology</h1>
      </div>

      <div className="flex flex-wrap flex-col h-full items-center pb-4 border-solid-5 relative">
        <div
          id="slider"
          className="flex space-x-4 max-w-screen-2xl mx-auto px-4 py-4 relative"
          style={{ overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {data && (
            <>
              <div className="w-72 md:w-96 lg:w-1/4 xl:w-1/5 h-250 flex-shrink-0">
                <Card author={data.login} image={data.avatar_url} blog_c={data.bio} />
              </div>
              <div className="w-72 md:w-96 lg:w-1/4 xl:w-1/5 h-250 flex-shrink-0">
                <Card author="Robert" image="blogger.png" blog_c={data.bio} />
              </div>
              <div className="w-72 md:w-96 lg:w-1/4 xl:w-1/5 h-250 flex-shrink-0">
                <Card author="Robert" image="blogger.png" blog_c={data.bio} />
              </div>
              <div className="w-72 md:w-96 lg:w-1/4 xl:w-1/5 h-250 flex-shrink-0">
                <Card author="Robert" image="blogger.png" blog_c={data.bio} />
              </div>
              <div className="w-72 md:w-96 lg:w-1/4 xl:w-1/5 h-250 flex-shrink-0">
                <Card author="Robert" image="blogger.png" blog_c={data.bio} />
              </div>

              {/* Add more Card components as needed */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrendyTechnology;
