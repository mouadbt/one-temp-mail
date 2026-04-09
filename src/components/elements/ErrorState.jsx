import React from "react";

const ErrorState = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col justify-center items-center py-4 gap-2">
      <p className="text-sm text-foreground/60">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-sm text-primary hover:underline"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
