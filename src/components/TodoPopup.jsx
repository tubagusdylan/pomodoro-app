/* eslint-disable react/prop-types */
import Modal from "react-modal";

export const TodoPopup = ({ openPopup, handleClosePopup, handleDeleteTodo, currentActivity, handleUpdateTodo, handleNewTodo }) => {
  return (
    <div>
      <Modal isOpen={openPopup} onRequestClose={handleClosePopup} className="Modal" ariaHideApp={false}>
        <i className="fi fi-rr-x absolute text-xl right-0 -top-14 p-3 cursor-pointer text-primary hover:bg-slate-100" onClick={handleClosePopup}></i>
        <input type="text" className="bg-slate-100 w-full mx-10 outline-none px-3 py-2 rounded-sm text-primary tracking-wider" value={currentActivity} onChange={handleNewTodo} />
        <button className="w-[40%] border-2 border-primary rounded-sm mr-3 py-1 text-primary" onClick={handleUpdateTodo}>
          Update
        </button>
        <button className="w-[40%] bg-primary text-white py-1" onClick={handleDeleteTodo}>
          Delete
        </button>
      </Modal>
    </div>
  );
};
