import Previewer from "../previewer/Previewer";
import Editor from "../editor/Editor";
import { useState, ChangeEvent, useEffect } from "react";

export default function Main() {
    const [text, setText] = useState<string>("");

    const onEditorChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setText(event.target.value);
    };

    useEffect(() => {
        const defaultMarkdown: string =
            `# Markdown Previewer

## Installation
\`\`\`shell
git clone https://github.com/siomao/markdown-previewer.git
cd markdown-previewer
npm install
\`\`\`

## Starting
\`\`\`shell
npm start
\`\`\`

## Dependencies
| name                    | version                                          |
|---------------------------------|--------------------------------------------------|
| gh-pages                        | ^6.1.0                                           |
| marked                          | ^10.0.0                                          |
| @uiw/react-textarea-code-editor | ^2.1.9                                           |
| sanitize-html                   | ^2.11.0                                          |
| tailwindcss                     | ^3.3.5                                           |

## Motivation
> My motivation is to not only get better with writing React, but to get started with writing TypeScript - a syntactic superset of JavaScript

## Issues
* This is not a mobile-friendly app

## Author
[Jerome Delos Reyes](https://github.com/siomao)

## Contributing
Pull Requests are highly appreciated! 😄`;
        setText(defaultMarkdown);
    }, []);

    return (
        <main className="flex justify-between p-3 h-screen w-screen bg-slate-300">
            <Editor onEditorChange={onEditorChange} defaultText={text}></Editor>
            <Previewer text={text}></Previewer>
        </main>
    );
}
