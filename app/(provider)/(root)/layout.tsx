import React, { PropsWithChildren } from "react";
import Header from "./_components/Header";
import AuthProvider from "@/tanstack/LogInModalQuery";

function HomePageLayout({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <div>
        <Header></Header>
        {children}
      </div>
    </AuthProvider>
  );
}

export default HomePageLayout;
