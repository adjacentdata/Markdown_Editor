import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'

function MarkdownViewer({addedText}){
    const[md, setMd] = useState("")
    function handleMd (event){
        setMd(event.target.value)
    }
    useEffect(()=>{
        const text_area = document.querySelector("textarea")
        const cursor_postition = text_area.selectionStart
        setMd((md).substring(0, cursor_postition) + addedText + " " + (md).substring(cursor_postition, text_area.value.length))

    },[addedText])
    return(
        <div>
            <div>
                <textarea value={md} onChange={handleMd}></textarea>
            </div>
            <div>
                <ReactMarkdown children={md}/>
            </div>

        </div>
    )
}

export default MarkdownViewer;
