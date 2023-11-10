import Image from "next/image";
import Link from "next/link";

import LogoWhite from "../../assets/images/logo/logo-white.svg";
import Logo from "../../assets/images/logo/logo.svg";

type AuthMobileBannerProps = {
  isDark: boolean;
};

const AuthMobileBanner = ({ isDark }: AuthMobileBannerProps) => (
  <div className="mobile-logo text-center mb-6 lg:hidden block">
    <Link href="/">
      <Image src={isDark ? LogoWhite : Logo} alt="" className="mx-auto" />
    </Link>
  </div>
);

export default AuthMobileBanner;
