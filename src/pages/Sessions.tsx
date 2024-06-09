import { useNavigate } from "react-router-dom";
import { SESSIONS } from "../dummy-data";

export type Props = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string; 
};

const Sessions = () => {
  const navigate = useNavigate();

  const handleSession = (item: Props) => {
    navigate(`/sessions/${item.id}`, {
      state: {
        item: item,
      },
    });
  };

  return (
    <div className="flex flex-col w-[80%] ml-[10%] bg-red-50 rounded-md justify-center ">
      <h1 className="text-2xl text-red-800 font-extrabold text-center my-2 ml-1">
        Available mentoring sessions
      </h1>
      <p className="first-letter:text-red-800 pl-2 my-2 text-center">
        From an one-on-one introduction to React's basics all the way up to a
        deep dive into state mechanics - we got just the right session for you!
      </p>
      <br />
      <div className="flex flex-wrap justify-between mx-4">
        {SESSIONS.map((item) => (
          <div
            className="flex flex-col w-[47%] justify-center mb-6 border p-2 bg-red-100 rounded-r-xl shadow-green-100 shadow-xl"
            key={item.id}
          >
            <div className="flex justify-center w-full mt-2">
              <img
                src={item.image}
                alt={item.title}
                className="h-[12rem] w-fit"
              />
            </div>
            <p className="text-center text-red-900">{item.title}</p>
            <p className="text-center text-black">{item.summary}</p>

            <button
              className="bg-red-400 rounded-xl font-semibold w-36 mt-2 ml-auto mr-2 pb-[2px] mb-2"
              onClick={() => handleSession(item)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sessions;
