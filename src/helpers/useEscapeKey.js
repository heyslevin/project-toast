import React, { useEffect } from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleEsc(event) {
      if (event.key === "Escape") {
        callback();
      }
    }
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [callback]);
}

export default useEscapeKey;
