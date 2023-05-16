import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
const Post = ({
  buynow,
  cart,
  addToCart,
  RemoveFromCart,
  ClearCart,
  saveCart,

  subTotal,
  data,
  title,
  size,
  colour,
  combo,
  img,
}) => {
  const [pincode, setPincode] = useState("");
  const [index, setIndex] = useState(0);

  const [serviceable, setServiceable] = useState(
    "Enter Pincode to check serviceability !!"
  );
  // console.log(data);
  const checkPincode = async () => {
    console.log("checkPincode");
    const res = await fetch(`${process.env.Host}/api/pincode`, {
      method: "POST",
      body: JSON.stringify({ pincode: pincode }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data.message);
    if (data.message === "success") {
      toast.success('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      setServiceable("Yayyy😊😊 We deliver to your area !!");
    } else {
      setServiceable("Oops😔😔 We don't deliver to your area !!");
    }
  };
  const q=combo[0].split("-")
  const [colourr, setColour] = useState(q[0]);
  const [sizee, setSize] = useState(q[1]);
  const variantchange = (item) => {
    setColour(item);
    for (let i = 0; i < combo.length; i++) {
      if (combo[i] === colourr + sizee) {
        for (let j = 0; j < colour.length; j++) {
          if (colour[j] === colourr) {
            setIndex(i);
          }
        }
      }
    }
    console.log(index);
  };
  const sizechange = (e) => {
    setSize(e.target.value);
    console.log(sizee);
    variantchange(colourr);
  };

  console.log(colour);
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <ToastContainer />
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded"
              src={`${img[index]}`}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {data[title].title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{data[title].description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  {colour.map((item) => {
                    return combo.includes(colourr+"-"+item) ? (
                      <button
                        key={item}
                        style={{
                          borderWidth: "2px",
                          borderColor: "#d1d5db",
                          borderRadius: "9999px",
                          width: "1.5rem",
                          height: "1.5rem",
                          outline: "solid",
                          backgroundColor: item,
                        }}
                        className="mr-1"
                        onClick={() => variantchange(item)}
                      >
                        {/* {item} */}
                      </button>
                    ) : (
                      <button
                        key={item}
                        style={{
                          borderWidth: "2px",
                          borderColor: "#d1d5db",
                          borderRadius: "9999px",
                          width: "1.5rem",
                          height: "1.5rem",
                          outline: "none",
                          backgroundColor: item,
                        }}
                        className="mr-1"
                        onClick={() => variantchange(item)}
                      >
                        {/* {item} */}
                      </button>
                    );
                  })}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      onChange={sizechange}
                      title="uj"
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                    >
                      {size.map((itemm) => {
                        return combo.includes(colourr+"-"+itemm) && <option>{itemm}</option>;
                      })}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <span className="title-font font-medium text-4xl text-gray-900 ">
                ₹{data[title].price}
              </span>
              <div className="flex my-6">
                <button
                  className="flex text-white bg-indigo-500 border-0 py-2 px-6  focus:outline-none hover:bg-indigo-600 rounded"
                  onClick={() =>
                    buynow(
                      data[title].slug + "-" + sizee + "-" + colourr,
                      1,
                      data[title].price,
                      data[title].title,
                      size[index],
                      colour[index]
                    )
                  }
                >
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    addToCart(
                      data[title].slug + "-" + sizee + "-" + colourr,
                      1,
                      data[title].price,
                      data[title].title,
                      size[index],
                      colour[index]
                    );
                  }}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Add to Cart
                </button>
                <button
                  title="hb"
                  className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                >
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="pin mt-6 flex space-x-2 text-sm">
                <input
                  onChange={(e) => setPincode(e.target.value)}
                  type="text"
                  className="rounded px-2 border-2 border-indigo-500"
                />
                <button
                  onClick={checkPincode}
                  title="zfs"
                  className="text-white  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Check
                </button>
              </div>
              <div className="text-black my-16">{serviceable}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getServerSideProps(context) {
  const { slug } = context.query;
  console.log(slug + "slug.js");
  const res = await fetch(`${process.env.Host}/api/productdetail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: slug }),
  });

  const d = await res.json();
  const title = slug;
  const data = d.p;
  console.log(data);
  const arr = data[title].variant.split(";");
  let colour = [];
  let size = [];
  let combo = [];
  const set1 = new Set();
  let img = [];
  arr.map((a) => {
    const b = a.split(",");
    combo.push(b[0] +"-" +b[1]);
    if (!set1.has(b[0])) {
      set1.add(b[0]);
      colour.push(b[0]);
    }
    if (!set1.has(b[1])) {
      set1.add(b[1]);
      size.push(b[1]);
    }
    if (!set1.has(b[2])) {
      set1.add(b[2]);
      img.push(b[2]);
    }
  });
  console.log(colour);
  console.log(size);
  console.log(combo);
  console.log(img);
  return {
    props: {
      data,
      title,
      size,
      colour,
      combo,
      img,
    },
  };
}
export default Post;
