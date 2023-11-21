import sanitizeHtml from 'sanitize-html';
import { marked } from 'marked'

type PreviewerProps = {
    text: string
}

export default function Previewer({ text }: PreviewerProps) {
    const markedText = marked.parse(text);
    // note: only necessary if the form has a submit button
    const cleanText = sanitizeHtml(markedText);

    return (
        <fieldset className='flex-1 bg-white ml-2 p-2 rounded-md border-black border'>
        <legend className="text-2xl font-bold mx-4 text-teal-950">Previewer</legend>
            <div id="preview"
                dangerouslySetInnerHTML={{ __html: markedText }}
                className="prose-sm text-xl prose lg:prose-x prose-slate h-full w-full overflow-y-auto" />
        </fieldset>
    )
};
