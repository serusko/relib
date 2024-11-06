import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  arrow,
  useDelayGroup,
  safePolygon,
} from "@floating-ui/react";
import { useMemo, useRef, useState } from "react";

export function useTooltip({
  initialOpen = false,
  onOpenChange: setControlledOpen,
  open: controlledOpen,
  placement = "bottom",
}: TooltipOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
  const setOpen = setControlledOpen ?? setUncontrolledOpen;
  const open = controlledOpen ?? uncontrolledOpen;
  const arrowRef = useRef(null);

  const { context, refs, floatingStyles, ...rest } = useFloating({
    middleware: [offset(8), flip(), shift(), arrow({ element: arrowRef })],
    whileElementsMounted: autoUpdate,
    onOpenChange: setOpen,
    placement,
    open,
  });

  const focus = useFocus(context, { enabled: controlledOpen == null });
  const role = useRole(context, { role: "tooltip" });
  const { delay } = useDelayGroup(context);
  const dismiss = useDismiss(context);

  const hover = useHover(context, {
    enabled: controlledOpen == null,
    move: false,
    delay,
    handleClose: safePolygon(),
  });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return useMemo(
    () => ({
      arrowRef,
      setOpen,
      open,
      ...interactions,
      floatingStyles,
      context,
      refs,
      ...rest,
    }),
    [open, setOpen, interactions, context, refs]
  );
}
