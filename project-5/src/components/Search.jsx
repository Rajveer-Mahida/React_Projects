import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import useDisclouse from "../hooks/useDisclouse";
const Search = () => {
  const { isOpen, onClose, onOpen } = useDisclouse();
  
  return (
    <div className='mx-auto my-2 flex min-w-[295px] max-w-[370px] gap-2'>
      <div className='relative flex flex-grow items-center '>
        <FaSearch className='C  absolute pl-2 text-2xl text-white' />
        <input
          type='text'
          name='contact'
          id='contact'
          className='relative  my-1 h-10 flex-grow rounded-lg border border-white  bg-transparent pl-9 text-white'
        />
      </div>
      <AiFillPlusCircle onClick={onOpen} className='cursor-pointer text-5xl text-white' />
    </div>
  );
};

export default Search;
