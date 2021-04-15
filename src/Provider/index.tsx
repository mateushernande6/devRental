import { ReactNode } from "react";
import { AuthDashboardProvider } from "./AuthDashboard";
import { DataMapProvider } from "./DataMap";
import { DataUserProvider } from "./DataUser";

interface IChildrenContext {
  children: ReactNode;
}

export const Providers = ({ children }: IChildrenContext) => {
  return (
    <AuthDashboardProvider>
      <DataUserProvider>
        <DataMapProvider>{children}</DataMapProvider>
      </DataUserProvider>
    </AuthDashboardProvider>
  );
};
