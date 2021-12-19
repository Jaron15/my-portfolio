import React from 'react';

function Modal({ onClose, currentPhoto }) {
    const {name, deployedApp, repo, index} = currentPhoto;
    return (
        <div className="modalBackdrop">
          <div className="modalContainer">
            <h3 className="modalTitle">{name}</h3>
            <img src={require(`../../assets/projects/${index}.JPG`)} alt="current category" className="modalPic" />
        
            <button type="button" onClick={onClose} className="modal-buttons">
                Close this modal
            </button>

            <a href={deployedApp} className="modal-buttons link">
                Visit deployed application
            </a>

            <a href={repo} className="modal-buttons link">
                Visit Github repository
            </a>
        </div>
    </div>
    );
}

export default Modal;