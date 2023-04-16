import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ handleSubmit, searchTerm, handleSearchTermChange }) => {
    return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center mt-24">
            <input
            className="h-20 text-3xl bg-gray-200 text-gray-700 border-2 border-gray-300 rounded-l-xl py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
            <button type="submit" className="flex justify-center items-center h-20 text-3xl bg-zinc-700 text-gray-700 rounded-r-xl leading-tight active:outline-none active:bg-zinc-700 active:scale-105 active:translate-x-1 transition duration-100">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'lightgrey' }} className='h-12 rotate-90 p-4'/>
            </button>
        </form>
    );
};

export default SearchBar;
