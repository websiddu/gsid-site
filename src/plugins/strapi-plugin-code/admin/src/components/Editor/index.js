import React, { useEffect, useState } from "react";

import { createGlobalStyle } from "styled-components";
// import MarkdownEditor from "@uiw/react-markdown-editor";
// import { EditorState, EditorStateConfig, Extension } from "@codemirror/state";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
// import { EditorView } from "@codemirror/view";
import { StateEffect } from "@codemirror/state";

const GlobalStyle = createGlobalStyle`
  .cm-content {
    white-space: pre-wrap !important;
    font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
    font-size: 12px;
    width: 90%;
  }


  .md-editor {
    --color-border-muted: #888;

    color: var(--color-fg-default);
    box-shadow: var(--color-border-shadow);
    text-align: left;
    border-radius: 3px;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: var(--color-canvas-subtle);
  }

  .md-editor-content {
    position: relative;
    flex: 1;
    overflow: auto;
  }

  .md-editor-fullscreen .md-editor {
    border-radius: 0;
  }

  .md-editor-fullscreen {
    z-index: 999;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .md-editor-fullscreen .md-editor-toolbar {
    border-radius: 0;
  }

  .md-editor-preview {
    padding: 20px;
    width: 0%;
    overflow: hidden;
    border-left: 0;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
  }

  .md-editor h1 a, .md-editor h2 a, .md-editor h3 a, .md-editor h4 a, .md-editor h5 a, .md-editor h6 a {
    display: none;
  }



  .md-editor-toolbar {
	 border-bottom: 1px solid var(--color-border-muted);
	 background-color: var(--color-canvas-subtle);
	 padding: 4px 2px 4px 5px;
	 border-radius: 3px 3px 0 0;
	 display: flex;
	 gap: 2px;
}

 .md-editor-toolbar button {
	 background: none;
	 border: none;
	 cursor: pointer;
	 outline: 0;
	 display: inline-block;
	 height: 24px;
	 width: 24px;
	 padding: 3px 2px;
	 border-radius: 2px;
	 transition: all 0.3s;
	 color: var(--color-fg-default);
}
 .md-editor-toolbar button:hover {
	 color: var(--color-accent-fg);
	 background-color: var(--color-neutral-muted);
}
 .md-editor-toolbar button.active {
	 color: var(--color-prettylights-syntax-constant);
	 background-color: var(--color-neutral-muted);
}
 .md-editor-toolbar button:active {
	 color: var(--color-danger-fg);
	 background-color: var(--color-neutral-muted);
}
 .md-editor-toolbar button svg {
	 vertical-align: middle;
}
 .md-editor-toolbar-mode {
	 float: right;
	 padding-right: 5px;
}

`;

// export const scrollerStyle = {
//   extension: EditorView.theme({
//     "&.cm-editor, & .cm-scroller": {
//       borderBottomRightRadius: "3px",
//       borderBottomLeftRadius: "3px",
//     },
//   }),
// };

import { EditorState, Compartment } from "@codemirror/state";

const languageConf = new Compartment();

export const Editor = ({ onChange, value, name }) => {
  // const mdExtension = markdown({
  //   base: markdownLanguage,
  //   codeLanguages: languages,
  // });

  return (
    <div
      style={{
        border: "solid 1px #eee",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <GlobalStyle></GlobalStyle>
      {/* <MarkdownEditor
        height="800px"
        value={value}
        theme={githubLight}
        onChange={(value) => {
          onChange({ target: { name, value } });
        }}
      /> */}

      <CodeMirror
        value={value}
        height={800}
        onChange={(value) => {
          onChange({ target: { name, value } });
        }}
        extensions={[markdown({ base: markdownLanguage })]}
      />
    </div>
  );
};
