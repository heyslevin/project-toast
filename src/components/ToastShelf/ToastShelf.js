import React, { useContext } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toastSet, handleClose } = useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastSet.map((toast) => {
        return (
          <li className={styles.toastWrapper}>
            <Toast
              variant={toast.variant}
              message={toast.message}
              id={toast.id}
              handleClose={handleClose}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
