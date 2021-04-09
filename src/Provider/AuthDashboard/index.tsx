import { createContext, ReactNode, useState } from "react";

interface IChildrenContext {
  children: ReactNode;
}

// interface IItemsArray {
//   category: string;
// }

interface ITypeState {
  valueState: string;
  setValueState: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthDashboardContext = createContext<ITypeState>({} as ITypeState);

export const AuthDashboardProvider = ({ children }: IChildrenContext) => {
  const [valueState, setValueState] = useState<string>("");

  return (
    <AuthDashboardContext.Provider value={{ valueState, setValueState }}>
      {children}
    </AuthDashboardContext.Provider>
  );
};
