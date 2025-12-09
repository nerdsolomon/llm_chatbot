import { MdMenu } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

const Offcanvas = () => {
  const [isClicked, setClicked] = useState(false);
  const offcanvasRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (offcanvasRef.current && !offcanvasRef.current.contains(event.target)) setClicked(false);
    };

    if (isClicked) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isClicked]);

  return (
    <>
      <button onClick={() => setClicked(!isClicked)} className="lg:hidden text-xl cursor-pointer p-2 transition rounded-lg hover:bg-gray-100" >
        <MdMenu />
      </button>

      <aside
        ref={offcanvasRef}
        className={`
          bg-gray-100 font-semibold overflow-y-auto scrollbar-hide scrollbar-thumb-LightSeaGreen-500 transition-transform duration-300 ease-in-out
          w-[300px] h-screen fixed top-[50px] right-0 z-40
          ${isClicked ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
      >
        <Link to="/" onClick={() => setClicked(false)} className="block p-3 hover:bg-gray-200">Home</Link>
      </aside>
    </>
  );
};

export default Offcanvas;
