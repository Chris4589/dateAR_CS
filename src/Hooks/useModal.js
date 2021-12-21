import { useCallback, useState } from "react";

export const useModal = (initialState = 'Modal__remove') => {
  const [modalClass, setModalClass] = useState(initialState);

  const addModal = useCallback(
    () => {
      if (modalClass.split(' ').includes('Modal__backgroud')) {
        setModalClass('Modal__remove');
      } else {
        setModalClass('Modal__backgroud');
      }
      /* return modalClass; */
    },
    [modalClass],
  );

  return [
    addModal,
    modalClass, 
  ];
}
