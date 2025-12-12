import { useModal } from "@/context/ModalContext";
import ModalRevenue from "../modal/RevenueModal";

export function GlobalModal() {
  const { modal, closeModal } = useModal();

  if (!modal.name) return null;

  // Você pode registrar vários modais aqui:
  const modalMap: Record<string, React.JSX.Element> = {
    revenue: <ModalRevenue {...modal.props} onClose={closeModal} />,
  };

  return modalMap[modal.name] || null;
}
