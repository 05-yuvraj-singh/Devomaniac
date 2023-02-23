import { useState } from "react"

export default function Input(){
    const [text,setText]=useState("");
    function Upper(){
        setText(text.toUpperCase());
    }
    function Lower(){
        setText(text.toLowerCase());
    }
    function Title(){
        setText(text.charAt(0).toUpperCase() +
        text.substr(1).toLowerCase());
    }
    function Replace(){
        let toBeReplaced=prompt("Enter Text To Be Replaced : ");
        let newWord=prompt("Replace "+ toBeReplaced +" with ? ");
        setText(text.replaceAll(toBeReplaced,newWord));
    }
    function Find(){
        let findText = prompt("Enter Text to Find : ");
        let ans=text.match(findText).length;
        if(ans==0)alert("Not Found")
        else alert(findText+" occurs "+ans+" times ")
    }
    function Remove(){
        let target=prompt("Enter Text To Be Removed : ");
        setText(text.replaceAll(target,""));
    }
    
    return(
        <>
             <h4 className="my-4">Enter Text : </h4>
             <div className="input-group">
  <textarea className="form-control" aria-label="With textarea" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
</div>
<button type="button" className="btn btn-primary my-2 mx-2" onClick={Upper}>Upper Case</button>
<button type="button" className="btn btn-primary my-2 mx-2" onClick={Lower}>Lower Case</button>
<button type="button" className="btn btn-primary my-2 mx-2" onClick={Title}>Title Case</button>
<button type="button" className="btn btn-primary my-2 mx-2" onClick={Find}>Find</button>
<button type="button" className="btn btn-primary my-2 mx-2" onClick={Replace}>Replace</button>
<button type="button" className="btn btn-primary my-2 mx-2" onClick={Remove}>Remove</button>

<br></br><br></br><br></br>

<div>
<center>
<h6>Text Length : </h6>
<p mx-3>Words : {text.split(" ").length} <br></br>
Characters : {text.length}<br></br>
Sentences : {text.split(".").length}
</p>
</center>

<h6><center>Preview : </center></h6><p>{text}</p></div>
        </>
    )
}




