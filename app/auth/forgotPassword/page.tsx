"use client";
import Image from "next/image";

import ForgotForm from "../components/ForgotForm";
// import useDarkMode from "@/hooks/useDarkMode";

import LogoWhite from "../../assets/images/logo/logo-white.svg";
import Logo from "../../assets/images/logo/logo.svg";
import Illustration from "../../assets/images/auth/ils1.svg";

const ForgotPassword = () => {
  //   const [isDark] = useDarkMode();
  const isDark = false;
  return (
    <div className="loginwrapper">
      <div className="lg-inner-column">
        <div className="left-column relative z-[1]">
          <div className="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20">
            <div
            //  to="/"
            >
              <Image src={isDark ? LogoWhite : Logo} alt="" className="mb-10" />
            </div>

            <h4>
              Unlock your Project
              <span className="text-slate-800 dark:text-slate-400 font-bold">
                performance
              </span>
            </h4>
          </div>
          <div className="absolute left-0 bottom-[-130px] h-full w-full z-[-1]">
            <Image
              src={Illustration}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="right-column relative">
          <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
            <div className="auth-box2 flex flex-col justify-center h-full">
              <div className="mobile-logo text-center mb-6 lg:hidden block">
                <div
                //  to="/"
                >
                  <Image
                    src={isDark ? LogoWhite : Logo}
                    alt=""
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className="text-center 2xl:mb-10 mb-5">
                <h4 className="font-medium mb-4">Forgot Your Password?</h4>
                <div className="text-slate-500 dark:text-slate-400 text-base">
                  Reset Password with Dashcode.
                </div>
              </div>
              <div className="font-normal text-base text-slate-500 dark:text-slate-400 text-center px-2 bg-slate-100 dark:bg-slate-600 rounded py-3 mb-4 mt-10">
                Enter your Email and instructions will be sent to you!
              </div>
              <ForgotForm />
              <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-8 uppercase text-sm">
                Forget It,
                <div
                  //   to="/"
                  className="text-slate-900 dark:text-white font-medium hover:underline"
                >
                  Send me Back
                </div>
                to The Sign In
              </div>
            </div>
            <div className="auth-footer text-center">
              Copyright 2021, Dashcode All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
