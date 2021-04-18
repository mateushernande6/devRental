import { createContext, useState, ReactNode } from "react";

interface IdataChildren {
  children: ReactNode;
}

interface IdataState {
  title: string;
  objective: string;
  description: string;
  tecnology: string[];
  reward: string;
  deadline?: string;
  id: number;
  buttonBotton: string;
  buttonTop: string;
  buttonExcluir: string;
  users: string[];
  acceptedId: number;
  workDeadline: any;
}

interface IcontextData {
  itemMap: IdataState[];
  setItemMap: React.Dispatch<React.SetStateAction<IdataState[]>>;
  currentWindow: string;
  setCurrentWindow: React.Dispatch<React.SetStateAction<string>>;
  currentJob: any;
  setCurrentJob: any;
  dataAcceptedContext: any;
  setDataAcceptedContext: any;
  portfolioJob: any;
  setPortfolioJob: any;
}

export const DataMapContext = createContext<IcontextData>({} as IcontextData);

export const DataMapProvider = ({ children }: IdataChildren) => {
  const [itemMap, setItemMap] = useState<IdataState[]>([]);
  const [currentWindow, setCurrentWindow] = useState<string>("Desafios");
  const [currentJob, setCurrentJob] = useState<any>({});

  const [portfolioJob, setPortfolioJob] = useState<any>({});

  const [dataAcceptedContext, setDataAcceptedContext] = useState<any>();

  return (
    <DataMapContext.Provider
      value={{
        itemMap,
        setItemMap,
        currentWindow,
        setCurrentWindow,
        currentJob,
        setCurrentJob,
        dataAcceptedContext,
        setDataAcceptedContext,
        portfolioJob,
        setPortfolioJob,
      }}
    >
      {children}
    </DataMapContext.Provider>
  );
};
