import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LoginIcon from "@/assets/login.svg?react";
import VerifyIcon from "@/assets/verify-stroke.svg?react"
import "preline";

const VerifyOtp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, []);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/dashboard");
      }}
      class="w-[500px] text-center gap-8 flex flex-col items-center rounded-[12px] border-[0.5px] py-[30px] px-[24px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[64px]  border-[#CBD5E1] space-y-3"
    >
      <p className="text-[18px] font-semibold leading-normal tracking-[0.09px]">
        Verify your Identity
      </p>
      <p className="text-[14px] font-medium leading-[20px] tracking-[0.07px] text-[#475569]">
        Check your inbox for the OTP that has been sent to your email
        alli****az@gmail.com.
      </p>
      <div class="flex gap-x-3" data-hs-pin-input="">
        {[...Array(6)].map((_, i) => (
          <input
            key={i}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="block w-[40px] h-[48px] text-center bg-white border-transparent rounded-md sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="⚬"
            data-hs-pin-input-item=""
            onBeforeInput={(e) => {
              if (!/^[0-9]$/.test(e.data)) {
                e.preventDefault();
              }
            }}
          />
        ))}
      </div>
      <div className="w-full flex flex-col gap-[12px]">
        <button
          type="submit"
          disabled={false}
          className="w-full bg-[#4338CA] text-white py-2 rounded-lg   flex items-center justify-center gap-2"
        >
          {"Validate Account"}
          <VerifyIcon className="w-6 h-6 fill-[#D9D9D9]" />
        </button>
        <button
          type="submit"
          disabled={false}
          className="w-full bg-[#EEF2FF] text-[#000] py-2 rounded-lg  flex items-center justify-center gap-2"
        >
          Back to login
          <LoginIcon className="w-6 h-6 fill-[#000]" />
        </button>
      </div>
    </form>
  );
};

export default VerifyOtp;
