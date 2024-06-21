import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent px-5">
        <h1 className="brand-name">
          <a className="" href="#">
            Fullhouse Nepal
          </a>
        </h1>
        {/*  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>  */}

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <div className="username">
                <a className="nav-link d-flex font-2" href="#">
                  <figure style={{ width: "16%" }}>
                    <img
                      src="/assets/img/button/Ellipse 4.png"
                      style={{ width: "100%" }}
                      alt=""
                    />
                  </figure>
                  &nbsp; Bimochan Bajimaya
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link font-2" href="#">
                230 coins
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-2" href="#">
                <i className="bi bi-question-lg"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link bi bi-list font-2"
                onClick={() => setOpen(!open)}
                id="menuButton"
              ></a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        id="mySidebar"
        className="sidebar px-3"
        style={{ right: open ? "0px" : "-300px" }}
      >
        <a className="closebtn" id="closeBtn" onClick={() => setOpen(false)}>
          &times;
        </a>
        <div className="d-flex justify-content-start align-items-center pb-3 px-3 pt-5 border-btm-purple">
          <figure className="profile-img m-0">
            <img
              src="/assets/img/button/Ellipse 4.png"
              style={{ width: "100%" }}
              alt=""
            />
          </figure>
          &nbsp;
          <div className="d-flex flex-column gap-0">
            <span className="fs-20 text-dark txt-bold m-0 p-0 mb-0 pb-0">
              Ram Bahadur{" "}
            </span>

            <span className="text-dark font-2 m-0 p-0 mb-0 pb-0">
              230 coins{" "}
            </span>
          </div>
        </div>

        <a className=" border-btm-purple" href="./index.html">
          <div className="d-flex ">
            <span className="custom-button p-2">
              <i className="bi bi-list"></i>
            </span>
            &nbsp;&nbsp;<span className="font-md-bold">Home</span>
          </div>
        </a>
        <a className=" border-btm-purple" href="./availableTicket.html">
          <div className="d-flex ">
            <span className="custom-button p-2">
              <i className="bi bi-list"></i>
            </span>
            &nbsp;&nbsp;<span className="font-md-bold">Ticket History</span>
          </div>
        </a>
        <a className=" border-btm-purple" href="#">
          <div className="d-flex ">
            <span className="custom-button p-2">
              <i className="bi bi-list"></i>
            </span>
            &nbsp;&nbsp;<span className="font-md">Game Rules</span>
          </div>
        </a>
        <a className=" border-btm-purple" href="#">
          <div className="d-flex ">
            <span className="custom-button p-2">
              <i className="bi bi-list"></i>
            </span>
            &nbsp;&nbsp;<span className="font-md">About Us</span>
          </div>
        </a>
        <a className=" border-btm-purple" href="#" id="logoutButton">
          <div className="d-flex ">
            <span className="custom-button p-2">
              <i className="bi bi-list"></i>
            </span>
            &nbsp;&nbsp;<span className="font-md">Logout</span>
          </div>
        </a>
        <div
          className="modal fade"
          id="logoutModal"
          tabIndex="-1"
          aria-labelledby="logoutModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{
              minHeight: "calc(100% - 16.5rem)",
              maxWidth: "650px",
              margin: "12rem auto",
            }}
          >
            <div className="modal-content rounded-40">
              <div className="modal-body font-md text-center">
                Are you sure you want to exit ?{" "}
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  type="button"
                  className="btn-buy border-0"
                  style={{ backgroundColor: "#E51951", padding: "3px 20px" }}
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn-buy  border-0">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="overlay"
        onClick={() => setOpen(false)}
        style={{ display: open ? "" : "none" }}
        className="overlay"
      ></div>
    </>
  );
};

export default Navbar;
