import { Button } from "#components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "#components/ui/drawer";
import useEmailContextHook from "#hooks/useEmailContextHook";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { toast } from "sonner";

export default function HumanVerification({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { generateEmail } = useEmailContextHook();
  const siteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;

  const onVerify = (token: string) => {
    if (token) {
      generateEmail();
      onOpenChange(false);
    }
  };

  const onError = (error: string) => {
    console.error("hCaptcha error:", error);
    toast.error("Captcha verification failed. Please try again.");
  };

  const onExpire = () => {
    toast.warning("Captcha expired. Please try again.");
  };

  return (
    <Drawer showSwipeHandle open={open} onOpenChange={onOpenChange}>
      <DrawerContent className={"**:data-drawer-content:gap-8"}>
        <DrawerHeader className="*:text-center pt-8">
          <DrawerTitle>Verify you're human</DrawerTitle>
          <DrawerDescription>
            Please complete the captcha to continue
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex justify-center">
          <HCaptcha
            sitekey={siteKey}
            onVerify={onVerify}
            onError={onError}
            onExpire={onExpire}
            theme="dark"
          />
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button variant={"link"}>Cancel</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
