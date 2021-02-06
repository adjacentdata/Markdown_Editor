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
      {/* Tool Bar */}
      <div className="wrapper">
        <div className="tools">
            <Button type="button" value={"#"} onClick={handleButton} variant="contained" color="primary">Heading</Button>
            <Button type="button" value={"##"} onClick={handleButton} variant="contained" color="primary">SubHeading</Button>
            <Button type="button" value={"###"} onClick={handleButton} variant="contained" color="primary">SubHeading2</Button>
            <Button type="button" value={"*"} onClick={handleButton} variant="contained" color="primary">List</Button>
            <Button type="button" value={"*\n*\n*"} onClick={handleButton} variant="contained" color="primary">TripleList</Button>
            <Button type="button" value={"\`\`\`bash \n enter code here \n \`\`\` "} onClick={handleButton} variant="contained" color="primary">Bash</Button>
        </div>
        <div className="viewer">
          <MarkdownViewer addedText={text}/>
        </div>
      </div>





    </div>
  );
}

export default App;
