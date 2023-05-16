"use client";
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Link from "next/link";
import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
// import { Console } from "console";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [links, setLinks] = useState([
    "https://timmousk.com/blog/fatal-not-a-git-repository/#:~:text=The%20fatal%3A%20not%20a%20git%20repository%20error%20happens%20because%20you,t%20initialize%20the%20Git%20repository.",
    "https://www.google.com",
    "https://www.google.com",
    "https://www.google.com",
    "https://www.google.com",
    "https://www.google.com",
    "https://www.google.com",
    "https://www.google.com",
  ]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [banner, setBanner] = useState("Fuck");
  const [images, setImages] = useState([]);
  const getdata = async () => {
    let p = await fetch(`/api/getdata`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await p.json();
    setImages(data.images);
    setBanner(data.banner);
    setLinks(data.links);
  };

  useEffect(() => {
    getdata();
    AOS.init({
      once: true,
      duration: 1000,
      disable: () => {
        return window.innerWidth < 991;
      },
  
    });
    setTimeout(() => {
      setIsDisabled(true);
    }, 3000);
  }, []);
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("dfsd");
    
    // Handle form submission logic here
    let res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    res = await res.json();
    console.log(res);

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    // Close the popup
    setIsDisabled(false);
  };

  return (
    <div>
      <div>
        {isDisabled && (
          <div className="popup-overlay">
          <div className="popup-content bg-black mt-5 rounded-lg text-white">
            <h2 className="text-center">Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  className="form-control"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  className="form-control"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  className="form-control"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <button onClick={() => setIsDisabled(false)} className="btn btn-secondary">Close</button>
          </div>
          <style>
            {`
              .popup-overlay {
                display: flex;
                justify-content: center;
                align-items: center;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 9999;
              }
        
              .popup-content {
                width: 400px;
                padding: 20px;
              }
        
              .form-group {
                margin-bottom: 20px;
              }
        
              label {
                display: block;
                margin-bottom: 5px;
              }
        
              .form-control {
                width: 100%;
                padding: 10px;
                font-size: 16px;
                border-radius: 5px;
                border: 1px solid #ccc;
              }
        
              .btn {
                display: inline-block;
                padding: 10px 20px;
                font-size: 16px;
                border-radius: 5px;
                cursor: pointer;
              }
        
              .btn-primary {
                background-color: #007bff;
                border: none;
                color: #fff;
              }
        
              .btn-secondary {
                background-color: #6c757d;
                border: none;
                padding:5px 10px;
                color: #fff;
              }
        
              .text-center {
                text-align: center;
              }
            `}
          </style>
        </div>
        )}
        <meta charSet="utf-8" />
        <title>Findtrend</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link
          href="https://assets.website-files.com/6233f2ac51d2013d6dca2856/css/findtrend.webflow.4490a49f5.css"
          rel="stylesheet"
          type="text/css"
        />
        <Script
          async
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6233f2ac51d2013d6dca2856"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        />
        <Script
          async
          src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/js/webflow.bc9f388fc.js"
          type="text/javascript"
        />
        <Script
          async
          src="//cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"
        />
        <Script async src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n            @media (min-width:992px) {\n                html.w-mod-js:not(.w-mod-ix) [data-w-id="14a6065f-5ff5-9028-965f-8def937328b0"] {\n                    -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-4deg) skew(0, 0);\n                    -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-4deg) skew(0, 0);\n                    -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-4deg) skew(0, 0);\n                    transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-4deg) skew(0, 0);\n                }\n\n                html.w-mod-js:not(.w-mod-ix) [data-w-id="d0124c01-28a2-7b50-68dc-555917fbaf3b"] {\n                    -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(null) rotateZ(2deg) skew(0, 0);\n                    -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(null) rotateZ(2deg) skew(0, 0);\n                    -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(null) rotateZ(2deg) skew(0, 0);\n                    transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(null) rotateZ(2deg) skew(0, 0);\n                    transform-style: preserve-3d;\n                }\n\n                html.w-mod-js:not(.w-mod-ix) [data-w-id="b928b045-b023-2fb5-c1f1-50f4be5f108b"] {\n                    -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(null) rotateZ(-2deg) skew(0, 0);\n                    -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(null) rotateZ(-2deg) skew(0, 0);\n                    -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(null) rotateZ(-2deg) skew(0, 0);\n                    transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(null) rotateZ(-2deg) skew(0, 0);\n                    transform-style: preserve-3d;\n                }\n\n                html.w-mod-js:not(.w-mod-ix) [data-w-id="74d68148-1477-5f19-e0e0-c1fd77416855"] {\n                    -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(4deg) skew(0, 0);\n                    -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(4deg) skew(0, 0);\n                    -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(4deg) skew(0, 0);\n                    transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(4deg) skew(0, 0);\n                }\n            }\n        ',
          }}
        />
        <link
          href="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6233f52033ec2d6adee8a659_Fav-32px.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6233f522de0c3654499f2dbc_Fav-256px.png"
          rel="apple-touch-icon"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n            .scroll-hide {\n                -ms-overflow-style: none;\n                overflow: -moz-scrollbars-none;\n            }\n\n            .scroll-hide::-webkit-scrollbar {\n                display: none;\n            }\n\n            .tab-link.w--current .socmed-wrapper {\n                background: #a8ff35 !important;\n            }\n\n            .arrow-svg.aos-animate {\n                animation: reveal 2.5s forwards;\n            }\n\n            .arrow-svg.right.aos-animate {\n                animation: reveal_right 2.5s forwards;\n            }\n\n            @keyframes reveal {\n                25% {\n                    clip-path: inset(0 0 0 100%);\n                }\n\n                100% {\n                    clip-path: inset(0 0 0 0);\n                }\n            }\n\n            @keyframes reveal_right {\n                25% {\n                    clip-path: inset(0 100% 0 0);\n                }\n\n                100% {\n                    clip-path: inset(0 0 0 0);\n                }\n            }\n        ",
          }}
        />

        <div
          data-w-id="92a6b401-de65-7174-12b0-832e431e45d6"
          data-animation="default"
          data-collapse="medium"
          data-duration={400}
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navbar bg-trans w-nav"
        >
          <div className="container container-nav w-container">
            <Link
              href="/"
              data-aos="fade-up"
              aria-current="page"
              className="w-nav-brand w--current"
            >
              <img
                src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6233fa2810f7c36829594905_main-logo.png"
                loading="lazy"
                alt=""
                className="logo-nav"
              />
            </Link>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div className="nav-link-wrapper">
                <Link
                  href="#"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  className="nav-link w-nav-link"
                >
                  About
                </Link>
                <Link
                  href="#"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  className="nav-link w-nav-link"
                >
                  How it Work
                </Link>
                {/* <div className="text-white">{renderImages()}</div> */}
                <Link
                  href="#"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  className="nav-link w-nav-link"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  data-aos="fade-up"
                  data-aos-delay={250}
                  className="nav-link w-nav-link"
                >
                  Solution
                </Link>
                <Link
                  href="#"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  className="nav-link last w-nav-link"
                >
                  Features
                </Link>
              </div>
              <div className="nav-btn-wrapper">
                <Link
                  href="/login"
                  data-aos="fade-up"
                  data-aos-delay={350}
                  className="nav-link w-nav-link"
                >
                  Login
                </Link>
                <Link
                  data-aos="fade-up"
                  data-aos-delay={600}
                  href="#"
                  className="btn w-button"
                >
                  Register
                </Link>
              </div>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="lines">
                <div className="line-top" />
                <div className="line-middle" />
                <div className="line-bot" />
              </div>
            </div>
          </div>
        </div>
        <header className="section home-aection wf-section">
          <div className="container w-container">
            <div className="hero-text-wrapper">
              <div className="cropper">
                <h1 data-aos="fade-up" className="txt-xxl txt-white">
                  {banner}
                  <br />
                </h1>
              </div>
              <div className="cropper">
                <h1
                  data-aos="fade-up"
                  data-aos-delay={200}
                  className="txt-xxl txt-white mb-24"
                >
                  Find the trends!
                </h1>
              </div>
              <div
                data-w-id="6645770f-942c-1d19-48c6-cd313d729072"
                className="cropper"
              >
                <p
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-w-id="af807e5b-dfea-56ca-852f-7ef63e5c63d7"
                  className="txt-m txt-grey mb-40"
                >
                  Don’t let your computer memories consumes all of those browser
                  tabs.
                  <br />
                  Findtrend let you gathers all of your favorite website into
                  one place.
                </p>
              </div>
              <Link
                data-aos="fade-up"
                data-aos-delay={250}
                href="#"
                className="btn btn-green w-inline-block"
              >
                <p className="btn-txt">Get Started </p>
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/623409f51c563d60d18c9ac1_Fire.svg"
                  loading="lazy"
                  alt=""
                  className="image"
                />
              </Link>
              <div className="all-research-wrapper">
                <div className="cropper">
                  <img
                    src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/62340cf39091535ced42b188_All_research_start_from_here.svg"
                    loading="lazy"
                    data-aos-delay={250}
                    data-aos="fade-up"
                    alt=""
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay={300}
                  className="arrow-svg w-embed"
                >
                  <svg
                    width={42}
                    height={38}
                    viewBox="0 0 42 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_992_20705)">
                      <path
                        d="M40.9307 10.422C41.3809 12.0722 40.6585 13.3427 39.8412 14.4267C38.6841 15.9196 37.3547 17.3047 35.9302 18.5034C29.2234 23.8535 21.4756 25.8576 13.0024 24.9813C10.849 24.7508 8.69294 24.2083 6.30372 23.7458C6.77419 25.9732 8.56532 27.6426 9.17649 29.9155C8.16251 29.8466 7.70488 29.1796 7.31064 28.6369C5.70197 26.4041 4.1085 24.1243 2.57714 21.8128C1.85075 20.6957 1.95461 20.055 3.07246 19.4832C5.38545 18.2609 7.84556 17.8645 10.3907 18.3255C10.4845 18.3559 10.5796 18.5423 10.7532 18.806C9.58358 20.6579 7.15623 19.3531 5.65571 20.7866C8.6484 22.5857 11.9261 23.0246 15.2013 23.1515C18.6323 23.2769 22.0139 23.0751 25.2953 22.0627C28.5145 21.082 31.37 19.4648 34.1607 17.5673C36.9832 15.7319 39.1617 13.3248 40.9307 10.422Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_992_20705">
                        <rect
                          width="28.3944"
                          height="34.4457"
                          fill="white"
                          transform="translate(41.5176 10.6121) rotate(107.943)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="tab-wrapper">
              <div
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-offset={0}
                className="tab twitt"
              >
                <div
                  data-w-id="14a6065f-5ff5-9028-965f-8def937328b0"
                  className="tab-content-wrapper twitter"
                >
                  <img
                    src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/623413da90915333fb42e680_twitter.svg"
                    loading="lazy"
                    alt=""
                    className="tab-icon"
                  />
                  <p className="tab-txt">Cryptopunk - Search</p>
                  <div className="tab-close-wrapper">
                    <div
                      data-w-id="11dc8b06-b2fe-862f-853e-4bf6213d1b2d"
                      className="close-tab w-embed"
                    >
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="2.64056"
                          height="19.8042"
                          rx="0.66129"
                          transform="matrix(0.707101 -0.707112 0.707101 0.707112 0.193359 2.47028)"
                          fill="white"
                        />
                        <rect
                          width="2.64056"
                          height="19.8042"
                          rx="0.66129"
                          transform="matrix(-0.707101 -0.707112 -0.707101 0.707112 16.0645 2.47034)"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-offset={0}
                className="tab pin"
              >
                <div
                  data-w-id="d0124c01-28a2-7b50-68dc-555917fbaf3b"
                  className="tab-content-wrapper pin"
                >
                  <img
                    src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6234180d5018d4796ee836ad_pinterest.svg"
                    loading="lazy"
                    alt=""
                    className="tab-icon"
                  />
                  <p className="tab-txt">Popular Design - Seah</p>
                  <div className="tab-close-wrapper">
                    <div
                      data-w-id="d0124c01-28a2-7b50-68dc-555917fbaf40"
                      className="close-tab w-embed"
                    >
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="2.64056"
                          height="19.8042"
                          rx="0.66129"
                          transform="matrix(0.707101 -0.707112 0.707101 0.707112 0.193359 2.47028)"
                          fill="white"
                        />
                        <rect
                          width="2.64056"
                          height="19.8042"
                          rx="0.66129"
                          transform="matrix(-0.707101 -0.707112 -0.707101 0.707112 16.0645 2.47034)"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-offset={0}
                className="tab fb"
              >
                <div
                  data-w-id="b928b045-b023-2fb5-c1f1-50f4be5f108b"
                  className="tab-content-wrapper fb"
                >
                  <img
                    src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6234180ddc6c8b5632cda88a_fb.svg"
                    loading="lazy"
                    alt=""
                    className="tab-icon"
                  />
                  <p className="tab-txt">Product Design - Sear</p>
                  <div className="tab-close-wrapper">
                    <div
                      data-w-id="b928b045-b023-2fb5-c1f1-50f4be5f1090"
                      className="close-tab w-embed"
                    >
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="2.64056"
                          height="19.8042"
                          rx="0.66129"
                          transform="matrix(0.707101 -0.707112 0.707101 0.707112 0.193359 2.47028)"
                          fill="white"
                        />
                        <rect
                          width="2.64056"
                          height="19.8042"
                          rx="0.66129"
                          transform="matrix(-0.707101 -0.707112 -0.707101 0.707112 16.0645 2.47034)"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay={500}
                data-aos-offset={0}
                className="tab dribb"
              >
                <div
                  data-w-id="74d68148-1477-5f19-e0e0-c1fd77416855"
                  className="tab-content-wrapper dribb"
                >
                  <img
                    src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6234180dc8cee604df35fcb7_dribble.svg"
                    loading="lazy"
                    alt=""
                    className="tab-icon"
                  />
                  <p className="tab-txt">Elon Musk- Search</p>
                  <div className="tab-close-wrapper">
                    <div
                      data-w-id="74d68148-1477-5f19-e0e0-c1fd7741685a"
                      className="close-tab w-embed"
                    >
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="2.64056"
                          height="19.8042"
                          rx="0.66129"
                          transform="matrix(0.707101 -0.707112 0.707101 0.707112 0.193359 2.47028)"
                          fill="white"
                        />
                        <rect
                          width="2.64056"
                          height="19.8042"
                          rx="0.66129"
                          transform="matrix(-0.707101 -0.707112 -0.707101 0.707112 16.0645 2.47034)"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="section bg-green open-new-section wf-section">
          <div className="container w-container">
            <div className="cropper">
              <h1 data-aos="fade-up" className="txt-xxl mb-60">
                Open new tabs is sh*t
              </h1>
            </div>
            <div data-aos="zoom-in" className="tab-box mb-60">
              <div className="yjn-wrapper">
                <div className="cropper">
                  <img
                    src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/623438d43f72a06bc8056276_You_just_need_one_tab_now.svg"
                    loading="eager"
                    data-aos="fade-up"
                    alt=""
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay={200}
                  className="arrow-svg left w-embed"
                >
                  <svg
                    width={42}
                    height={38}
                    viewBox="0 0 42 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1129_20619)">
                      <path
                        d="M40.9307 10.422C41.3809 12.0722 40.6585 13.3427 39.8412 14.4267C38.6841 15.9196 37.3547 17.3047 35.9302 18.5034C29.2234 23.8535 21.4756 25.8576 13.0024 24.9813C10.849 24.7508 8.69294 24.2083 6.30372 23.7458C6.77419 25.9732 8.56532 27.6426 9.17649 29.9155C8.16251 29.8466 7.70488 29.1796 7.31064 28.6369C5.70197 26.4041 4.1085 24.1243 2.57714 21.8128C1.85075 20.6957 1.95461 20.055 3.07246 19.4832C5.38545 18.2609 7.84556 17.8645 10.3907 18.3255C10.4845 18.3559 10.5796 18.5423 10.7532 18.806C9.58358 20.6579 7.15623 19.3531 5.65571 20.7866C8.6484 22.5857 11.9261 23.0246 15.2013 23.1515C18.6323 23.2769 22.0139 23.0751 25.2953 22.0627C28.5145 21.082 31.37 19.4648 34.1607 17.5673C36.9832 15.7319 39.1617 13.3248 40.9307 10.422Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1129_20619">
                        <rect
                          width="28.3944"
                          height="34.4457"
                          fill="white"
                          transform="translate(41.5176 10.6121) rotate(107.943)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="sfd-wrapper">
                <div
                  data-aos="fade-up"
                  data-aos-delay={200}
                  className="arrow-svg right w-embed"
                >
                  <svg
                    width={42}
                    height={38}
                    viewBox="0 0 42 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_992_20770)">
                      <path
                        d="M0.586848 27.2035C0.136712 25.5533 0.859029 24.2828 1.67642 23.1988C2.83346 21.7059 4.16287 20.3208 5.58737 19.1221C12.2942 13.772 20.042 11.7678 28.5152 12.6442C30.6686 12.8747 32.8246 13.4172 35.2139 13.8797C34.7434 11.6523 32.9523 9.98288 32.3411 7.70995C33.3551 7.77893 33.8127 8.44588 34.2069 8.98856C35.8156 11.2214 37.4091 13.5011 38.9404 15.8127C39.6668 16.9298 39.563 17.5705 38.4451 18.1423C36.1321 19.3646 33.672 19.761 31.1269 19.3C31.0331 19.2696 30.938 19.0832 30.7643 18.8194C31.934 16.9676 34.3613 18.2724 35.8619 16.8389C32.8692 15.0398 29.5915 14.6008 26.3163 14.474C22.8852 14.3486 19.5037 14.5504 16.2223 15.5628C13.003 16.5435 10.1476 18.1607 7.35686 20.0582C4.53442 21.8936 2.35591 24.3007 0.586848 27.2035Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_992_20770">
                        <rect
                          width="28.3944"
                          height="34.4457"
                          fill="white"
                          transform="translate(0 27.0134) rotate(-72.0565)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="cropper">
                  <img
                    src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/623438d4e64da906ffcca10e_solution_for_discover_a_trend.svg"
                    loading="eager"
                    data-aos="fade-up"
                    alt=""
                  />
                </div>
              </div>
              <div className="tab findtrend">
                <div className="tab-content-wrapper findtrend">
                  <img
                    src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/623438427bf9b7e7b28d2b2b_findtrend.svg"
                    loading="lazy"
                    alt=""
                    className="tab-icon"
                  />
                  <p className="tab-txt">Findtrend - Elon Musk</p>
                  <div className="tab-close-wrapper">
                    <div className="close-tab normal w-embed">
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="2.64056"
                          height="19.8042"
                          rx="0.66129"
                          transform="matrix(0.707101 -0.707112 0.707101 0.707112 0.193359 2.47028)"
                          fill="white"
                        />
                        <rect
                          width="2.64056"
                          height="19.8042"
                          rx="0.66129"
                          transform="matrix(-0.707101 -0.707112 -0.707101 0.707112 16.0645 2.47034)"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p data-aos="fade-up" data-aos-delay={100} className="txt-m mw-666">
              A solution for your browser tabs and don’t make your device get
              slower over time. Get ease and faster to discover a trend with
              just one tab.
            </p>
          </div>
        </section>
        <section className="section wf-section">
          <div className="container w-container">
            <h1 data-aos="fade-up" className="txt-xl mw-1160 desktop">
              Findtrend helps you to increase{" "}
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-delay={50}
              className="txt-xl mw-1160 desktop"
            >
              your productivity and reduce
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-delay={100}
              className="txt-xl mw-1160 desktop"
            >
              your computer&apos;s memory load&lsquo;
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-delay={150}
              className="txt-xl mw-1160 desktop txt-grey"
            >
              an application that can fulfill
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-delay={150}
              className="txt-xl mw-1160 desktop txt-grey"
            >
              your daily browsing needs.
            </h1>
            <h1 data-aos="fade-up" className="txt-xl mw-1160 mobile">
              Findtrend helps you to increase your productivity and reduce your
              computer&apos;s memory load&lsquo;{" "}
              <span className="text-span">
                an application that can fulfill your daily browsing needs.
              </span>
            </h1>
          </div>
        </section>
        <section className="section txt-center wf-section">
          <div className="container w-container">
            <h1 data-aos="fade-up" className="txt-xl section-title">
              Findtrend make +1000 Startup grow
            </h1>
            <div className="w-layout-grid partner-grid">
              <div
                id="w-node-cf1c5b48-fe26-b5b7-8414-b8affa24fd21-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e746d2043fde51a507_brand1.png"
                  loading="eager"
                  data-aos="fade-up"
                  alt=""
                />
              </div>
              <div
                id="w-node-f43180bb-a3e4-b145-bdd6-fe150e75bc26-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e875cf8865fda28f23_brand2.png"
                  loading="eager"
                  data-aos-delay={100}
                  data-aos="fade-up"
                  alt=""
                />
              </div>
              <div
                id="w-node-_86f3780d-33d1-21f1-5cfd-50ddd83ab64b-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e7b6d9c802ed876589_brand3.png"
                  loading="eager"
                  data-aos-delay={200}
                  data-aos="fade-up"
                  alt=""
                />
              </div>
              <div
                id="w-node-_5d727077-066c-0dc8-9c06-63463df52ae9-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e7f50b0fbee8f594d2_brand4.png"
                  loading="eager"
                  data-aos-delay={300}
                  data-aos="fade-up"
                  alt=""
                />
              </div>
              <div
                id="w-node-d25546d4-4cb1-0a5b-4307-79568a9d6b4d-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e7a33e7776d26d8a5e_brand5.png"
                  loading="eager"
                  data-aos="fade-up"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 93vw, 531.9921875px"
                  srcSet="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e7a33e7776d26d8a5e_brand5-p-500.png 500w, https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e7a33e7776d26d8a5e_brand5.png 532w"
                  alt=""
                />
              </div>
              <div
                id="w-node-_83162698-bb19-7c3e-14da-f974e5342468-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8cad42d5498bc7762_brand6.png"
                  loading="eager"
                  data-aos-delay={100}
                  data-aos="fade-up"
                  alt=""
                />
              </div>
              <div
                id="w-node-_827fa2e9-295f-2b91-a840-cd48bb196f5d-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e74711c251a0033a44_brand7.png"
                  loading="eager"
                  data-aos-delay={200}
                  data-aos="fade-up"
                  srcSet="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e74711c251a0033a44_brand7-p-500.png 500w, https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e74711c251a0033a44_brand7.png 532w"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 93vw, 531.9921875px"
                  alt=""
                />
              </div>
              <div
                id="w-node-_52f9b9c4-5a87-6bb0-39f1-38a9e364f444-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8fb8c247f4490353b_brand8.png"
                  loading="eager"
                  data-aos-delay={300}
                  data-aos="fade-up"
                  srcSet="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8fb8c247f4490353b_brand8-p-500.png 500w, https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8fb8c247f4490353b_brand8.png 532w"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 93vw, 531.9921875px"
                  alt=""
                />
              </div>
              <div
                id="w-node-_42d6a2e1-5f1d-e327-628c-bf0fd3dfc815-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8a53e585d2b48dffd_brand9.png"
                  loading="eager"
                  data-aos="fade-up"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 93vw, 531.9921875px"
                  srcSet="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8a53e585d2b48dffd_brand9-p-500.png 500w, https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8a53e585d2b48dffd_brand9.png 532w"
                  alt=""
                />
              </div>
              <div
                id="w-node-_25dcd42a-6677-5fbd-beaf-def2d038d8b0-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e885542b4446a1c854_brand10.png"
                  loading="eager"
                  data-aos-delay={100}
                  data-aos="fade-up"
                  srcSet="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e885542b4446a1c854_brand10-p-500.png 500w, https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e885542b4446a1c854_brand10.png 532w"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 93vw, 531.9921875px"
                  alt=""
                />
              </div>
              <div
                id="w-node-_146bdff0-3cb2-12aa-0f15-30601f04204c-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8a33e7728c96d8a5f_brand11.png"
                  loading="eager"
                  data-aos-delay={200}
                  data-aos="fade-up"
                  srcSet="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8a33e7728c96d8a5f_brand11-p-500.png 500w, https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8a33e7728c96d8a5f_brand11.png 532w"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 93vw, 531.9921875px"
                  alt=""
                />
              </div>
              <div
                id="w-node-bca6e596-cedc-6530-6784-a3ad14781a6f-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8fbf80ecd49f5fa9b_brand12.png"
                  loading="eager"
                  data-aos-delay={300}
                  data-aos="fade-up"
                  alt=""
                />
              </div>
              <div
                id="w-node-_3ae97e2c-ea1c-8aaa-4801-efd6fa6a95d8-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8e1f64badb4c39459_brand13.png"
                  loading="eager"
                  data-aos="fade-up"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 93vw, 531.9921875px"
                  srcSet="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8e1f64badb4c39459_brand13-p-500.png 500w, https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8e1f64badb4c39459_brand13.png 532w"
                  alt=""
                />
              </div>
              <div
                id="w-node-c173785d-0579-24a1-70cc-ef611a60c909-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8466ffd7770a154e9_brand14.png"
                  loading="eager"
                  data-aos-delay={100}
                  data-aos="fade-up"
                  srcSet="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8466ffd7770a154e9_brand14-p-500.png 500w, https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8466ffd7770a154e9_brand14.png 532w"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 93vw, 531.9921875px"
                  alt=""
                />
              </div>
              <div
                id="w-node-e385c697-08a7-831a-8edc-c5bd9bf4e0b3-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8d5b5110a5fd8d53c_brand15.png"
                  loading="eager"
                  data-aos-delay={200}
                  data-aos="fade-up"
                  srcSet="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8d5b5110a5fd8d53c_brand15-p-500.png 500w, https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8d5b5110a5fd8d53c_brand15.png 532w"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 93vw, 531.9921875px"
                  alt=""
                />
              </div>
              <div
                id="w-node-_11378cb2-afb1-7b01-b987-e4c13fd91591-29ca2857"
                className="partner-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8967af5e96b59e6d8_brand16.png"
                  loading="eager"
                  data-aos-delay={300}
                  data-aos="fade-up"
                  srcSet="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8967af5e96b59e6d8_brand16-p-500.png 500w, https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237e7e8967af5e96b59e6d8_brand16.png 532w"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 93vw, 531.9921875px"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section platform-section wf-section">
          <div className="container w-container">
            <h1 data-aos="fade-up" className="txt-xl section-title">
              All platform connect to Findtrend
            </h1>
            <div
              data-current="Tab 2"
              data-easing="ease"
              data-duration-in={300}
              data-duration-out={100}
              className="tabs w-tabs"
            >
              <div className="socmed-grid scroll-hide w-tab-menu">
                <Link
                  data-w-tab="Tab 1"
                  data-aos="fade-up"
                  href={links[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tab-link w-inline-block w-tab-link"
                >
                  <div className="socmed-wrapper">
                    <img
                      loading="eager"
                      src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebd0cad42def98bc9234_fb.svg"
                      alt=""
                      className="soc-icon"
                    />
                  </div>
                </Link>
                <Link
                  href={links[1]}
                  data-w-tab="Tab 2"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  className="tab-link w-inline-block w-tab-link w--current"
                >
                  <div className="socmed-wrapper">
                    <img
                      loading="eager"
                      src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebcfb87b269833644248_twitter.svg"
                      alt=""
                      className="soc-icon"
                    />
                  </div>
                </Link>
                <Link
                  href={links[2]}
                  data-w-tab="Tab 3"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  className="tab-link w-inline-block w-tab-link"
                >
                  <div className="socmed-wrapper">
                    <img
                      loading="eager"
                      src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebcfb27f3a7788d236c1_dribble.svg"
                      alt=""
                      className="soc-icon"
                    />
                  </div>
                </Link>
                <Link
                  href={links[3]}
                  data-w-tab="Tab 4"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  className="tab-link w-inline-block w-tab-link"
                >
                  <div className="socmed-wrapper">
                    <img
                      loading="eager"
                      src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebd022283ac2a9a31783_pinterest.svg"
                      alt=""
                      className="soc-icon"
                    />
                  </div>
                </Link>
                <Link
                  href={links[4]}
                  data-w-tab="Tab 5"
                  data-aos="fade-up"
                  data-aos-delay={400}
                  className="tab-link w-inline-block w-tab-link"
                >
                  <div className="socmed-wrapper">
                    <img
                      loading="eager"
                      src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebd0d5b51192c0d8eba9_medium.svg"
                      alt=""
                      className="soc-icon"
                    />
                  </div>
                </Link>
                <Link
                  href={links[5]}
                  data-w-tab="Tab 6"
                  data-aos="fade-up"
                  data-aos-delay={500}
                  className="tab-link w-inline-block w-tab-link"
                >
                  <div className="socmed-wrapper">
                    <img
                      loading="eager"
                      src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebd07994e05c4c458dc7_reddit.svg"
                      alt=""
                      className="soc-icon"
                    />
                  </div>
                </Link>
                <Link
                  href={links[6]}
                  data-w-tab="Tab 7"
                  data-aos="fade-up"
                  data-aos-delay={600}
                  className="tab-link w-inline-block w-tab-link"
                >
                  <div className="socmed-wrapper">
                    <img
                      loading="eager"
                      src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebd075cf880e0ea2a2b9_vk.svg"
                      alt=""
                      className="soc-icon"
                    />
                  </div>
                </Link>
                <Link
                  href={links[7]}
                  data-w-tab="Tab 8"
                  data-aos="fade-up"
                  data-aos-delay={700}
                  className="tab-link w-inline-block w-tab-link"
                >
                  <div className="socmed-wrapper">
                    <img
                      loading="eager"
                      src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6237ebd022283a8eb3a3177e_linkedin.svg"
                      alt=""
                      className="soc-icon"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-tab-content">
                <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                  <div className="soc-embed-wrapper">
                    {images.map((e) => {
                      return (
                        <img
                          key={e}
                          src={e}
                          data-aos="fade-up"
                          sizes="(max-width: 479px) 92vw, (max-width: 991px) 95vw, 800px"
                          alt=""
                          className="soc-prev"
                        />
                      );
                    })}
                  </div>
                </div>
                {/* vcvcfghfgh */}
              </div>
            </div>
            <Link
              data-aos="fade-up"
              href="#"
              className="btn btn-black short w-button"
            >
              View More Trend
            </Link>
          </div>
        </section>
        <section className="section bg-black plan-section wf-section">
          <div className="container w-container">
            <h1 data-aos="fade-up" className="txt-xl txt-white mb-40">
              Get your best deal
            </h1>
            <div className="center-wrapper">
              <div
                data-aos="fade-up"
                data-aos-delay={100}
                className="plan-type-wrapper"
              >
                <h3 className="txt-ml txt-white">Monthly</h3>
                <div
                  data-w-id="e0149fc8-27f6-b1f5-ef42-fa1af1a1f4bb"
                  className="slide-btn"
                >
                  <div className="slide-option" />
                </div>
                <h3 className="txt-ml txt-grey">Yearly</h3>
                <div className="save-wrapper">
                  <div className="cropper">
                    <img
                      src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/623454097c56cbc4a4e395d5_Save_10%25_per_month.svg"
                      loading="eager"
                      data-aos="fade-up"
                      alt=""
                    />
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={200}
                    className="arrow-svg bot w-embed"
                  >
                    <svg
                      width={42}
                      height={38}
                      viewBox="0 0 42 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_992_20705)">
                        <path
                          d="M40.9307 10.422C41.3809 12.0722 40.6585 13.3427 39.8412 14.4267C38.6841 15.9196 37.3547 17.3047 35.9302 18.5034C29.2234 23.8535 21.4756 25.8576 13.0024 24.9813C10.849 24.7508 8.69294 24.2083 6.30372 23.7458C6.77419 25.9732 8.56532 27.6426 9.17649 29.9155C8.16251 29.8466 7.70488 29.1796 7.31064 28.6369C5.70197 26.4041 4.1085 24.1243 2.57714 21.8128C1.85075 20.6957 1.95461 20.055 3.07246 19.4832C5.38545 18.2609 7.84556 17.8645 10.3907 18.3255C10.4845 18.3559 10.5796 18.5423 10.7532 18.806C9.58358 20.6579 7.15623 19.3531 5.65571 20.7866C8.6484 22.5857 11.9261 23.0246 15.2013 23.1515C18.6323 23.2769 22.0139 23.0751 25.2953 22.0627C28.5145 21.082 31.37 19.4648 34.1607 17.5673C36.9832 15.7319 39.1617 13.3248 40.9307 10.422Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_992_20705">
                          <rect
                            width="28.3944"
                            height="34.4457"
                            fill="white"
                            transform="translate(41.5176 10.6121) rotate(107.943)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-grid plan-wrapper monthly">
              <div data-aos="fade-up" className="card bg-white">
                <div className="card-head">
                  <h2 className="txt-l">Personal</h2>
                  <p className="txt-m gil">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="card-body">
                  <h1 className="txt-xl txt-black mb-32">
                    $8<span className="txt-l-mini">/Month</span>
                  </h1>
                  <ul role="list" className="plan-list">
                    <li className="list-item">
                      <div className="txt-m pop">Up to 5 page each group</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">Up to 10 group page</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">5 Days group page saved</div>
                    </li>
                  </ul>
                </div>
                <Link
                  href="#"
                  className="btn btn-green _w-100 mt-a w-inline-block"
                >
                  <p className="btn-txt">Start Free Trial</p>
                </Link>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay={100}
                className="card bg-green"
              >
                <div className="card-head">
                  <h2 className="txt-l">Reguler</h2>
                  <p className="txt-m gil">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="card-body">
                  <h1 className="txt-xl txt-black mb-32">
                    $20<span className="txt-l-mini">/Month</span>
                  </h1>
                  <ul role="list" className="plan-list">
                    <li className="list-item">
                      <div className="txt-m pop">Up to 15 page each group</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">
                        Download page up to 20 page
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">Up to 10 group page</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">15 Days group page saved</div>
                    </li>
                  </ul>
                </div>
                <Link
                  href="#"
                  className="btn btn-black _w-100 mt-a w-inline-block"
                >
                  <p className="btn-txt">Start Free Trial</p>
                </Link>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay={200}
                className="card bg-white"
              >
                <div className="card-head">
                  <h2 className="txt-l">Premium</h2>
                  <p className="txt-m gil">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="card-body">
                  <h1 className="txt-xl txt-black mb-32">
                    $48<span className="txt-l-mini">/Month</span>
                  </h1>
                  <ul role="list" className="plan-list">
                    <li className="list-item">
                      <div className="txt-m pop">Unlimited group pages</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">Unlimited download page</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">Unlimited page each group</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">
                        Customize sorting group pages
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">Customize group page name</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">30 Days group page saved</div>
                    </li>
                  </ul>
                </div>
                <Link
                  href="#"
                  className="btn btn-green _w-100 mt-a w-inline-block"
                >
                  <p className="btn-txt">Start Free Trial</p>
                </Link>
              </div>
            </div>
            <div className="w-layout-grid plan-wrapper yearly">
              <div data-aos="fade-up" className="card bg-white">
                <div className="card-head">
                  <h2 className="txt-l">Personal</h2>
                  <p className="txt-m gil">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="card-body">
                  <h1 className="txt-xl txt-black mb-32">
                    $6<span className="txt-l-mini">/Month</span>
                  </h1>
                  <ul role="list" className="plan-list">
                    <li className="list-item">
                      <div className="txt-m pop">Up to 5 page each group</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">Up to 10 group page</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">5 Days group page saved</div>
                    </li>
                  </ul>
                </div>
                <Link
                  href="#"
                  className="btn btn-green _w-100 mt-a w-inline-block"
                >
                  <p className="btn-txt">Start Free Trial</p>
                </Link>
              </div>
              <div data-aos="fade-up" className="card bg-green">
                <div className="card-head">
                  <h2 className="txt-l gil">Reguler</h2>
                  <p className="txt-m gil">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="card-body">
                  <h1 className="txt-xl txt-black mb-32">
                    $15<span className="txt-l-mini">/Month</span>
                  </h1>
                  <ul role="list" className="plan-list">
                    <li className="list-item">
                      <div className="txt-m pop">Up to 15 page each group</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">
                        Download page up to 20 page
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">Up to 10 group page</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">15 Days group page saved</div>
                    </li>
                  </ul>
                </div>
                <Link
                  href="#"
                  className="btn btn-black _w-100 mt-a w-inline-block"
                >
                  <p className="btn-txt">Start Free Trial</p>
                </Link>
              </div>
              <div data-aos="fade-up" className="card bg-white">
                <div className="card-head">
                  <h2 className="txt-l">Premium</h2>
                  <p className="txt-m gil">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="card-body">
                  <h1 className="txt-xl txt-black mb-32">
                    $32<span className="txt-l-mini">/Month</span>
                  </h1>
                  <ul role="list" className="plan-list">
                    <li className="list-item">
                      <div className="txt-m pop">Unlimited group pages</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">Unlimited download page</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">Unlimited page each group</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">
                        Customize sorting group pages
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">Customize group page name</div>
                    </li>
                    <li className="list-item">
                      <div className="txt-m pop">30 Days group page saved</div>
                    </li>
                  </ul>
                </div>
                <Link
                  href="#"
                  className="btn btn-green _w-100 mt-a w-inline-block"
                >
                  <p className="btn-txt">Start Free Trial</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-green join-section wf-section">
          <div className="container w-container">
            <h1 data-aos="fade-up" className="txt-xxl">
              Join us on email for
              <br />
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-delay={100}
              className="txt-xxl mb-40 txt-green"
            >
              more trending topics
            </h1>
            <Link
              data-aos="fade-up"
              data-aos-delay={150}
              href="#"
              className="btn btn-black w-button"
            >
              Join Now
            </Link>
          </div>
        </section>
        <footer id="footer" className="footer wf-section">
          <div className="container w-container">
            <div className="footer-flex-container">
              <Link
                href="#"
                data-aos="fade-up"
                data-aos-offset={0}
                className="footer-logo-link"
              >
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/62343bdfa8974144b364a891_main-logo_dark%27.png"
                  alt=""
                  className="logo-footer"
                />
              </Link>
              <div className="footer-link-wrapper">
                <Link
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-offset={0}
                  href="#"
                  className="footer-link"
                >
                  Privacy Policy
                </Link>
                <Link
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-offset={0}
                  href="#"
                  className="footer-link"
                >
                  Terms and Conditions
                </Link>
                <Link
                  data-aos="fade-up"
                  data-aos-delay={150}
                  data-aos-offset={0}
                  href="#"
                  className="footer-link"
                >
                  Contact Us
                </Link>
                <Link
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-offset={0}
                  href="#"
                  className="footer-link last"
                >
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </footer>
        {/*[if lte IE 9]><![endif]*/}
      </div>
    </div>
  );
}
