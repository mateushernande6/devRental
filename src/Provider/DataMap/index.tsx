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
}

interface IcontextData {
  itemMap: IdataState[];
  setItemMap: React.Dispatch<React.SetStateAction<IdataState[]>>;
}

export const DataMapContext = createContext<IcontextData>({} as IcontextData);

export const DataMapProvider = ({ children }: IdataChildren) => {
  const [itemMap, setItemMap] = useState<IdataState[]>([]);

  return (
    <DataMapContext.Provider value={{ itemMap, setItemMap }}>
      {children}
    </DataMapContext.Provider>
  );
};
