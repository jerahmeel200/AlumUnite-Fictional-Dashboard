import { useEffect } from "react";
import { mockData } from "../data/mockUsers";

/**
 * Custom React hook to load mock user data into local storage.
 * Ensures data is only loaded once, on initial render.
 */
function useLoadMockData() {
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(mockData()));
    }
  }, []);
}

export default useLoadMockData;
