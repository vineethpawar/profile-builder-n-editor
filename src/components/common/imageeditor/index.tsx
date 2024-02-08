import { InlineImageNode } from "@/nodes/InlineImageNode";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import React from "react";
import InlineImagePlugin from "./InlineImagePlugin";

const ImageEditor: React.FC = () => {
  return (
    <LexicalComposer
      initialConfig={{
        namespace: "ImageEditor",
        onError: (error: Error) => {
          console.error("ImageEditor", error);
        },
        nodes: [InlineImageNode],
      }}
    >
      <div className="">adawd</div>
      <InlineImagePlugin />
    </LexicalComposer>
  );
};

export default ImageEditor;
