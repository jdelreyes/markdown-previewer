import React from "react";

type Event = {
    onEditorChange: Function
}

const Editor: React.FC<Event> = ({ onEditorChange }: Event) => {
    return (
        <section>
            <textarea name="editor" id="editor" cols={30} rows={10} onChange={(event) => onEditorChange(event)} />
        </section>
    )
};


export default Editor;