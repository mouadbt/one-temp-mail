import { Button } from "#components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "#components/ui/drawer";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { toast } from "sonner";

// import { RightArrow } from "#components/Icons/RightArrow";
// import PrimaryBtn from "#components/ui/PrimaryBtn";

export default function HumanVerification() {
  const siteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;

  const onVerify = (token: string) => {
    if (token) {
      //   handleVerificationSuccess();
      console.log(token);
    }
  };

  const onError = (error) => {
    console.error("hCaptcha error:", error);
    toast.error("Captcha verification failed. Please try again.");
  };

  const onExpire = () => {
    toast.warning("Captcha expired. Please try again.");
  };

  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger
        render={
          //   <PrimaryBtn
          //     content="Generate Your Temp Email"
          //     className="mx-auto z-50"
          //     icon={
          //       <RightArrow
          //         className="stroke-foreground text-[0px] translate-x-[-200%] group-active:-rotate-45 group-hover:text-lg group-hover:translate-x-0 group-focus:text-lg group-focus:translate-x-0 transition-all duration-300 group-active:text-lg group-active:translate-x-0"
          //         width="1em"
          //         height="1em"
          //       />
          //     }
          //   />
          <Button variant="outline">Open Snap Drawer</Button>
        }
      />
      <DrawerContent>
        <DrawerHeader className="*:text-center pt-8">
          <DrawerTitle>Verify you're human</DrawerTitle>
          <DrawerDescription>
            Please complete the captcha to continue
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className="rounded-2xl bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:h-80 group-data-[swipe-axis=y]/drawer-popup:w-full" />
        </div>
        <DrawerFooter>
          <HCaptcha
            sitekey={"siteKey"}
            onVerify={onVerify}
            onError={onError}
            onExpire={onExpire}
            theme="dark"
          />

          <DrawerClose render={<Button className="">Cancel</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
