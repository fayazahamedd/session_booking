import { createContext, useReducer, ReactNode, FC } from "react";

export type Session = {
  id: string;
  title: string;
  summary: string;
  date: string;
};

type SessionState = {
  upcomingSessions: Session[];
};

type Action =
  | { type: "BOOK_SESSION"; payload: Session }
  | { type: "CANCEL_SESSION"; payload: string };

const initialState: SessionState = {
  upcomingSessions: [],
};

const sessionReducer = (state: SessionState, action: Action): SessionState => {
  switch (action.type) {
    case "BOOK_SESSION":
      if (
        !state.upcomingSessions.some((item) => item.id === action.payload.id)
      ) {
        return {
          ...state,
          upcomingSessions: [...state.upcomingSessions, action.payload],
        };
      }
      alert(action.payload.title + " -> already booked");
      return state;
    case "CANCEL_SESSION":
      return {
        ...state,
        upcomingSessions: state.upcomingSessions.filter(
          (session) => session.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

type SessionContextValue = {
  upcomingSessions: Session[];
  bookSession: (session: Session) => void;
  cancelSession: (sessionId: string) => void;
};

export const SessionContext = createContext<SessionContextValue | null>(null);

type SessionProviderProps = {
  children: ReactNode;
};

export const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(sessionReducer, initialState);

  const bookSession = (session: Session) => {
    dispatch({ type: "BOOK_SESSION", payload: session });
  };

  const cancelSession = (sessionId: string) => {
    dispatch({ type: "CANCEL_SESSION", payload: sessionId });
  };

  const contextValue: SessionContextValue = {
    upcomingSessions: state.upcomingSessions,
    bookSession,
    cancelSession,
  };

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};
