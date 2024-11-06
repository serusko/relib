import { useMergeRefs } from "@floating-ui/react";
import { HTMLProps, cloneElement, forwardRef, isValidElement } from "react";

import { useTooltipState } from "./context";

export const TooltipTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  function TooltipTrigger({ children, ...props }, propRef) {
    const state = useTooltipState();

    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([state.refs.setReference, propRef, childrenRef]);

    if (!isValidElement(children)) {
      return null;
    }

    return cloneElement(
      children,
      state.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        "data-state": state.open ? "open" : "closed",
      })
    );
  }
);
