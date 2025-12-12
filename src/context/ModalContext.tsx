import { createContext, useContext, useState } from "react";

interface ModalState {
  name: string | null;
  props: any;
}

interface ModalContextValue {
  modal: ModalState;
  openModal: (name: string, props?: any) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<ModalState>({
    name: null,
    props: {},
  });

  function openModal(name: string, props: any = {}) {
    setModal({ name, props });
  }

  function closeModal() {
    setModal({ name: null, props: {} });
  }

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside <ModalProvider>");
  return ctx;
}
