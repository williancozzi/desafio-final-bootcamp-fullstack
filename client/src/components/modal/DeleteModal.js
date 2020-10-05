import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import axios from "axios";

const api = axios.create({ baseURL: "api" });

const handleDeleteButton = async (_id) => {
  console.log("deleting ", _id);
  await api.delete(`/transaction/delete/${_id}`);
  window.location.reload();
};

const DeleteModal = ({ isShowing, hide, id }) => {

  if (isShowing) {
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className="modal-overlay" />
        <div
          className="modal-wrapper"
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal">
            <div className="modal-header">
              <button
                type="button"
                className="modal-close-button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <p>Deseja deletar essa transação?</p>
            <button
              style={{ marginRight: 20 }}
              onClick={(event) => handleDeleteButton(id)}
            >
              Sim
            </button>
            <button>Não</button>
          </div>
        </div>
      </React.Fragment>,
      document.body
    );
  } else {
    return null;
  }
};

export default DeleteModal;
