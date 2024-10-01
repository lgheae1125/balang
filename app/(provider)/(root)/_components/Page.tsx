import React, { PropsWithChildren } from "react";

function Page({ children }: PropsWithChildren) {
  return (
    <main className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch">
      {children}
    </main>
  );
}

export default Page;
