import { useContext } from "react";
import Modal from "react-modal";
import { SessionContext } from "../store/session-booking";

interface ModalWindowProps {
  modalIsOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onRequestClose: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  modalIsOpen,
  setIsOpen,
  onRequestClose,
}) => {
  const sessionCxt = useContext(SessionContext);

  if (!sessionCxt) {
    return <div>Error: SessionContext is not provided</div>;
  }

  const { upcomingSessions, cancelSession } = sessionCxt;

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

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="font-bold text-3xl text-red-700">
          Your Upcoming Session
        </div>

        {upcomingSessions.length !== 0 ? (
          <>
            {upcomingSessions.map((item) => (
              <div key={item.id} className="bg-red-50 rounded-md my-2 p-1 overflow-y-auto">
                <p className="text-xl font-semibold text-red-800">
                  {item.title}
                </p>
                <p className="text-lg font-medium">{item.summary}</p>
                <p className="text-base font-light">{item.date}</p>
                <button
                  className="bg-gray-500 p-1.5 mt-2 py-[2px] rounded-xl"
                  onClick={() => cancelSession(item.id)}
                >
                  Cancel
                </button>
              </div>
            ))}
          </>
        ) : (
          <div className="mt-4 font-semibold">No upcoming sessions.</div>
        )}

        <div className="flex flex-row justify-end mt-4">
          <button
            type="button"
            className="bg-red-400 rounded-xl font-semibold w-24 mt-2 pb-[2px] mb-2 border-black"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
