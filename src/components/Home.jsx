import React from "react";
// import "./home.css"

const Home = () => {
  return (
    <>
      <main>
        <div className="home-img">
          <img src="/images/Rectangle 2.png" alt="home" />
        </div>
        <h1>SERVICES WE OFFER</h1>

        <div className="hero">
          <div className="rect1">
            PET BOARDING
            <img src="/images/Group 1.png" alt="img" />
          </div>
          <div className="rect2">
            <img src="/images/Rectangle 4.png" alt="" />
          </div>
          <div className="rect3">
            PET CAFES
            <img src="/images/Group 1.png" alt="img" />
          </div>
          <div className="rect4 mt-3">
            <img src="/images/Rectangle 8.png" alt="" />
          </div>
          <div className="rect5 mt-3">
            PET EVENTS
            <img src="/images/Group 1.png" alt="img" />
          </div>
          <div className="rect6 mt-3">
            <img src="/images/Rectangle 6.png" alt="" />
          </div>
        </div>
        <div className="banner mt-5 max-width:100% ">
          <img src="/images/Rectangle 9.png" alt="banner-img" />
        </div>

        <span className="hero2">
          <form className="join-form mt-5">
            <div className="join-h mt-5">JOIN US!</div>

            <div className="mb-3 ms-4">
              <input
                type="name"
                class="form-control"
                placeholder="Bussiness Name"
              />
            </div>
            <div className="mb-3 ms-4 mt-4">
              <input type="email" class="form-control" placeholder="email" />
            </div>
            <div className="mb-3 ms-4 mt-4">
              <input
                type="number"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
            <select
              class="form-select ms-4 mt-4"
              aria-label="Default select example"
            >
              <option selected>Want to Register as</option>
              <option value="1">Student</option>
            </select>
            <button type="submit" className="btn ms-100 mt-4">
              Submit
            </button>
          </form>
        </span>
      </main>
      <footer className="foot">
        <div className="foot1">
          <img src="/images/logo.png" alt="logo" />

          <p>
            TPV is on a mission to be your trusted bridge, connecting pet owners
            with passionate and skilled pet service providers. With us, pet
            parents can discover a World of Service

          </p>
          <h4>Copyright © 2024, thepetvibes.com</h4>
       
        </div>
      </footer>
    </>
  );
};

export default Home;
