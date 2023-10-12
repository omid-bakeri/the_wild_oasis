import { useForm } from "react-hook-form";
import { useUpdatePassword } from "./useUpdateUser";

function UpdatePasswordForm() {
  const { isLoading, updatePassword } = useUpdatePassword();

  const { register, handleSubmit, getValues } = useForm();
  function onSubmit({ password }) {
    console.log(password);
    updatePassword({ password });
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[50%] 
         bg-white p-10"
      >
        <label
          className="font-bold text-xl pt-4 pb-4 text-gray-600 
        justify-start flex items-center"
        >
          Enter new password (8 chars){" "}
        </label>
        <input
          name="password"
          autoComplete="password"
          type="password"
          {...register("password", {
            required: "this field is required",
            minLength: {
              value: 8,
              message: "password should be more then 8 chars",
            },
          })}
          className="p-4 rounded-xl w-full
         border-2"
        />
        <label
          className="font-bold text-xl pt-4 pb-4 text-gray-600 
        justify-start flex items-center"
        >
          confirm password
        </label>
        <input
          name="repassword"
          autoComplete="repassword"
          type="password"
          {...register("repassword", {
            required: "this field is required",
            validate: (value) =>
              value === getValues().password || "password need to match",
          })}
          className="p-4 rounded-xl w-full
         border-2"
        />

        <div className="flex gap-4 justify-center items-center">
          <button
            type="reset"
            className="bg-gray-400 select-none
         text-white text-center 
        p-4  w-full rounded-xl mt-10"
          >
            Cancel
          </button>
          <button
            disabled={isLoading}
            className="bg-[#4338ca] select-none
         text-white text-center 
        p-4  w-full rounded-xl mt-10"
          >
            Update Password
          </button>
        </div>
      </form>
    </>
  );
}

export default UpdatePasswordForm;
