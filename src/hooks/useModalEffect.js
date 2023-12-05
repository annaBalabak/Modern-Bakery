import { useEffect } from "react";

export const useModalEffect = ({
  isOpenCart,
  isPhoneModalOpen,
  isMessageModalOpen,
}) => {
  useEffect(() => {
    if (isOpenCart || isPhoneModalOpen || isMessageModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpenCart, isPhoneModalOpen, isMessageModalOpen]);
};
