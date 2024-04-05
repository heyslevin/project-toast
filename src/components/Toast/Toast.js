import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import { ToastContext } from "../ToastProvider/ToastProvider";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, message, id }) {
  const [isVisible, setIsVisible] = React.useState(true);
  const { dismissToast } = React.useContext(ToastContext);

  function toggleVisible() {
    setIsVisible(false);
  }

  const Icon = ICONS_BY_VARIANT[variant] || Info;
  return (
    <>
      {isVisible && (
        <div className={`${styles.toast} ${styles[variant]}`} id={id}>
          <div className={styles.iconContainer}>
            <Icon size={24} />
          </div>

          <VisuallyHidden> `${variant} -` </VisuallyHidden>
          <p className={styles.content}>{message}</p>
          <button
            className={styles.closeButton}
            onClick={() => dismissToast(id)}
            aria-label="Dismiss Message"
            aria-live="off"
          >
            <X size={24} />
          </button>
        </div>
      )}
    </>
  );
}

export default Toast;
