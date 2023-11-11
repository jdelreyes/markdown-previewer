import Previewer from "../previewer/Previewer";
import Editor from "../editor/Editor";

export default function Main() {
    return (
        <main className="flex">
            <Editor></Editor>
            <Previewer></Previewer>
        </main>
    )
};
