import {createContext, ReactNode, useEffect, useState} from "react";

interface IChildrenContext {
  children: ReactNode;
}
interface ITypeState {
  valueState: string;
  setValueState: React.Dispatch<React.SetStateAction<string>>;
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthDashboardContext = createContext<ITypeState>({} as ITypeState);

export const AuthDashboardProvider = ({ children }: IChildrenContext) => {

  const [valueState, setValueState] = useState<string>("");
  const [isAuth, setIsAuth] = useState<boolean>(false)

  useEffect(()=>{
    const token = localStorage.getItem('token')

    if (token){
      return setIsAuth(true)
    }
  },[])

  return (
    <AuthDashboardContext.Provider value={{isAuth, setIsAuth, valueState, setValueState }}>
      {children}
    </AuthDashboardContext.Provider>
  );
};
