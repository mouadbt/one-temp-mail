import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "#components/ui/tooltip";
type TooltipCompProps = {
  content: string;
  triggerEl: React.ReactElement;
};
export default function TooltipComp({ triggerEl, content }: TooltipCompProps) {
  return (
    <Tooltip>
      <TooltipTrigger delay={0} render={triggerEl} />
      <TooltipContent>{content}</TooltipContent>
    </Tooltip>
  );
}