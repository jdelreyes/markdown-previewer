import sanitizeHtml from 'sanitize-html';
import { marked } from 'marked'

type Text = {
    text: string
}

export default function Previewer({ text }: Text) {
    const markedText = marked.parse(text);
    // note: only necessary if the form has a submit button
    const cleanText = sanitizeHtml(markedText);

    return (
        <section>
            <div id="preview" dangerouslySetInnerHTML={{ __html: markedText }} />
        </section>
    )
};
