import { createContext, ReactNode, useState } from "react";

interface IChildrenContext {
  children: ReactNode;
}
interface ITypeState {
  dataUser: string;
  setDataUser: React.Dispatch<React.SetStateAction<string>>;
}

export const DataUser = createContext<ITypeState>({} as ITypeState);

export const DataUserProvider = ({ children }: IChildrenContext) => {
  const [dataUser, setDataUser] = useState<string>("");

  return (
    <DataUser.Provider value={{ dataUser, setDataUser }}>
      {children}
    </DataUser.Provider>
  );
};
