import { FC, ReactNode, useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import { AiFillCloseCircle } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div>
      <>
        {/*Overlay*/}
        {isOpen && <div className={"fixed inset-0 z-50 bg-black opacity-50"} />}

        {/* Modal content */}
        <div ref={parent}>
          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="relative w-1/2 rounded-lg bg-zinc-900">
                <AiFillCloseCircle
                  className={
                    "absolute right-4 top-4 z-50 cursor-pointer text-white hover:opacity-70"
                  }
                  size={40}
                  onClick={onClose}
                />
                {children}
              </div>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default Modal;
