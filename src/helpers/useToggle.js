import React from "react";

function useToggle(initialState = false) {
  const [visible, setVisible] = React.useState(initialState);

  const toggleVisible = () => {
    setVisible((prevState) => {
      console.log(!prevState);
      !prevState;
    });
  };

  return [visible, toggleVisible];
}

export default useToggle;
