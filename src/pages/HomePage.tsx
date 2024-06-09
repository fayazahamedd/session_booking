import studentsImg from "../assets/students.jpg";
import listImg from "../assets/list.jpg";
import certificateImg from "../assets/certificate.jpg";

const data = [
  {
    image: studentsImg,
    title: "What we do",
    summary:
      "ReactMentoring is a platform for React developers to find mentors who can help them with their React-related questions and problems. We are a community of React developers who want to help each other succeed.",
  },

  {
    image: listImg,
    title: "What we offer",
    summary:
      "We offer a variety of mentoring sessions, from one-on-one mentoring to group mentoring sessions. Browse our available sessions to find the one that best fits your needs",
  },
  {
    image: certificateImg,
    title: "What you get",
    summary:
      "No matter if you are a beginner or an experienced React developer, we are here to help you level up your React skills.",
  },
];

type dataProps = {
  image: string;
  title: string;
  summary: string;
};

const HomePage = () => {
  return (
    <div className="flex flex-col  px-4 w-[80%] ml-[10%] bg-red-50 rounded-md justify-center mb-2 pb-3">
      <h1 className="text-2xl text-red-800 font-extrabold text-center">
        Our Mission: Your Success
      </h1>
      {data.map((item: dataProps, index: number) => (
        <div
          className="mt-2 flex flex-row justify-center bg-red-100 py-2 rounded-lg"
          key={index}
        >
          <img
            src={item.image}
            className="h-40 w-40 border-amber-300 border-2 rounded-full border-opacity50 p-1"
            alt="student"
          />
          <div className="felx flex-col ml-6 mt-7 w-[70%]">
            <p className="text-yellow-800 font-bold">{item.title}</p>
            <p className="align-middle">{item.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
