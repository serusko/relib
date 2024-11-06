import { createContext, useContext } from "react";
import { useTooltip } from "./useTooltip";

type ContextType = ReturnType<typeof useTooltip> | null;

const TooltipContext = createContext<ContextType>(null);

export default TooltipContext;

export const useTooltipState = () => {
  const context = useContext(TooltipContext);

  if (context == null) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />");
  }

  return context;
};
