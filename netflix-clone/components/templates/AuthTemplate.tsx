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
        "relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat"
      }
    >
      <div className={"h-full w-full bg-black lg:bg-opacity-50"}>
        <nav className={"px-12 py-5"}>
          <img src={"/images/logo.png"} alt={"logo"} className={"h-12"} />
        </nav>
        <div className={"flex justify-center"}>
          <div
            className={
              "mt-2 w-full rounded-md bg-black bg-opacity-70 p-16 lg:w-2/5 lg:max-w-md"
            }
          >
            <h2 className={"mb-8 text-4xl font-semibold text-white"}>
              {authType}
            </h2>
            {children}
            <p className={"mt-12 text-neutral-500"}>
              {authType === "Sign in"
                ? "New to Netflix?"
                : "Do you alredy have an account?"}{" "}
              <span className={"cursor-pointer text-white"}>
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
