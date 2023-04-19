import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import './codeEditor.css'

import { materialDark } from "@uiw/codemirror-theme-material";





export default function CodeEditor({ problem }) {
    const onChange = React.useCallback((value, viewUpdate) => {
        // console.log("value:", value);
    }, []);


    return (
        <div id="codeEditor">
            <CodeMirror
                id="codeMirror"
                value={problem.sample_code}
                height="90vh"

                theme={materialDark}
                extensions={[javascript({ jsx: true })]}
                onChange={onChange}
            />
            <div className="console-compile-btns">
                <div className="console-btn">
                    <button id="console-btn">Console</button>
                </div>
                <div className="run-submit-btn">
                    <button id="run-btn">Run</button>
                    <button id="submit-btn">Submit</button>
                </div>
            </div>

        </div>
    );
}
