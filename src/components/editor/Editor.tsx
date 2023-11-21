import React from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

type EditorProps = {
    onEditorChange: Function;
    defaultText: string;
};

const Editor: React.FC<EditorProps> = ({ onEditorChange, defaultText }: EditorProps) => {

    return (
        <fieldset className="flex-1 bg-white mr-2 p-2 rounded-md border-black border">
            <legend className="text-2xl font-bold mx-4 text-teal-950">Editor</legend>
            <label
                className="h-full w-full overflow-scroll bg-[#161b22] block"
                htmlFor="editor"
                id="editorLabel"
                onMouseEnter={() => { }}
            >
                <CodeEditor
                    language='md'
                    id="editor"
                    className="h-fit w-full"
                    value={defaultText}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => onEditorChange(event)}
                    style={{ fontSize: 20 }}
                />
            </label>
        </fieldset>
    );
};

export default Editor;
