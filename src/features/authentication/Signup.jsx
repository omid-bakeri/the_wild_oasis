/* eslint-disable react/no-unknown-property */
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

function Signup() {
  const { isLaoding, Signup } = useSignup();

  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullname, email, password }) {
    Signup(
      { fullname, email, password },
      {
        onSettled: reset,
      }
    );
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[80%] mx-auto
         bg-white p-10"
      >
        <label
          className="font-bold text-xl 
          pt-4 pb-4 text-gray-600 
        justify-start flex items-center"
        >
          Fullname{" "}
        </label>
        <input
          error={errors?.fullname?.message}
          name="fullname"
          autoComplete="fullname"
          type="text"
          {...register("fullname", { required: "this field is required" })}
          className="p-4 rounded-xl w-1/2
         border-2"
        />
        <label
          className="font-bold text-xl 
          pt-4 pb-4 text-gray-600 
        justify-start flex items-center"
        >
          Email Address{" "}
        </label>
        <input
          error={errors?.email?.message}
          name="email"
          {...register("email", {
            required: "this field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "please enter a validate email",
            },
          })}
          placeholder="example@gmail.com"
          autoComplete="email"
          type="email"
          className="p-4 rounded-xl w-1/2
         border-2"
        />
        <label
          className="font-bold text-xl pt-4 pb-4 text-gray-600 
        justify-start flex items-center"
        >
          Password (min 8 characters){" "}
        </label>
        <div
          className="flex relative 
          justify-start 
         items-center"
        >
          <input
            name="password"
            {...register("password", {
              required: "this field is required",
              minLength: {
                value: 8,
                message: "password needs be more than 8 characters",
              },
            })}
            autoComplete="password"
            type="password"
            className="p-4 relative 
            rounded-xl w-1/2 
            border-2"
          />
        </div>
        <label
          className="font-bold text-xl pt-4 pb-4 text-gray-600 
        justify-start flex items-center"
        >
          Repeat Password{" "}
        </label>
        <input
          name="repassword"
          {...register("repassword", {
            required: "this field is required",
            validate: (value) =>
              value === getValues().password || "passwords need to match",
          })}
          type="password"
          autoComplete="password"
          className="p-4 relative 
            rounded-xl w-1/2 
            border-2"
        />
        <div className="flex gap-4 items-center justify-center ">
          <button
            type="reset"
            className="bg-slate-400 select-none
         text-white text-center 
        p-4  w-1/2 rounded-xl mt-10 focus:outline-slate-400"
          >
            cancel
          </button>
          <button
            disabled={isLaoding}
            className="bg-[#4338ca] select-none
         text-white text-center 
        p-4  w-1/2 rounded-xl mt-10"
          >
            {!isLaoding ? "Create new user" : "please wait ..."}
          </button>
        </div>
      </form>
    </>
  );
}

export default Signup;
