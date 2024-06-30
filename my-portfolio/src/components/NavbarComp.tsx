import { FaRegPaperPlane } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";
import { GB, IT } from "country-flag-icons/react/1x1";
import { useState } from "react";

// To Do: plane and name animation and open menu animation

export default function NavbarComp() {
    const [useMenu, setUseMenu] = useState<boolean>(false)

  return (
    <>
        <nav className="select-none flex justify-between px-3 py-4 opacity-90 bg-primary">
            <div className="flex gap-3 items-center">
                <FaRegPaperPlane />
                <Link to='/' className="font-semibold text-xl">Vincenzo Saccone</Link>
            </div>
            <div className="hidden md:flex gap-3 items-center">
                <p className="cursor-pointer">About me</p>
                <p className="cursor-pointer">Skills</p>
                <p className="cursor-pointer">Projects</p>
                <Link to='/getintouch' className="bg-black hover:bg-gray-800 text-white rounded-lg p-1">Get in touch!</Link>
                <IT title="Italy" className="size-5" />
                <GB title="Great Britain" className="size-5" />
            </div>
            {!useMenu ? (
            <GrMenu onClick={() => setUseMenu(!useMenu)} className="block md:hidden cursor-pointer size-5"/> 
            ) : (
                <IoClose onClick={() => setUseMenu(!useMenu)} className="block md:hidden cursor-pointer size-5" />
            )}
            
        </nav>

        {useMenu && (
            <div className="bg-primary opacity-90 md:hidden flex flex-col gap-3 items-center pb-3">
                <p className="cursor-pointer">About me</p>
                <p className="cursor-pointer">Skills</p>
                <p className="cursor-pointer">Projects</p>
                <Link to='/getintouch' className="bg-black hover:bg-gray-800 text-white rounded-lg p-1">Get in touch!</Link>
                <div className="flex gap-3">
                    <IT title="Italy" className="size-5" />
                    <GB title="Great Britain" className="size-5" />
                </div>
            </div>
        )}

    </>
  )
}
