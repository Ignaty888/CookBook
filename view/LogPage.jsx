const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');

function LoginPage({ title, user }) {
  return (
    <Layout title={title}>
      <Navbar user={user} />
      <p className="m-5" />
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card">
                <div className="card-body p-5 ">
                <h2 className="text-uppercase text-center mb-5">Login an account</h2>
                  <form id="formLog" method="post" action="/login">

                    <div className="form-outline mb-4">
                      <input name="email" type="text" id="form2Example1" className="form-control" />
                      <label className="form-label" htmlFor="form2Example1">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input name="password" type="password" id="form2Example2" className="form-control" />
                      <label className="form-label" htmlFor="form2Example2">Password</label>
                    </div>

                    <div className="err-log" />

                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4  ">Sign in</button>

                    <div className="text-center">
                      <p>
                        Not a member?
                        <a href="/reg">Register</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}

module.exports = LoginPage;
