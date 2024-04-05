import React, { useState } from "react";
import { userlogin } from "../redux/NewsSlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = async (formData) => {
    setIsLoading(true);
    const res = await dispatch(userlogin({ formData, navigate }));
    console.log("res", res);
    reset();
    if (res.payload.status) {
      await localStorage.setItem("userId", res.payload.data.userInfo._id);
      localStorage.setItem("username", res.payload.data.userInfo.name);
      localStorage.setItem("genre", res.payload.data.userInfo.genre);
      const tokenExpTime = Date.now() + 1 * 60 * 60 * 1000;
      localStorage.setItem("tokenExpTime", tokenExpTime);
      navigate("/dashboard");
      setIsLoading(false);
    }else{
      setIsLoading(false)
    }
  };
  const handleError = (errors) => {};

  const registerOptions = {
    email: {
      required: {
        value: true,
        message: "*Email is required",
      },
    },

    password: {
      required: {
        value: true,
        message: "*Password is required",
      },
    },
  };

  return (
    <div>
      {isLoading ? (
        <div style={{ position: "relative", top: "10%", left: "45%" }}>
          <p style={{ fontSize: 20, color: "#AE0000" }}>Loading...</p>
          <ClipLoader color={"#123abc"} loading={isLoading} size={100} />
        </div>
      ) : (
        <div style={{ backgroundColor: "#C3F0C2", minHeight: "100vh" }}>
          <div className="row">
            <div
              className="col-sm-9 col-md-7 col-lg-5 mx-auto"
              style={{ marginTop: "100px" }}
            >
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5 fw-light fs-5">
                    <strong>Login</strong>
                  </h5>
                  <form onSubmit={handleSubmit(handleForm, handleError)}>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        {...register("email", registerOptions.email)}
                      />
                      <p className="error">{errors.email?.message}</p>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        {...register("password", registerOptions.password)}
                      />
                      <p className="error">{errors.password?.message}</p>
                    </div>

                    <div className="d-grid">
                      <button
                        className="btn btn-login text-uppercase fw-bold"
                        type="submit"
                        style={{ backgroundColor: "#97F09D" }}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
