import {
  FloatingPortal,
  useDelayGroup,
  useMergeRefs,
  useId,
  useTransitionStyles,
  FloatingArrow,
} from "@floating-ui/react";
import { HTMLProps, forwardRef } from "react";

import { useTooltipState } from "./context";

import cssStyles from "./TooltipContent.module.css";

const instantDuration = 0;
const duration = 250;

export const TooltipContent = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement> & { arrowRef: any; context: any }
>(function TooltipContent({ arrowRef, children, context, ...props }, propRef) {
  const state = useTooltipState();
  const id = useId();

  const { isInstantPhase, currentId } = useDelayGroup(state.context, { id });
  const ref = useMergeRefs([state.refs.setFloating, propRef]);
  const { isMounted, styles } = useTransitionStyles(state.context, {
    duration: isInstantPhase
      ? {
          close: currentId === id ? duration : instantDuration,
          open: instantDuration,
        }
      : duration,
    initial: { opacity: 0 },
  });

  if (!isMounted) {
    return null;
  }

  return (
    <FloatingPortal>
      <div
        ref={ref}
        className={cssStyles.content}
        style={{
          ...state.floatingStyles,
          ...styles,
        }}
        {...state.getFloatingProps(props)}
      >
        <FloatingArrow
          className={cssStyles.arrow}
          context={context}
          ref={arrowRef}
        />
        {children}
      </div>
    </FloatingPortal>
  );
});
