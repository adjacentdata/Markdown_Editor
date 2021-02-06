import React, { useEffect, useState } from 'react'
import './App.css';
import MarkdownViewer from './components/MarkdownViewer'
import {Button} from '@material-ui/core'
function App() {
  const [text, setText] = useState('')

  const handleButton = (e) =>{
    setText(e.currentTarget.value)
  }

  return (
    <div className="main">

      <h1>Welcome to Tools MD</h1>
      <p> Click A Button and Begin</p>
      {/* Tool Bar */}
      <div className="wrapper">
        <div className="tools">
            <h3>Basic Syntax</h3>
            <Button type="button" value={"#"} onClick={handleButton} variant="contained" color="primary">Heading</Button>
            <Button type="button" value={"##"} onClick={handleButton} variant="contained" color="primary">Heading 2</Button>
            <Button type="button" value={"###"} onClick={handleButton} variant="contained" color="primary">Heading 3</Button>
            <Button type="button" value={"***Text***"} onClick={handleButton} variant="contained" color="primary">Bold</Button>
            <Button type="button" value={"*Text*"} onClick={handleButton} variant="contained" color="primary">Italicize</Button>
            <Button type="button" value={"> \n Note: ReactMarkdown does not support BlockQuotes"} onClick={handleButton} variant="contained" color="primary">BlockQuote</Button>
            <Button type="button" value={"-\n-\n-"} onClick={handleButton} variant="contained" color="primary">UnorderedList</Button>
            <Button type="button" value={"*\n*\n*"} onClick={handleButton} variant="contained" color="primary">TripleList</Button>
            <Button type="button" value={"\`code\`"} onClick={handleButton} variant="contained" color="primary">Code</Button>
            <Button type="button" value={"---"} onClick={handleButton} variant="contained" color="primary">Horizontal Rule</Button>
            <Button type="button" value={"[title](https://www.example.com)"} onClick={handleButton} variant="contained" color="primary">Link</Button>
            <Button type="button" value={"![alt text](image.jpg)\n Please Note: Image will not show up on this doc. Please make a path to the image in your directory."} onClick={handleButton} variant="contained" color="primary">Image</Button>
        </div>
        <div className="viewer">
          <MarkdownViewer addedText={text}/>
        </div>
      </div>





    </div>
  );
}

export default App;
