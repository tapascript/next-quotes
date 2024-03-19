"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

import { FaWindowClose } from "react-icons/fa";

const Modal = ({ children }) => {
  const router = useRouter();
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
      <dialog
        ref={modalRef}
        onClose={onHide}
        className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100"
      >
        <span onClick={onHide}
          className="flex justify-end cursor-pointer"><FaWindowClose size={28}/></span>
          {children} 
      </dialog>
    ,
    document.getElementById("modal-root-id")
  );
};

export default Modal;
