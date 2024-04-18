import { useCallback, useContext, useState } from "react";
import { BsBag } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import NavbarOverlay from "../../component/NavbarOverlay";

const Navbar = () => {
  const { user, loading } = useContext(AuthContext);

  const [toggleOpen, setToggleOpen] = useState(false);

  const handleToggle = useCallback(() => {
    if (window.innerWidth > 1023) {
      return;
    }

    setToggleOpen(!toggleOpen);
    document.body.classList.toggle("lock-scroll");
  }, [toggleOpen]);

  return (
    <header className="w-full h-20 flex items-center justify-between text-white bg-black px-5">
      <div className="logo">
        <Link href="/" className="text-2xl font-semibold logo">
          Mazzak Nuts.
        </Link>
      </div>
      <nav onClick={handleToggle} className="nav-links">
        <ul
          className={`${
            toggleOpen ? "flexColMod" : "hidden lg:flex gap-5 uppercase"
          }`}
        >
          <li>
            <Link to="/" className="linear-walkaways">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="linear-walkaways">
              Shop
            </Link>
          </li>
          {/* <li>
            <Link href="/products/men" className="linear-walkaways">
              Men
            </Link>
          </li>
          <li>
            <Link href="/products/women" className="linear-walkaways">
              Women
            </Link>
          </li> */}
          {/* {session && (
            <li>
              <Link href="/orders" className="linear-walkaways">
                Orders
              </Link>
            </li>
          )} */}
          <li>
            <Link to="/about" className="linear-walkaways">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="linear-walkaways">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="nav-links-right flex gap-5">
        {loading ? (
          <NavbarOverlay />
        ) : !user ? (
          <Link to="/login" className="uppercase linear-walkaways">
            Sign in
          </Link>
        ) : (
          <Link to="/profile" className="uppercase linear-walkaways">
            Profile
          </Link>
        )}

        <Link href="/cart" className="relative">
          <span>
            <BsBag />
          </span>
          <span className="counting-bubble">2</span>
        </Link>

        <span className="z-[3]">
          <FiMenu
            onClick={handleToggle}
            className={`${
              !toggleOpen ? "block" : "hidden"
            } text-2xl lg:hidden cursor-pointer`}
          />
          <AiOutlineClose
            onClick={handleToggle}
            className={`${
              toggleOpen ? "block" : "hidden"
            } text-2xl lg:hidden cursor-pointer`}
          />
        </span>
      </div>
    </header>
  );
};

export default Navbar;
