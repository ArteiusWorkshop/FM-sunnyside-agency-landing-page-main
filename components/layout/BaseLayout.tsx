import Head from "next/head";
import React, { FC } from "react";
import { NavBar } from "../UI/Menus/";

interface Props {
  title?: string;
  pageDescription?: string;
  children?: React.ReactNode;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const BaseLayout: FC<Props> = ({
  title = "Frontend Mentor - Sunnyside agency landing page solution",
  pageDescription = "Solution",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content={`${origin}/img/desktop-preview.jpg`}
        />
      </Head>

      <nav>
        <NavBar />
      </nav>
      <main
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {children}
      </main>
    </>
  );
};
