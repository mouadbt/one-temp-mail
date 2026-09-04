import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "#components/ui/tooltip";
import { Clipboard, Undo2 } from "lucide-react";
import { Button } from "#components/ui/button";
export default function EmailDisplay({ email }: { email: string }) {
  const copyEmail = () => {
    if (!email) return;
    navigator.clipboard.writeText(email);
    toast.success("Email address is copied to clipboard");
  };
  return (
    <div className="z-50 flex flex-col items-center justify-center">
      <p className="text-foreground/60 text-base sm:text-xl font-medium mb-2">
        Your temporary email address is:
      </p>
      <div className="flex items-center gap-4">
        <p className="text-lg sm:text-4xl font-bold" id="EmailAddr">
          {email}
        </p>

        <Tooltip>
          <TooltipTrigger
            delay={0}
            render={
              <Button
                variant={"ghost"}
                className={"rounded-full p-0 w-10 h-10"}
                onClick={copyEmail}
              >
                <span className="sr-only">Copy email to clipboard</span>
                <Clipboard className="size-5 text-primary" />
              </Button>
            }
          />

          <TooltipContent>Copy Email address</TooltipContent>
        </Tooltip>
      </div>

      {/* Reset */}
      <Tooltip>
        <TooltipTrigger
          delay={0}
          render={
            <Button
              variant={"ghost"}
              className={"rounded-full p-0 w-10 h-10"}
            //   onClick={copyEmail}
            >
              <span className="sr-only">Generate new Email</span>
              <Undo2 className="size-5 text-primary" />
            </Button>
          }
        />

        <TooltipContent>Generate new Email</TooltipContent>
      </Tooltip>

      {/* <ConfirmDialog
        open={isResetDialogOpen}
        onOpenChange={setIsResetDialogOpen}
        title="Are you absolutely sure?"
        description={
          <>
            This action cannot be undone. This will permanently delete this
            email and remove all the messages.
            <button
              onClick={handleReset}
              className="active:translate-y-[2px] py-1 group relative flex items-center overflow-hidden px-8 whitespace-nowrap gap-1 justify-start rounded-3xl bg-primary text-sm transition-colors duration-300 hover:bg-primary/90 active:bg-primary/70 shadow-sm font-medium h-9"
            >
              <span className="ease absolute right-0 flex h-9 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
                <ResetIcon className="w-3 h-3 text-foreground" />
              </span>
              <span className="relative transform transition-transform duration-300 group-hover:-translate-x-3 text-foreground">
                Yes Reset
              </span>
            </button>
          </>
        }
        dialogContentClassName="bg-background border-foreground/10 max-w-[90%] sm:max-w-md rounded-xl *:text-start"
      /> */}
    </div>
  );
}
