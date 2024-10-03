"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const AuthQuery = new QueryClient();

function AuthProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={AuthQuery}>{children}</QueryClientProvider>
  );
}

export default AuthProvider;
