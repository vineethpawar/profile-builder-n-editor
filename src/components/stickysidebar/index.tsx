import React from "react";
import ProfilePicture from "./ProfilePicture";
import PlainTextEditor from "../common/plaintexteditor";

const StickySidebar: React.FC = () => {
  return (
    <div>
      <ProfilePicture />
      <PlainTextEditor
        editorName="userNameEditor"
        placeholder="Enter your name"
        overrideStyles={{
          container: {
            marginBottom: "5px",
          },
        }}
      />
      <PlainTextEditor
        editorName="emailEditor"
        placeholder="Enter email"
        fontSize={"14px"}
        fontWeight={400}
      />
    </div>
  );
};

export default StickySidebar;
