import {HTMLAttributes, PropsWithChildren} from "react";

type ModalProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    header?: string;
} & HTMLAttributes<HTMLDialogElement>;
export const Modal = ({isOpen, setIsOpen, header = "Hello!", children}: PropsWithChildren<ModalProps>) => {
    return (
        <dialog id="my_modal_2" className="modal" open={isOpen}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">{header}</h3>
                <div className="py-4">{children}</div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={() => setIsOpen(!isOpen)}>Close</button>
            </form>
        </dialog>
    )
}