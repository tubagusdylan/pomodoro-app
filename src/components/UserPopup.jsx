/* eslint-disable react/prop-types */
import Modal from "react-modal";
import googleIcon from "../assets/google.svg";

export const UserPopup = ({ userModal, closeModal, signin }) => {
  return (
    <div>
      <Modal isOpen={userModal} onRequestClose={closeModal} className="Modal" ariaHideApp={false}>
        <i className="fi fi-rr-x absolute text-xl cursor-pointer p-3 text-primary top-0 right-0 hover:bg-slate-200" onClick={closeModal}></i>
        <h1 className="w-full text-2xl font-bold text-center">Sign In</h1>
        <button className="w-[80%] border border-primary text-left rounded-lg py-2 px-4 hover:bg-primary hover:bg-opacity-50 hover:text-white flex items-center" onClick={signin}>
          <img src={googleIcon} alt="google" width={30} />
          <span className="ml-4 font-semibold ">Sign in with Google</span>
        </button>
      </Modal>
    </div>
  );
};
