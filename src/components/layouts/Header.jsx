import { useContext, useState } from "react";
import { ThreadContext } from "../../context/context";

import { TbSearch } from "react-icons/tb";
import { TbX } from "react-icons/tb";

const Header = () => {
  const { searchValue, setSearchValue } = useContext(ThreadContext);
  const [searchbar, setSearchbar] = useState(false);

  const handleSearchbar = () => {
    setSearchbar(!searchbar);
  };

  const onClear = () => {
    setSearchValue("");
  };

  const onSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className="p-3 flex justify-between mx-auto bg-[#262522] align-middle text-center">
      {!searchbar ? (
        <div className="flex mx-4 justify-between w-[100%]">
          <h1 className="text-xl text-white font-bold">Hacker News</h1>
          <div className="hidden rounded-full bg-[#2C2B2A] lg:grid grid-cols-[auto,1fr,auto]">
            <div className="px-2 flex align-middle items-center">
              <TbSearch size={20} className="align-middle text-[#8C8C8C]" />
            </div>
            <input
              className="bg-[#2C2B2A] text-xl text-[#8C8C8C] focus:outline-none placeholder:text-[#8C8C8C]"
              value={searchValue}
              onChange={onSearchInput}
              type="text"
              placeholder="Search"
              autoComplete="off"
            />
            <div className="px-2 flex align-middle items-center text-[#8C8C8C]">
              <button onClick={onClear}>
                <TbX size={20} />
              </button>
            </div>
          </div>

          <div className="flex gap-2 p-0 m-0 lg:hidden">
            <button
              onClick={() => {
                handleSearchbar();
              }}
            >
              <TbSearch size={20} className="align-middle text-white" />
            </button>
            {/* <Button
              onClick={() => {
                // hello
              }}
              name="SUBMIT"
            /> */}
          </div>
        </div>
      ) : (
        // mobile navbar
        <div className="flex w-[100%] gap-4">
          <div className="w-[100%] rounded-full bg-[#2C2B2A] grid grid-cols-[auto,1fr,auto]">
            <div className="px-2 flex align-middle items-center">
              <TbSearch size={20} className="align-middle text-[#8C8C8C]" />
            </div>
            <input
              className="bg-[#2C2B2A] text-xl text-[#8C8C8C] focus:outline-none placeholder:text-[#8C8C8C]"
              value={searchValue}
              onChange={onSearchInput}
              type="text"
              placeholder="Search"
              autoComplete="off"
            />
            <div className="px-2 flex align-middle items-center text-[#8C8C8C]">
              <button onClick={onClear}>
                <TbX size={20} />
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              handleSearchbar();
            }}
            className="text-white font-semibold"
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
