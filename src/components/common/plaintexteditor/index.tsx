import React from "react";
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import styles from "./PlainTextEditor.module.css";
import { EditorThemeClasses } from "lexical";

interface PlainTextEditorProps {
  editorName: string;
  placeholder?: string;
  theme?: EditorThemeClasses;
  overrideStyles?: {
    container?: React.CSSProperties;
    input?: React.CSSProperties;
    placeholder?: React.CSSProperties;
  };
  fontSize?: React.CSSProperties["fontSize"];
  fontWeight?: React.CSSProperties["fontWeight"];
  lineHeight?: React.CSSProperties["lineHeight"];
}
const PlainTextEditor: React.FC<PlainTextEditorProps> = ({
  editorName,
  placeholder = "",
  overrideStyles = {},
  fontSize = undefined,
  fontWeight = undefined,
  lineHeight = undefined,
  theme = undefined,
}) => {
  const onError = (error: Error) => {
    console.error(editorName, error);
  };
  const initialConfig: InitialConfigType = {
    namespace: editorName,
    theme,
    onError,
  };
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className={styles.editorContainer} style={overrideStyles?.container}>
        <PlainTextPlugin
          contentEditable={
            <ContentEditable
              className={styles.editorInput}
              style={
                (overrideStyles?.input, { fontSize, fontWeight, lineHeight })
              }
            />
          }
          placeholder={
            <div
              className={styles.editorPlaceholder}
              style={
                (overrideStyles?.placeholder,
                { fontSize, fontWeight, lineHeight })
              }
            >
              {placeholder}
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
    </LexicalComposer>
  );
};

export default PlainTextEditor;
