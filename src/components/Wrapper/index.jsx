import './index.css';
import { useState } from "react";
import { fetchAnimalData } from "../../api/animalApi";
import SearchBar from "../SearchBar";
import AnimalModal from "../AnimalModal";

const Wrapper = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [animalData, setAnimalData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    const handleSearch = async () => {
        setIsLoading(true)
        try {
            const data = await fetchAnimalData(searchTerm);
            if (data.length === 0) {
                setAnimalData("No results found");
            } else {
                setAnimalData(data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClick = (animal) => {
        setSelectedAnimal(animal);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.length !== 0) {
            handleSearch();
        }

    };

    return (

        <div className="text-gray-50 flex flex-col justify-center items-center">
            <SearchBar
                handleSubmit={handleSubmit}
                searchTerm={searchTerm}
                handleSearchTermChange={handleSearchTermChange}
            />


            {isLoading ?
                <div className="loading-bar place-self-center"></div> :
                <ul className='my-24 grid grid-cols-4'>
                    {typeof animalData === "string" ?
                        <p>{animalData}</p> : !selectedAnimal &&
                        animalData.map((animal, index) => (
                            <li key={index} onClick={() => handleClick(animal)}
                                className='bg-zinc-700 flex flex-col justify-center items-center
                                rounded-xl w-96 h-96 m-4
                                hover:bg-zinc-600 hover:scale-105 transition duration-100 cursor-pointer
                                '
                            >
                                <p>{animal.name}</p>
                            </li>
                        ))
                    }
                </ul>}
            {selectedAnimal &&
                <AnimalModal animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
            }
        </div>
    );
};

export default Wrapper;
