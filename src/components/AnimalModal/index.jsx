const AnimalModal = ({ animal, onClose }) => {
    return (
        <div>
            <p>{animal.name}</p>
            <p>{animal.description}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default AnimalModal;