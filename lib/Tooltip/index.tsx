import { FC, ReactNode } from "react";
import { useTooltip } from "./useTooltip";
import TooltipContext from "./context";
import { TooltipTrigger } from "./TooltipTrigger";
import { TooltipContent } from "./TooltipContent";

const Tooltip: FC<
  { children: ReactNode; content: ReactNode } & TooltipOptions
> = ({ children, content, ...options }) => {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useTooltip(options);

  if (!content) {
    return children;
  }

  return (
    <TooltipContext.Provider value={tooltip}>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent arrowRef={tooltip.arrowRef} context={tooltip.context}>
        {content}
      </TooltipContent>
    </TooltipContext.Provider>
  );
};

export default Tooltip;
