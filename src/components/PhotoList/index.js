import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [photos] = useState([
    {
      name: 'Boot Camp Blues',
      deployedApp: 'https://evening-cliffs-89328.herokuapp.com/',
      repo: 'https://github.com/cclund444/bootcampblues.git',
    },
    {
        name: 'The Tech Blog',
        deployedApp: 'https://stormy-sands-18757.herokuapp.com/',
        repo: 'https://github.com/Jaron15/tech-blog.git',
    },
    {
        name: 'Budget Tracker',
        deployedApp: 'https://stormy-sands-18757.herokuapp.com/',
        repo: 'https://github.com/Jaron15/budget-tracker.git',
    },
    {
        name: 'Note Taker',
        deployedApp: 'https://note-takr-1.herokuapp.com/',
        repo: 'https://github.com/Jaron15/note-taker.git',
    },
    
  ]);

  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i})
    setIsModalOpen(!isModalOpen);
  }


  return (
    <div>
        {isModalOpen && (<Modal currentPhoto={currentPhoto} onClose={toggleModal} />)}
      <div className="flex-row">
        {photos.map((image, i) => (
          <img
            src={require(`../../assets/projects/${i}.JPG`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
            deployedApp={image.deployedApp}
            repo={image.repo}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
