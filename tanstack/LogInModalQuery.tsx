import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const LogInModalQuery = new QueryClient();

function LogInModalQueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={LogInModalQuery}>
      {children}
    </QueryClientProvider>
  );
}
