import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Admindashboard = () => {
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("");
  const [banner, setBanner] = useState("");
  const [images, setImages] = useState("");
  const [links, setLinks] = useState("");
  const [users, setUsers] = useState("");
  const logout = () => {
    localStorage.removeItem("adminuser");
    window.location.href = "/adminlogin";
  };
  const verify = async () => {
    const token = localStorage.getItem("adminuser");
    // console.log("dsfds");
    let p = await fetch(`/api/getdata`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await p.json();
    setImages(data.images.toString());
    setBanner(data.banner);
    setLinks(data.links.toString());
    let res = await fetch(`/api/jwtadminverify`, {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (token) {
      var de = jwt_decode(token);
      setRole(de.role);
      console.log(role);
    }
    const d = await res.json();
    if (d.success === true) {
      // console.log("success");
      setLoading(true);
    } else {
      window.location.href = "/adminlogin";
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "banner") {
      setBanner(value);
    } else if (name === "images") {
      setImages(value);
    } else if (name === "links") {
      setLinks(value);
    }
  };
  useEffect(() => {
    verify();
  }, [role]);
  const handleSubmit = async () => {
    const imgarr = images.split(",");
    const linkarr = links.split(",");
    const token = localStorage.getItem("adminuser");
    console.log(token, imgarr, linkarr, banner);
    let res = await fetch(`/api/updatedata`, {
      method: "POST",
      body: JSON.stringify({
        token: token,
        images: imgarr,
        links: linkarr,
        banner: banner,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const d = await res.json();
    if (d.success === true) {
      toast.success("Updated Successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // window.location.href = "/admindashboard";
    } else {
      toast.error("Unable to Update ❌", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <div>
      <ToastContainer />
      {loading ? (
        <div className="text-white my-10 overflow-hidden">
          <div className="px-10 pt-5 flex justify-between ">
            <div className="">FindTrend</div>
            <h1 className="text-4xl  text-center">{role} Dashboard</h1>
            <button
              className="bg-red-600 rounded-lg px-2"
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-white">Wait a Minute....</div>
      )}
      <div className="main">
        {role == "Admin" || role == "Marketing" ? (
          <div>
            <div className="flex my-4 justify-center">
              <div className="text-xl  text-white">Banner :</div>
              <input
                id="banner"
                name="banner"
                onChange={handleChange}
                value={banner}
                type="banner"
                autoComplete="banner"
                required
                className="relative block  rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Banner"
              />
            </div>
          </div>
        ) : (
          <div> </div>
        )}
        {role == "Admin" || role == "SocialMedia" ? (
          <div>
            <div className="flex my-4 justify-center">
              <div className="text-xl text-white">Links :</div>
              <textarea
                id="links"
                name="links"
                onChange={handleChange}
                value={links}
                type="links"
                autoComplete="links"
                required
                className="relative block w-4/5 rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="links"
              />
            </div>
          </div>
        ) : (
          <div> </div>
        )}
        {role == "Admin" || role == "Media" ? (
          <div>
            <div className="flex my-4 justify-center">
              <div className="text-xl text-white">Images :</div>
              <textarea
                id="images"
                name="images"
                onChange={handleChange}
                value={images}
                type="images"
                autoComplete="images"
                required
                className="relative block  rounded-md border-0 p-1.5 w-4/5  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="images"
              />
            </div>
          </div>
        ) : (
          <div> </div>
        )}
        <div className="flex mt-28 justify-center">
          <button
            type="submit"
            onClick={() => handleSubmit()}
            className="group w-1/3  rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
