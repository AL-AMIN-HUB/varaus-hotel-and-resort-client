import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import { Link } from "react-router-dom";
import registerLogo from "../../../images/register.svg";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { signInGoogle, user } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="register container mt-5 mx-auto row">
      <p> {user.displayName}</p>
      <div className="col-md-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Name" type="text" {...register("name", { required: true, maxLength: 20 })} />
          <input placeholder="Email" type="email" {...register("email")} />
          <input placeholder="Password" type="password" {...register("password")} />
          <input type="submit" />
        </form>
        <p>
          Already Registered?
          <Link className="text-decoration-none text-dark" to="/login">
            <span className="text-primary"> Please Login</span>
          </Link>
        </p>
        <p className=" text-center my-5 fs-4">--------------- OR ----------------</p>
        <div className="text-center">
          {" "}
          <button onClick={signInGoogle} className="btn btn-success px-3 fs-5">
            <img style={{ width: "30px" }} src="https://iconape.com/wp-content/png_logo_vector/google-g-2015.png" alt="" />{" "}
            <span>Sign In With Google</span>
          </button>
        </div>
      </div>
      <div className="col-md-7">
        <img className="img-fluid w-100" src={registerLogo} alt="" />
      </div>
    </div>
  );
};

export default Register;
