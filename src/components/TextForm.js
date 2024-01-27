import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleupclick = () =>{
        console.log("handled click"+text);
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handledownclick = () =>{
      let newtext=text.toLowerCase();
      setText(newtext);
  }
  const handleclearclick = () =>{
    let newtext="";
    setText(newtext);
}
const handlecopy = () =>{
  var text=document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
}
const handleextraspace = () =>{
  var newtext=text.split(/[ ]+/);
  setText(newtext.join(" "));
}
    const onchange = (event ) =>{
        console.log("on change");
        setText(event.target.value);
    }
 

    const [text, setText] = useState('enter text here');
  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={onchange} id="mybox" rows="8 "></textarea>
</div>

<button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handledownclick}>Convert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear data</button>
<button className="btn btn-primary mx-1" onClick={handlecopy}>Copydata</button>
<button className="btn btn-primary mx-1" onClick={handleextraspace}>Remove extra space</button>


</div>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>your text summary</h1>
    <p>{text.split(" ").length } words and {text.length} characters</p>
    <p>{0.08*text.split(" ").length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview"}</p>
</div>
</>
  )
}
