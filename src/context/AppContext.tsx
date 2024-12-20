import { useContext, createContext, useState, useEffect } from "react";

export type AppContextType = {
  message: {
    variant: "error" | "success";
    message: string;
  } | null;

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
      const messageTimer = setTimeout(() => setMessage(null), 4000);
      return clearTimeout(messageTimer);
    }
  }, [message]);

  return (
    <AppContext.Provider
      value={{
        message,
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
