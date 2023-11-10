import Link from "next/link";
// import { ToastContainer } from "react-toastify";

// import useDarkMode from "@/hooks/useDarkMode";

import SignUpForm from "../components/SignUpForm";
import Social from "../components/Social";
import AuthBanner from "../components/AuthBanner";
import AuthMobileBanner from "../components/AuthMobileBanner";
import AuthFooter from "../components/AuthFooter";

const SignUp = () => {
  //   const [isDark] = useDarkMode();
  const isDark = false;
  return (
    <>
      {/* <ToastContainer /> */}
      <div className="loginwrapper">
        <div className="lg-inner-column">
          <AuthBanner isDark={isDark} />
          <div className="right-column relative bg-white dark:bg-slate-800">
            <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
              <div className="auth-box h-full flex flex-col justify-center">
                <AuthMobileBanner isDark={isDark} />
                <div className="text-center 2xl:mb-10 mb-5">
                  <h4 className="font-medium">Sign up</h4>
                  <div className="text-slate-500 dark:text-slate-400 text-base">
                    Create an account to start using Dashcode
                  </div>
                </div>
                <SignUpForm />
                <div className=" relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6">
                  <div className=" absolute inline-block  bg-white dark:bg-slate-800 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm  text-slate-500  dark:text-slate-400font-normal ">
                    Or continue with
                  </div>
                </div>
                <div className="max-w-[242px] mx-auto mt-8 w-full">
                  <Social />
                </div>
                <div className="max-w-[215px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm">
                  Already registered?{" "}
                  <Link
                    href="/"
                    className="text-slate-900 dark:text-white font-medium hover:underline"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
              <AuthFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
