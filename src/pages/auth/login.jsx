import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import FinEdgeEmblem from "@/assets/finedge-emblem.svg?react";
import FinEdgeBg from "@/assets/finedge-icon.png";
import SignIn from "@/components/auth/sign-in";
import VerifyOtp from "@/components/auth/verify-otp";
import { SignInSchema } from "@/schema/auth.schema";
import { setUser } from "@/store/reducers/user.reducer";
const Login = () => {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: zodResolver(SignInSchema) });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      const userData = { isLoggedIn: true, email: data.email };
      dispatch(setUser(userData));
      setStep(2);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${FinEdgeBg})` }}
        className=" bg-[length:700px_auto] min-h-screen gap-8  bg-no-repeat bg-center flex flex-col items-center justify-center px-4"
      >
        <div className="flex flex-col items-center gap-4">
          <FinEdgeEmblem />
          <p className="text-[24px] font-semibold">Sign in to your account</p>
        </div>

        {step === 1 && (
          <SignIn
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
          />
        )}
        {step === 2 && <VerifyOtp />}
      </div>
    </>
  );
};

export default Login;
