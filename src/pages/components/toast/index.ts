import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "../../../styles";
interface Props {
  type: string;
  message?: string;
}

export const toastNotification = ({ type, message }: Props) => {
  switch (type) {
    case "error":
      return toast.error(message || "error", {
        style: {
          color: `${theme.colors.details}`,
        },
        theme: "dark",
      });
    case "info":
      return toast.info(message || "info", {
        style: {
          color: `${theme.colors.details}`,
        },
        theme: "dark",
      });
    case "success":
      return toast.success(message || "success", {
        style: {
          color: `${theme.colors.details}`,
        },
        theme: "dark",
      });
  }
};
