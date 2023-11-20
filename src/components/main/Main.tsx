import Previewer from "../previewer/Previewer";
import Editor from "../editor/Editor";
import { useState, ChangeEvent, useEffect } from "react";

export default function Main() {
    const [text, setText] = useState<string>('')

    useEffect(() => {
        setText('<h1></h1>')
    }, [])

    const onEditorChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setText(event.target.value);
    }

    return (
        <main className="main">
            <Editor onEditorChange={onEditorChange}></Editor>
            <Previewer text={text}></Previewer>
        </main>
    )
};
