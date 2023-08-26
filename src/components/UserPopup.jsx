/* eslint-disable react/prop-types */
import Modal from "react-modal";

export const UserPopup = ({ userModal, closeModal }) => {
  return (
    <div>
      <Modal isOpen={userModal} onRequestClose={closeModal} className="Modal" ariaHideApp={false}>
        <h1 className="w-full text-2xl font-bold text-center">Sign In</h1>
        <button className="w-[80%] border border-primary text-left rounded-lg py-2 px-4 hover:bg-primary hover:text-white" onClick={closeModal}>
          <i className="fi fi-rr-mailbox"></i>
          <span className="ml-4 font-semibold ">Sign in with Google</span>
        </button>
      </Modal>
    </div>
  );
};
