import { FC, useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
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
              <div className="w-1/2 rounded-lg bg-white p-6">
                {/* Modal content */}
                <h2 className="mb-4 text-xl font-bold">Modal Title</h2>
                <p className="mb-4">Modal content goes here.</p>
                <button
                  className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                  onClick={onClose}
                >
                  Close Modal
                </button>
              </div>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default Modal;
