import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import "../components/MarkdownViewer.css"


function MarkdownViewer({addedText}){
    const[text, setText] = useState("")
    function handleMd (event){
        setText(event.target.value)
    }
    useEffect(()=>{
        const text_area = document.querySelector("textarea")
        const cursor_postition = text_area.selectionStart
        setText(curText => (curText).substring(0, cursor_postition) + addedText + " " + (curText).substring(cursor_postition, text_area.value.length))
    },[addedText])
    return(
        <div className="md-components">
            <div className="text-screen">
                <textarea value={text} onChange={handleMd}></textarea>
            </div>
            <div className="viewer">
                <div className="inner-viewer">
                    <ReactMarkdown children={text}/>
                </div>
            </div>
        </div>
    )
}

export default MarkdownViewer;
