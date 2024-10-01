import React, { PropsWithChildren } from "react";
import Header from "./_components/Header";

function HomePageLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
}

export default HomePageLayout;
