import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";

const Search = ({onOpen,isOpen,isClose}) => {
  
  return (
    <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
            <FaSearch className="absolute ml-1 text-3xl text-white" />
            <input
              // onChange={filterContacts}
              type="text"
              className=" h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
            />
          </div>

          <AiFillPlusCircle
            onClick={onOpen}
            className="cursor-pointer text-5xl text-white"
          />
        </div>
  );
};

export default Search;
