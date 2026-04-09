import React, { lazy, Suspense } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import useEmailContext from "@/hooks/useEmailContext";
import { toast } from "sonner";
import LoadingState from "../elements/LoadingState";

const HCaptcha = lazy(() => import("@hcaptcha/react-hcaptcha"));
const VerificationDrawer = () => {
  const { state, handleVerificationSuccess, setDrawerVisible } = useEmailContext();
  const siteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;

  const onVerify = (token) => {
    if (token) {
      handleVerificationSuccess();
    }
  };

  const onError = (error) => {
    console.error("hCaptcha error:", error);
    toast.error("Captcha verification failed. Please try again.");
  };

  const onExpire = () => {
    toast.warning("Captcha expired. Please try again.");
  };

  const handleOnOpenChange = (open) => {
    setDrawerVisible(open);
  };

  return (
    <Drawer
      open={state.isDrawerOpen}
      onOpenChange={(open) => handleOnOpenChange(open)}
    >
      <DrawerContent className="md:px-[35%] border-foreground/30">
        <DrawerHeader className="*:text-center pt-8">
          <DrawerTitle>Verify you're human</DrawerTitle>
          <DrawerDescription>
            Please complete the captcha to continue
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="items-center justify-center">
          <Suspense fallback={<LoadingState message="Loading captcha..." />}>
            <HCaptcha
              sitekey={siteKey}
              onVerify={onVerify}
              onError={onError}
              onExpire={onExpire}
              theme="dark"
            />
          </Suspense>
          <DrawerClose
            className="w-min mx-auto text-foreground/60 border-b border-b-transparent hover:border-b-foreground/60 mt-8"
            onClick={() => setDrawerVisible(false)}
          >
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default VerificationDrawer;
