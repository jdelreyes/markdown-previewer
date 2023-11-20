import React from "react";

type EditorProps = {
    onEditorChange: Function
}

const Editor: React.FC<EditorProps> = ({ onEditorChange }: EditorProps) => {

    return (
        <section>
            <textarea name="editor" id="editor" cols={100} rows={10} onChange={(event) => onEditorChange(event)} />
        </section>
    )
};


export default Editor;