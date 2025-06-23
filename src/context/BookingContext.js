import { createContext, useReducer } from 'react';

const initialState = {
  tests: [],
  selectedTests: [],
  appointmentDate: new Date().toISOString().split('T')[0],
  loading: false,
  error: null,
  submitting: false,
  success: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_TESTS':
      return { ...state, tests: action.payload };
    case 'TOGGLE_TEST':
      return {
        ...state,
        selectedTests: state.selectedTests.includes(action.payload)
          ? state.selectedTests.filter(id => id !== action.payload)
          : [...state.selectedTests, action.payload]
      };
    case 'SET_DATE':
      return { ...state, appointmentDate: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_SUBMITTING':
      return { ...state, submitting: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'BOOKING_SUCCESS':
      return { ...state, success: true, selectedTests: [] };
    default:
      return state;
  }
}

export const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
}