import React, { FC } from "react";
import Link from "next/link";
import routes from "@/routes";

interface AuthTemplateProps {
  authType: "Sign in" | "Register";
  children: React.ReactNode;
}

const AuthTemplate: FC<AuthTemplateProps> = ({ authType, children }) => {
  return (
    <div
      className={
        "relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover bg-fixed"
      }
    >
      <div className={"h-full w-full bg-black lg:bg-opacity-50"}>
        <nav className={"px-12 py-5"}>
          <img src={"/images/logo.png"} alt={"logo"} className={"h-12"} />
        </nav>
        <div className={"flex justify-center"}>
          <div
            className={
              "bg-black bg-opacity-70 p-16 mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full"
            }
          >
            <h2 className={"text-white text-4xl mb-8 font-semibold"}>
              {authType}
            </h2>
            {children}
            <p className={"text-neutral-500 mt-12"}>
              {authType === "Sign in"
                ? "New to Netflix?"
                : "Do you alredy have an account?"}{" "}
              <span className={"text-white cursor-pointer"}>
                {authType === "Sign in" ? (
                  <Link href={routes.register}>Sign up now</Link>
                ) : (
                  <Link href={routes.login}>Sign in</Link>
                )}
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;
