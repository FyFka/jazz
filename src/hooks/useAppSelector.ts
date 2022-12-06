import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IRootStore } from "../types/IStore";

export const useAppSelector: TypedUseSelectorHook<IRootStore> = useSelector;
