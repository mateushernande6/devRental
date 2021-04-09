import { ReactNode } from "react";
import { AuthDashboardProvider } from "./AuthDashboard";

interface IChildrenContext {
  children: ReactNode;
}

export const Providers = ({ children }: IChildrenContext) => {
  return <AuthDashboardProvider>{children}</AuthDashboardProvider>;
};
