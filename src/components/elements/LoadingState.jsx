import React from "react";

const LoadingState = ({ message }) => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="animate-spin h-6 w-6 border-2 border-foreground/30 border-t-foreground rounded-full" />
      <span className="ml-3 text-sm text-foreground/60">{message}</span>
    </div>
  );
};

export default LoadingState;
