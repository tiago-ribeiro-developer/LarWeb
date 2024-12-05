import { useContext } from "react";
import { AlertContext } from "../../data/context/AlertContext";

export function UseAlert() {
  return useContext(AlertContext);
}
