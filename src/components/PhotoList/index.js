import React, { useState } from 'react';
import Modal from '../Modal';

function PhotoList({ category }) {
    // const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie';
    const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
        },
        {
            name: 'Grocery booth',
            category: 'commercial',
        },
        {
            name: 'Building exterior',
            category: 'commercial',
        },
        {
            name: 'Restaurant table',
            category: 'commercial',
        },
        {
            name: 'Cafe interior',
            category: 'commercial',
        },
        {
            name: 'Cat green eyes',
            category: 'portraits',
        },
        {
            name: 'Green parrot',
            category: 'portraits',
        },
        {
            name: 'Yellow macaw',
            category: 'portraits',
        },
        {
            name: 'Pug smile',
            category: 'portraits',
        },
        {
            name: 'Pancakes',
            category: 'food',
        },
        {
            name: 'Burrito',
            category: 'food',
        },
        {
            name: 'Scallop pasta',
            category: 'food',
        },
        {
            name: 'Burger',
            category: 'food',
        },
        {
            name: 'Fruit bowl',
            category: 'food',
        },
        {
            name: 'Green river',
            category: 'landscape',
        },
        {
            name: 'Docks',
            category: 'landscape',
        },
        {
            name: 'Panoramic village by sea',
            category: 'landscape',
        },
        {
            name: 'Domestic landscape',
            category: 'landscape',
        },
        {
            name: 'Park bench',
            category: 'landscape',
        },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);
    const [currentPhoto, setCurrentPhoto] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            {isModalOpen && (
                <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
            )}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        onClick={() => toggleModal(image, i)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoList;