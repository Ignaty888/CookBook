const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');

function RegPage({ title = 'reg', user }) {
  return (
    <Layout title={title}>
      <Navbar user={user} />
      <section className="vh-100 bg-image">

        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                    <form id="registerForm" action="/reg" method="post">

                      <div className="form-outline mb-4">
                        <input name="login" type="text" id="form3Example1cg" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input name="email" type="email" id="form2Example1cg" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example1cg">Your Email</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input name="password" type="password" id="form3Example4cg" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input name="passwordRepeat" type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          id="Register"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <div className="text-center mt-3 err-reg" />

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?
                        <a
                          href="/log"
                          className="fw-bold text-body"
                        >
                          <u>Login here</u>
                        </a>
                      </p>

                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}

module.exports = RegPage;
