import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "#components/ui/dialog";
import {  Clipboard, Undo2 } from "lucide-react";
import { Button } from "#components/ui/button";
import TooltipComp from "#components/ui/TooltipComp";
import PrimaryBtn from "#components/ui/PrimaryBtn";
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

        <TooltipComp
          content="Copy Email address"
          triggerEl={
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
      </div>

      {/* Reset */}
      <Dialog>
        <TooltipComp
          content="Reset and generate new Email"
          triggerEl={
            <DialogTrigger
              render={
                <Button
                  variant={"ghost"}
                  className={"rounded-full p-0 w-10 h-10"}
                >
                  <span className="sr-only">Reset and generate new Email</span>
                  <Undo2 className="size-5 text-primary" />
                </Button>
              }
            />
          }
        />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  this email and remove all the messages.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="justify-end">
            <DialogClose
              render={
                <Button type="button" variant={"outline"}>
                  Close
                </Button>
              }
            />
            <Button>Yes gnerate new email</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
