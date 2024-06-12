import { useEffect } from "react";

const useKeyDownEventHandler = (handleKeyPress) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
};

export default useKeyDownEventHandler;
