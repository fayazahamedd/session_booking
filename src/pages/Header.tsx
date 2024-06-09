import { NavLink } from "react-router-dom";
import ModalWindow from "../components/ModalUpcomingSession";
import { useState } from "react";

const Header = () => {
  const showUpcomingSessions = () => {
    openModal();
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="flx flex-row mt-2 w-[80%] ml-[10%]">
      <nav className="">
        <ul className="flex justify-between py-2">
          <h1 className="font-extrabold text-xl text-red-600">
            React Mentoring
          </h1>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "underline text-red-900 text-xl font-semibold shadow-2xl"
                  : "text-xl hover:underline"
              }
              end
            >
              Our Mission
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sessions"
              className={({ isActive }) =>
                isActive
                  ? "underline text-red-900 text-xl font-semibold shadow-2xl"
                  : "text-xl hover:underline"
              }
            >
              Browse Sessions
            </NavLink>
          </li>
          <li>
            <button
              className="bg-red-400 px-2 py-1 rounded-xl font-semibold"
              onClick={showUpcomingSessions}
            >
              Upcoming Sessions
            </button>
          </li>
        </ul>
      </nav>

      <div className="overflow-x-auto whitespace-nowrap w-full h-full">
        {modalIsOpen && (
          <ModalWindow
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            onRequestClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
