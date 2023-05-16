import React, { useEffect, useState } from "react";

const Home = () => {
  const [images, setImages] = useState([]);
  const verify = async () => {
    const token = localStorage.getItem("user");
    // console.log("dsfds");

    let res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/jwtadminverify`,
      {
        method: "POST",
        body: JSON.stringify({ token }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const d = await res.json();
    if (d.success !== true) {
      // console.log("success");
      window.location.href = "/login";
    }
  };
  const getdata = async () => {
    let p = await fetch(`/api/getdata`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await p.json();
    setImages(data.images);
  };
  useEffect(() => {
    getdata();
    verify();
  }, []);
  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };
  return (
    <div>
      <div className="text-white my-10 overflow-hidden">
        <div className="px-10 pt-5 flex justify-between ">
          <div className="">FindTrend</div>
          <h1 className="text-4xl  text-center">Trends</h1>
          <button
            className="bg-red-600 rounded-lg px-2"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </div>
      <div className=" text-center">
        {images.map((e) => {
          return (
            <img
              className="block mx-auto rounded-3xl mb-11"
              key={e}
              src={e}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
