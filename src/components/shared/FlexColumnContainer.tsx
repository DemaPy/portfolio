import React, { PropsWithChildren } from "react";

const FlexColumnContainer = ({ children, style }: PropsWithChildren<{ style: { backgroundColor: string, color: string, textAlign: TextAlign } }>) => {
  return (
    <div
      style={{
        ...style,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        paddingBlock: "1rem"
      }}
    >
      {children}
    </div>
  );
};

export default FlexColumnContainer;
