import Image from "next/image";
import Link from "next/link";

import LogoWhite from "../../assets/images/logo/logo-white.svg";
import Logo from "../../assets/images/logo/logo.svg";
import Illustration from "../../assets/images/auth/ils1.svg";

type AuthBannerProps = {
  isDark: boolean;
};

const AuthBanner = ({ isDark }: AuthBannerProps) => (
  <div className="left-column relative z-[1]">
    <div className="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20">
      <Link href="/">
        <Image src={isDark ? LogoWhite : Logo} alt="" className="mb-10" />
      </Link>
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
);

export default AuthBanner;
