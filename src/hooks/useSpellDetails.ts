import { useQuery } from "react-query";
import { getSpellDetails } from "../services/spell";

export const useSpellDetails = () => {
  return useQuery<any>("get-all-spells", getSpellDetails);
};
