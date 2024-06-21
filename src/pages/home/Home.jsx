import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        {/* <!-- Background Image --> */}
        <img
          src="/assets/img/Home Screen (3).png"
          className="position-absolute"
          style={{ height: "100%", width: "100%" }}
        />
        {/* <!-- End of Background Image --> */}

        <Navbar />

        {/* <!-- End of Navigation --> */}

        {/* <!-- Content Section --> */}
        <div className="container-fluid pt-lg-5 mt-lg-3 mt-0 pt-4">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-1"></div>
            <div className="col-6 col-lg-6 col-xl-5 col-md-6 pt-2">
              <div className="card home-time-card gradient-border-mask">
                <div className="row border-bottom">
                  <div className="col-8 col-lg-8 col-md-8 col-xl-8">
                    <p className="font-lg m-0 text-white">Game Starts in</p>
                  </div>
                  <div className="col-4 p-0 col-lg-4 col-xl-4 col-md-4 d-flex align-items-center justify-content-end">
                    <a href="" className="btn-bingo">
                      Episode 1
                    </a>
                  </div>
                </div>
                <div className="row justify-content-evenly pt-4 border-bottom">
                  <div className="col-3 col-lg-3 col-xl-3 col-md-3 d-flex flex-column align-items-center text-center justify-content-center">
                    <div className="dotted-circle yellow-dotted d-flex text-center justify-content-center align-items-center">
                      <span>11</span>
                    </div>
                    <p className="font-2 txt-yellow pt-2 font-sm">Days</p>
                  </div>
                  <div className="col-3 col-lg-3 col-xl-3 col-md-3 d-flex flex-column align-items-center text-center justify-content-center">
                    <div className="dotted-circle d-flex justify-content-center align-items-center">
                      <span>11</span>
                    </div>
                    <p className="text-center font-2 pt-2 font-sm text-white">
                      Hours
                    </p>
                  </div>
                  <div className="col-3 col-lg-3 col-xl-3 col-md-3 d-flex flex-column align-items-center text-center justify-content-center">
                    <div className="dotted-circle purple-dotted d-flex justify-content-center align-items-center">
                      <span>11</span>
                    </div>
                    <p className="text-center font-2 txt-lt-purple pt-2 font-sm">
                      Minute
                    </p>
                  </div>
                  <div className="col-3 col-lg-3 col-xl-3 col-md-3 d-flex flex-column align-items-center text-center justify-content-center">
                    <div className="dotted-circle d-flex justify-content-center align-items-center">
                      <span>11</span>
                    </div>
                    <p className="text-center font-2 pt-2 font-sm text-white">
                      Second
                    </p>
                  </div>
                </div>
                <div className="row">
                  <p className="m-0 font-md txt-bolder text-white align-items-center d-flex justify-content-center pt-2">
                    9 : 00 am, Tuesday, June 30, 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 col-lg-4 col-xl-5 col-md-4 position-relative p-0">
              <h1 className="text-white font-lg text-center">
                Play, Enjoy & Win Big
              </h1>
              <div className="row justify-content-center">
                <h2 className="text-white txt-bolder text-center font-md">
                  Prizes
                </h2>
                <div className="col-6 col-lg-6 col-xl-6 col-md-6 d-flex justify-content-center">
                  <div>
                    <p className="text-white font-lt-sm p-0 m-0">First Row</p>
                    <h2 className="text-white font-b-sm">Rs. 2,500</h2>
                    <p className="text-white font-lt-sm p-0 m-0">Second Row</p>
                    <h2 className="text-white font-b-sm">Rs. 2,500</h2>
                  </div>
                </div>
                <div className="col-6 col-lg-6 col-xl-6 col-md-6 d-flex justify-content-center">
                  <div>
                    <p className="text-white font-lt-sm p-0 m-0">Third Row</p>
                    <h2 className="text-white font-b-sm">Rs. 2,500</h2>
                    <p className="text-white font-lt-sm p-0 m-0">Full House</p>
                    <h2 className="text-white font-b-sm">Rs. 2,500</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
        {/* <!-- End of Home Content --> */}
      </div>
    </>
  );
};

export default Home;
