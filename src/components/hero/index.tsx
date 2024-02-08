import React from "react";
import PlainTextEditor from "../common/plaintexteditor";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col  min-h-72 justify-center py-4">
      <PlainTextEditor
        editorName="titleEditor"
        placeholder="Click to add title"
        fontSize={"70px"}
        fontWeight={400}
        lineHeight={"84px"}
        overrideStyles={{ container: { marginBottom: "5px" } }}
      />
      <PlainTextEditor
        editorName="subTitleEditor"
        placeholder="Click to add subtitle"
        fontSize={"18px"}
        fontWeight={500}
        lineHeight={"28px"}
      />
    </div>
  );
};

export default Hero;
