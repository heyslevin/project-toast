import React from "react";
import useToggle from "../../helpers/useToggle";
import useEscapeKey from "../../helpers/useEscapeKey";

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastProvider({ children }) {
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState("");
  const [toastSet, setToastSet] = React.useState([]);

  const [isToastOpen, toggleOpen] = useToggle(true);

  const handleEscape = React.useCallback(setToastSet([]));

  useEscapeKey(handleEscape);

  function dismissToast(id) {
    const nextToasts = toastSet.filter((toast) => {
      return toast.id !== id;
    });
    setToastSet(nextToasts);
  }

  function createToast(message, variant) {
    const newToast = {
      variant,
      message,
      id: crypto.randomUUID(),
    };

    const nextToasts = [...toastSet, newToast];
    setToastSet(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        toastSet,
        dismissToast,
        createToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
