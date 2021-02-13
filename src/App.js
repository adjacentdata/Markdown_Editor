import React, {useState } from 'react'
import './App.css';
import MarkdownViewer from './components/MarkdownViewer'
import {Button} from '@material-ui/core'
import logo from './img/supermarkdown-logo.png'

function App() {
  const [text, setText] = useState('')

  const handleButton = (e) =>{
    setText(e.currentTarget.value)
  }

  return (
    <div className="main">
      <div className="header">
        <img src={logo} alt="superMarkdownlogo"/>
        <p> Click A Button and Begin</p>
      </div>

      {/* Tool Bar */}
      <div className="wrapper">
        <div className="tools">
            <h3>Basic Syntax</h3>
            <Button type="button" value={"#"} onClick={handleButton} variant="contained" color="inherit">Heading</Button>
            <Button type="button" value={"##"} onClick={handleButton} variant="contained" color="inherit">Heading 2</Button>
            <Button type="button" value={"###"} onClick={handleButton} variant="contained" color="inherit">Heading 3</Button>
            <Button type="button" value={"**Text**"} onClick={handleButton} variant="contained" color="inherit">Bold</Button>
            <Button type="button" value={"*Text*"} onClick={handleButton} variant="contained" color="inherit">Italicize</Button>
            <Button type="button" value={"***Text***"} onClick={handleButton} variant="contained" color="inherit">Bold Italicize</Button>
            <Button type="button" value={"> \n Note: ReactMarkdown does not support BlockQuotes"} onClick={handleButton} variant="contained" color="inherit">BlockQuote</Button>
            <Button type="button" value={"-\n-\n-"} onClick={handleButton} variant="contained" color="inherit">Unordered List</Button>
            <Button type="button" value={"1.\n 2.\n 3."} onClick={handleButton} variant="contained" color="inherit">Ordered List</Button>
            <Button type="button" value={"[title](https://www.example.com)"} onClick={handleButton} variant="contained" color="inherit">Link</Button>
            <Button type="button" value={"![alt text](image.jpg)\n Please Note: Image will not show up on this doc. Please make a path to the image in your directory."} onClick={handleButton} variant="contained" color="inherit">Image</Button>
            <h3>Intermediate Formatting</h3>
            <Button type="button" value={"---"} onClick={handleButton} variant="contained" color="inherit">Horizontal Rule</Button>
            <Button type="button" value={"`code `"} onClick={handleButton} variant="contained" color="inherit">Code</Button>
            <Button type="button" value={"[text][1]\n\n[1]: https://www.example.com"} onClick={handleButton} variant="contained" color="inherit">Reference Lists</Button>
            <Button type="button" value={"\\ Text \\"} onClick={handleButton} variant="contained" color="inherit">Escape</Button>



        </div>
        <div className="viewer">
          <MarkdownViewer addedText={text}/>
        </div>
      </div>





    </div>
  );
}

export default App;
