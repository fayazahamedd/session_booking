/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useContext } from "react";
import Modal from "react-modal";
import { Props } from "../pages/Sessions";
import { SessionContext } from "../store/session-booking";

interface ModalWindowProps {
  modalIsOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onRequestClose: () => void;
  itemData: Props;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  modalIsOpen,
  setIsOpen,
  onRequestClose,
  itemData,
}) => {
  const sessionCxt = useContext(SessionContext);

  if (!sessionCxt) {
    return <div>Error: SessionContext is not provided</div>;
  }

  const { bookSession } = sessionCxt;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "pink",
    },
  };

  const hanldeSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formElement = event.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);
    Object.fromEntries(formData.entries());
    const sessionData = {
      id: itemData.id,
      title: itemData.title,
      summary: itemData.summary,
      date: itemData.date,
    };
    bookSession(sessionData);
    setIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="font-bold text-3xl text-red-700">Book your Session</div>
        <form onSubmit={hanldeSubmit}>
          <div className="mt-2">
            <p>
              <label className="ml-1 my-1 font-semibold">Enter your name</label>
            </p>
            <input
              type="text"
              id="name"
              name="name"
              className="border w-full rounded-sm mx-1 forced-colors:to-black pointer-events-auto px-1"
            />
          </div>
          <div className="mt-2">
            <p>
              <label className="ml-1 my-1 font-semibold">
                Enter your email address
              </label>
            </p>
            <input
              type="text"
              name="email"
              id="email"
              className="border w-full rounded-sm mx-1 px-1"
            />
          </div>
          <div className="flex flex-row justify-between mt-2">
            <button
              type="button"
              className="bg-red-200 rounded-xl font-semibold w-24 mt-2 pb-[2px] mb-2 border-black"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-red-400 rounded-xl font-semibold w-24 mt-2 b-[2px] mb-2"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ModalWindow;
