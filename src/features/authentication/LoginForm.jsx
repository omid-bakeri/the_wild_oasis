import { useState } from "react";
import Logo from "../../ui/Logo";
import { toast } from "react-hot-toast";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [eye, setEye] = useState(false);

  function handleSubmitForm(e) {
    e.preventDefault();

    if (!password || !email) {
      toast.error("please fill in all fields!");
    }

    console.log(email);
    console.log(password);
  }

  return (
    <>
      <div
        className="flex flex-col
       justify-center items-center"
      >
        <Logo />
        <h3 className="pt-6 font-bold">Login in to your account</h3>
      </div>
      <form
        onSubmit={handleSubmitForm}
        className="w-[80%] mx-auto
         bg-white p-10"
      >
        <label
          className="font-bold text-xl pt-4 pb-4 text-gray-600 
        justify-start flex items-center"
        >
          Email address{" "}
        </label>
        <input
          placeholder="example@gmail.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="p-4 rounded-xl w-full
         border-2"
        />
        <label
          className="font-bold text-xl pt-4 pb-4 text-gray-600 
        justify-start flex items-center"
        >
          Password{" "}
        </label>
        <div
          className="flex relative 
          justify-end 
         items-center"
        >
          <input
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={eye ? "text" : "password"}
            className="p-4 relative 
            rounded-xl w-full 
            border-2"
          />
          <i
            onClick={() => setEye((element) => !element)}
            className="absolute 
          hover:cursor-pointer mr-4"
          >
            {!eye && (
              <AiFillEye
                className="text-3xl
              "
              />
            )}
            {eye && (
              <AiFillEyeInvisible
                className="text-3xl
              "
              />
            )}
          </i>
        </div>
        <button
          className="bg-[#4338ca] select-none
         text-white text-center 
        p-4  w-full rounded-xl mt-10"
        >
          Login
        </button>
      </form>
    </>
  );
}

export default LoginForm;
