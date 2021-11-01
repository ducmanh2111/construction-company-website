import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import axios from '../../services/axios';

async function loginUser(credentials) {
  return await axios.post(`/login`,
    {
      admin: {
        login: credentials.username,
        password: credentials.password
    }
  })
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid"
              alt="Sample"/>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <div className="col-lg-12">
              <h4 className="mt-1 mb-5 pb-1 text-center">Welcome to Admin login page</h4>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">Email address</label>
                <input type="text" id="form3Example3" className="form-control form-control-lg"
                  placeholder="Enter a valid username" onChange={e => setUserName(e.target.value)} />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">Password</label>
                <input type="password" id="form3Example4" className="form-control form-control-lg"
                  placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
              </div>


              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
