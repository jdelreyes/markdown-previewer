import React from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';


type EditorProps = {
    onEditorChange: Function
}

const Editor: React.FC<EditorProps> = ({ onEditorChange }: EditorProps) => {

    return (
        <fieldset className="flex-1 bg-white mr-2 p-2">
            <legend className="text-2xl font-bold">Editor</legend>
            <div className="h-full w-full overflow-scroll ">
                <CodeEditor language='md' id="editor" className="h-fit w-full" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => onEditorChange(event)} style={{ fontSize: 20 }} />
            </div>
        </fieldset>
    )
};


export default Editor;