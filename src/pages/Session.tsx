import { useLocation } from "react-router-dom";
import { useState } from "react";
import ModalWindow from "../components/ModalBookingSession";

const Session = () => {
  const location = useLocation();

  const { title, summary, description, date, image } = location.state.item;

  const handleBookSession = () => {
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
    <div className="flex flex-col border w-[80%] ml-[10%] rounded-md">
      <div className="flex flex-row bg-red-50 m-2">
        <div className="flex flex-row justify-between">
          <img src={image} alt={title} className="h-[300px] w-fit" />
          <div className="flex flex-col ml-6">
            <h2 className="text-3xl mt-6 font-bold text-yellow-800">{title}</h2>
            <p className="text-xl font-semibold mt-3">{date}</p>

            <button
              className="bg-red-400 px-2 py-1 w-36 mt-4 rounded-xl font-semibold"
              onClick={() => handleBookSession()}
            >
              Book Sessions
            </button>
          </div>
        </div>
      </div>

      <div className="m-2">
        <p className="text-lg font-serif font-bold">{summary}</p>
        <p className="text-lg font-serif font-normal italic">{description}</p>
      </div>

      {modalIsOpen && (
        <ModalWindow
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          onRequestClose={closeModal}
          itemData = {location.state.item}
        />
      )}
    </div>
  );
};

export default Session;
