import React from 'react';

function Modal({ onClose, currentPhoto }) {
    const {name, deployedApp, repo, index} = currentPhoto;
    return (
        <div className="modalBackdrop">
          <div className="modalContainer">
            <h3 className="modalTitle">{name}</h3>
            <img src={require(`../../assets/projects/${index}.JPG`).default} alt="current category" />
           
            <button type="button" onClick={onClose}>
                Close this modal
            </button>

            <button type="button" onClick={onClose}>
                {deployedApp}
            </button>

            <button type="button" onClick={onClose}>
                {repo}
            </button>
        </div>
    </div>
    );
}

export default Modal;