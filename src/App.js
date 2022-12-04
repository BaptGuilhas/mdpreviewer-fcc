import './styles.css';
import {useState} from "react";
import  {defaultTextarea} from "./defaultTextarea.js"
import {marked} from "marked"

function App() {
  const [text, setText] = useState(defaultTextarea)
  marked.setOptions({
    gfm: true,
    breaks: true,
    sanitize: true,
  });
  return (
    <div id="main">
    <div className='windows'>
      <div className='windows-header '>
        <h2>Editor</h2>
      </div>
        <textarea id="editor" type="text" value={text} onChange={(e) => {
          setText(e.target.value)}} />  
      </div>
    <div className='windows'>
      <div className='windows-header '>
        <h2>Previewer</h2>
      </div>
      <div 
        id="previewer"
          dangerouslySetInnerHTML = {{
            __html: marked(text)
          }} 
          />
    </div>
  </div>
  );
}



export default App;
