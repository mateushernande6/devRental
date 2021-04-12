import { ReactNode } from "react";
import { AuthDashboardProvider } from "./AuthDashboard";
import { DataMapProvider } from "./DataMap";

interface IChildrenContext {
  children: ReactNode;
}

export const Providers = ({ children }: IChildrenContext) => {
  return (
    <AuthDashboardProvider>
      <DataMapProvider>{children}</DataMapProvider>
    </AuthDashboardProvider>
  );
};
