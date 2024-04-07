const OptionItem = ({ children, active }) => {
    return (
      <button className={`text-black mx-2 hover:text-gray-800 focus:outline-none ${active ? 'bg-[#e3f5ff] font-medium text-[#023178] rounded-full' : ''} px-4 py-2`}>
        {children}
      </button>
    );
  };

  export default OptionItem;