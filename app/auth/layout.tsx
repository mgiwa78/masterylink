import Link from "next/link";
import React from "react";

type Props = {};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <div className="tu-main-login">
        <div className="tu-login-left">
          <strong>
            <Link href="/">
              <img src="/images/login/logo_white.png" alt="images" />
            </Link>
          </strong>
          <figure>
            <img src="/images/login/img-01.png" alt="images" />
          </figure>
          <div className="tu-login-left_title">
            <h2>Yes! we’re making progress</h2>
            <span>every minute & every second</span>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default layout;
