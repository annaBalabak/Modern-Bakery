import { useEffect } from "react";

export const useModalEffect = ({
  isOpenCart,
  isPhoneModalOpen,
  isMessageModalOpen,
  showFormSubmitted,
}) => {
  useEffect(() => {
    if (
      isOpenCart ||
      isPhoneModalOpen ||
      isMessageModalOpen ||
      showFormSubmitted
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpenCart, isPhoneModalOpen, isMessageModalOpen, showFormSubmitted]);
};
