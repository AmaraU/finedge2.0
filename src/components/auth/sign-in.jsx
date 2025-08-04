import Lock from "../../assets/lock.svg?react";
import LoginIcon from "../../assets/login.svg?react";
import Mail from "../../assets/mail.svg?react";

const SignIn = ({ handleSubmit, onSubmit, register, errors, isSubmitting }) => {
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        class="w-[500px] gap-8 flex flex-col rounded-[12px] border-[0.5px] py-[30px] px-[24px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[64px]  border-[#CBD5E1] space-y-3"
      >
        <div className="flex flex-col">
          <div class="relative">
            <input
              {...register("email")}
              type="email"
              className="ps-20 text-black bg-[#F8FAFC] w-full px-4 py-2 border-[0.5px] border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <div class="absolute gap-1 inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              <Mail />
              <p className="text-[#475569]">Email: </p>
            </div>
          </div>
          {errors.email && (
            <p className="text-red-600 self-end">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <div class="relative">
            <input
              {...register("password")}
              type="password"
              className="ps-27 text-black bg-[#F8FAFC] w-full px-4 py-2 border-[0.5px] border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
            <div class="absolute gap-1 inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              <Lock />
              <p className="text-[#475569]">Password: </p>
            </div>
          </div>
          {errors.password && (
            <p className="text-red-600 self-end">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>

          <a
            href="#"
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition  flex items-center justify-center gap-2"
        >
          {isSubmitting ? "Loading..." : "Sign in to your account"}
          <LoginIcon className="w-6 h-6 fill-[#D9D9D9]" />
        </button>
      </form>
    </>
  );
};

export default SignIn;
