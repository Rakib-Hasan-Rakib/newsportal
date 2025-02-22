import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaFacebook,
  FaGoogle,
  FaLock,
  FaUser,
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="h-[500px] w-8/12 mx-auto rounded-3xl text-center my-12 flex justify-between flex-wrap items-center overflow-hidden shadow-2xl">
        <div className="h-full w-2/5 bg-green-500 text-white flex justify-center items-center ">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Welcome back!</h3>
            <p>Already have an account?</p>
            <button className="text-lg border border-white rounded-full px-8 py-1 hover:bg-white hover:text-green-500 duration-700 cursor-pointer">
              <Link to="/signin">Sign in</Link>
            </button>
          </div>
        </div>
        <div className="w-3/5 h-full flex justify-center items-center dark:bg-white dark:text-black">
          <div>
            <h2 className="text-4xl font-bold text-green-500">
              Create Account
            </h2>
            <div className="flex justify-center items-center gap-4 mt-4">
              <FaGoogle size={28} className="" />
              <FaFacebook size={28} className="" />
            </div>
            <p className="text-center my-4">
              or use your email for registration
            </p>

            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <div className="relative">
                <FaUser
                  size={22}
                  className="absolute top-[18px] left-2 text-gray-400"
                />
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input-field"
                />
              </div>
              <div className="relative">
                <IoMdMail
                  size={22}
                  className="absolute top-[18px] left-2 text-gray-400"
                />
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input-field"
                />
              </div>
              <div className="relative">
                <FaLock
                  size={22}
                  className="absolute top-[18px] left-2 text-gray-400"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  placeholder="password"
                  className="input-field"
                />
                <div className="absolute top-[18px] right-2 text-gray-400 cursor-pointer">
                  {showPassword ? (
                    <FaEyeSlash size={22} onClick={() => setShowPassword(false)} />
                  ) : (
                    <FaEye size={22} onClick={() => setShowPassword(true)} />
                  )}
                </div>
              </div>
              <button className="text-lg text-green-500 border border-green-500 hover:bg-green-500 hover:text-white duration-700 font-semibold rounded-full my-4 py-1 px-8 w-1/2 mx-auto cursor-pointer ">
                <input
                  type="submit"
                  value="Sign up"
                  className="cursor-pointer"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
