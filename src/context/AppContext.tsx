import { useContext, createContext, useState, useEffect } from "react";

export type AppContextType = {
  message: {
    variant: "error" | "success";
    message: string;
  } | null;
  setMessage: React.Dispatch<
    React.SetStateAction<{
      variant: "error" | "success";
      message: string;
    } | null>
  >;
  setModal: React.Dispatch<React.SetStateAction<string>>;
  modal: string;
  handleCloseModal: () => void;
};

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState("");

  const [message, setMessage] = useState<{
    variant: "error" | "success";
    message: string;
  } | null>(null);

  const handleCloseModal = () => setModal("");

  useEffect(() => {
    if (message != null) {
      setTimeout(() => setMessage(null), 8000);
    }
  }, [message]);

  return (
    <AppContext.Provider
      value={{
        setMessage,
        message,
        setModal,
        modal,
        handleCloseModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext) as AppContextType;
