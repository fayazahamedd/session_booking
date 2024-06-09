import { Outlet } from "react-router-dom";
import Header from "./Header";
import { SessionProvider } from "../store/session-booking";

const Root = () => {
  return (
    <>
      <SessionProvider>
        <Header />
        <Outlet />
      </SessionProvider>
    </>
  );
};

export default Root;
