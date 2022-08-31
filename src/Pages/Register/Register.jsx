import React, { useState } from "react";
import "./../../CSS/production/Register.css";
import SVGicons from "./../../Components/SVG/SVGicons";
import { useForm } from "react-hook-form";

export const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
  };

  const [password, setPassword] = useState(true);
  console.log(password);
  return (
    <div className="register">
      <div className="background">
        <img src="/images/Vector.png" alt="" />
        <img src="/images/Vector (1).png" alt="" />
      </div>
      <div className="left-side">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Welcome!</h3>
          <div className="inputs">
            <input
              type="text"
              placeholder="Name"
              name="name"
              {...register("name", { required: true })}
              style={{
                border: errors.name ? "1px solid red" : "1px solid #1288E8",
              }}
            />
            <input
              type="text"
              placeholder="Surname"
              name="surname"
              {...register("surname", { required: true })}
              style={{
                border: errors.surname ? "1px solid red" : "1px solid #1288E8",
              }}
            />
            <div
              className="login"
              style={{
                border: errors.loginEmail
                  ? "1px solid red"
                  : "1px solid #1288E8",
              }}
            >
              <div>
                <SVGicons icon="user" />
              </div>
              <input
                type="text"
                placeholder="E-mail or Login"
                name="loginEmail"
                {...register("loginEmail", { required: true })}
              />
            </div>
            <div
              className="password"
              style={{
                border: errors.password ? "1px solid red" : "1px solid #1288E8",
              }}
            >
              <div>
                <SVGicons icon="lock" />
              </div>
              <input
                type={password ? "password" : "text"}
                placeholder="Password"
                name="password"
                {...register("password", { required: true, minLength: 8 })}
              />
              <img
                src="/images/eye.png"
                alt=""
                onClick={() => setPassword(!password)}
              />
            </div>
          </div>
          <div className="buttons">
            <button type="submit" className="sign-up">
              SIGN UP
            </button>
            <button className="sign-in">SIGN IN</button>
          </div>
          <a href="https://www.apple.com">Forgot your password?</a>
        </form>
      </div>
      <div className="right-side">
        <h1>VALUET</h1>
        <div className="line"></div>
        <p>Your currency dashboard</p>
      </div>
    </div>
  );
};
