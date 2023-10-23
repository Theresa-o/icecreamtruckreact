import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left justify-items-end py-4 px-6 bg-white shadow sm:items-baseline w-full">
    //   <div className="">
    //     <Link
    //       to="/"
    //       className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
    //     >
    //       Shop
    //     </Link>
    //   </div>
    // </nav>
    <div>
      <div className="font-sans flex flex-col text-center sm:flex-row sm:text-left justify-items-end py-4 px-6 bg-white shadow">
        <Link
          to="/"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Shop
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
