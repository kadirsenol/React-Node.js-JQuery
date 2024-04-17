const Login = ()=>{

    return(
    <>
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
          <div className="container justify-content-center">
            <div className="navbar-brand">
              <span className="ms-5 ">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_k3zaeHLnOwOVTRy29xPx87q_WuPFK73rEVllL-=s900-c-k-c0x00ffffff-no-rj"
                  alt="Avatar Logo"
                  style={{ width: 90 }}
                  className="rounded-pill ms-4"
                />
              </span>
              <div>
                <span className="text-white">TOPLANTI YÖNETİM SİSTEMİ</span>
              </div>
            </div>
          </div>
        </nav>
        <div id="container" className="container mt-3">
          <div id="loginscreen">
            <h3>
              Giriş <i className="bi bi-box-arrow-in-right" />{" "}
            </h3>
            <div className="row">
              <div className="row">
                <div className="col-4">
                  <div className="form-group">
                    <input
                      className="form-control mt-2 mb-3"
                      placeholder="Email Giriniz.."
                      id="email"
                      type="email"
                      style={{ height: 30 }}
                    />
                    <input
                      className="form-control"
                      placeholder="Password Giriniz.."
                      id="password"
                      type="password"
                      style={{ height: 30 }}
                    />
                  </div>
                  <div className="row">
                    <div className="col-1 me-4">
                      <button
                        type="submit"
                        id="login"
                        className=" btn btn-success mt-2 "
                        style={{ height: 30, paddingTop: 0, paddingBottom: 0 }}
                      >
                        Giriş
                      </button>
                    </div>
                    <div className="col-4 ms-3">
                      <button
                        type="submit"
                        id="register"
                        className="btn btn-primary mt-2 "
                        style={{ height: 30, paddingTop: 0, paddingBottom: 0 }}
                      >
                        {" "}
                        Kayıt Ol{" "}
                      </button>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <p id="errortext" className="mb-0 text-danger " />
                  </div>
                </div>
                <div className="col-8">
                  <div col="">
                    <img
                      src="https://yildirim23nolukarapinarasm.com/images/uploads/fade68c1b213093524_images-personel-erkek_QBNW.jpg"
                      alt="Avatar Logo"
                      style={{ width: 190, height: 200 }}
                      className="rounded-pill float-end me-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      )
}

export default Login