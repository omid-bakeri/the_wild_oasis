/* eslint-disable react/jsx-no-duplicate-props */
import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillWarning } from "react-icons/ai";
import { useUser } from "./useUser";

function UpdateUserDataForm() {
  const { user } = useUser();
  console.log(user);

  return (
    <>
      <form
        className="w-[50%] 
         bg-white p-10"
      >
        <label
          className="font-bold text-xl pt-4 pb-4 text-gray-600 
        justify-start flex items-center"
        >
          Email address{" "}
        </label>
        <input
          autoComplete="email"
          type="email"
          value={user.email}
          disabled
          className="p-4 rounded-xl w-full
         border-2"
        />
        <label
          className="font-bold text-xl pt-4 pb-4 text-gray-600 
        justify-start flex items-center"
        >
          status{" "}
        </label>
        <div className="flex relative justify-end  items-center">
          <input
            autoComplete="email"
            type="email"
            value={user.role}
            disabled
            className={`p-4 rounded-xl w-full
          ${user.aud === "authenticated" ? "bg-green-500" : "bg-yellow-500"}
         border-2`}
          />
          <i className="absolute mr-4">
            {user.role === "authenticated" ? (
              <BsCheckCircleFill className="text-green-500 text-4xl" />
            ) : (
              <AiFillWarning className="text-yellow-500 text-4xl" />
            )}
          </i>
        </div>
        <label
          className="font-bold text-xl pt-4 pb-4 text-gray-600 
        justify-start flex items-center"
        >
          Email Confirm at{" "}
        </label>
        <input
          autoComplete="email"
          type="email"
          value={user.email_confirmed_at}
          disabled
          className="p-4 rounded-xl w-full
         border-2"
        />

        <label
          className="font-bold text-xl pt-4 pb-4 text-gray-600 
        justify-start flex items-center"
        >
          Last Sign in{" "}
        </label>
        <input
          autoComplete="email"
          type="email"
          value={user.identities.at(0).last_sign_in_at}
          disabled
          className="p-4 rounded-xl w-full
         border-2"
        />

        {/* <button
          className="bg-[#4338ca] select-none
         text-white text-center 
        p-4  w-full rounded-xl mt-10"
        >
          Update Account
        </button> */}
      </form>
      
    </>
  );
}

export default UpdateUserDataForm;
