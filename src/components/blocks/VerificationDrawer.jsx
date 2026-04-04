import React, { lazy, Suspense } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const HCaptcha = lazy(() => import("@hcaptcha/react-hcaptcha"));
const VerificationDrawer = ({ onOpenChange: ture }) => {
  const isOpen = true;
  // const onOpenChange = () => {
  //   return;
  // };
  const siteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;

  const onVerify = (token) => {
    if (token) {
      onOpenChange: false;
    }
    console.log(token);
    return;
  };
  return (
    // <Drawer open={isOpen} onOpenChange={onOpenChange}>
    //   <DrawerContent className="bgshadowLight bg-black md:px-[35%] mx-auto border-foreground/30">
    //     <DrawerHeader className="*:text-center pt-8">
    //       <DrawerTitle>Verify you're human</DrawerTitle>
    //       <DrawerDescription>
    //         Please complete the captcha to continue
    //       </DrawerDescription>
    //     </DrawerHeader>
    //     <div className="captcha px-4 py-8 flex justify-center">
    //       <HCaptcha sitekey={siteKey} onVerify={onVerify} theme="dark" />
    //     </div>
    //     <DrawerFooter>
    //       <DrawerClose className="w-min mx-auto text-gray-300 border border-t-0 border-r-0 border-l-0 border-b-transparent hover:border-b-gray-300">
    //         Cancel
    //       </DrawerClose>
    //     </DrawerFooter>
    //   </DrawerContent>
    // </Drawer>
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent className="md:px-[35%] border-foreground/30">
        <DrawerHeader className="*:text-center pt-8">
          <DrawerTitle>Verify you're human</DrawerTitle>
          <DrawerDescription>
            Please complete the captcha to continue
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="items-center justify-center">
          <Suspense
            fallback={
              <div className="flex justify-center items-center py-4">
                <div className="animate-spin h-6 w-6 border-2 border-foreground/30 border-t-foreground rounded-full" />
                <span className="ml-3 text-sm text-foreground/60">
                  Loading captcha...
                </span>
              </div>
            }
          >
            <HCaptcha sitekey={siteKey} onVerify={onVerify} theme="dark" />
          </Suspense>
          <DrawerClose className="w-min mx-auto text-foreground/60 border-b border-b-transparent hover:border-b-foreground/60 mt-8">
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default VerificationDrawer;
