import { useEffect } from "react";
import { UseAlert } from "../../hook/AlertHook";
import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const AlertComponent = () => {
  const { messageAlert, showAlert } = UseAlert();

  useEffect(() => {
    if (messageAlert?.show) {
      Store.addNotification({
        title: "",
        message: messageAlert.content,
        type: messageAlert.color,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: messageAlert.time ? messageAlert.time : 5000,
          onScreen: true,
          showIcon: true,
        },
      });

      if (messageAlert?.time) {
        const timer = setTimeout(() => {
          showAlert({
            show: false,
            content: "",
            color: messageAlert.color,
          });
        }, messageAlert.time);

        return () => clearTimeout(timer);
      }
    }
  }, [messageAlert, showAlert]);

  return null;
};

export default AlertComponent;
