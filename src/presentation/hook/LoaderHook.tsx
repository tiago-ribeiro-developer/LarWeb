import { useContext } from "react";
import { LoadingContext } from "../../data/context/LoadingContext";

export function UseLoader() {
  return useContext(LoadingContext);
}
