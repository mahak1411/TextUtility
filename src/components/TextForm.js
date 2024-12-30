import React , {useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState("");
    let handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.settingAlert("Converted to UPPERCASE","success")
    }
    let handleOnChange = (event)=>{  
        setText(event.target.value);
    }
    let handleLowerClick = ()=>{
        setText(text.toLowerCase());
        props.settingAlert("Converted to lowercase","success")

    }
    let handleClearClick = ()=>{
        setText("");
        props.settingAlert("Cleared All The Text!","success")

    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.settingAlert("Text to speech","success")

      }

    const handleCopy = ()=>{
        let text = document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.settingAlert("Text Copied to Clipboard","success")

    }
    const lengthofword = (text)=>{
        let count = 0
        for (let i = 0; i < text.split(" ").length; i++) {
            if (text.split(" ")[i] === "") {
                count++
            }
        }
        return text.split(" ").length - count
}

    return (
        <>
        <div >
            <h2>{props.heading} </h2>
            <div className="mb-3">
                <textarea className="form-control" id="myText" style={{backgroundColor :   props.mode === 'dark' ? '#3c4146':'white', color:props.mode === 'light' ? '#3c4146':'white'}} rows="8" value={text} onChange={handleOnChange}
                ></textarea >
            </div>
            <button className="btn btn-primary m-3" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
            <button className="btn btn-primary m-3" onClick={handleLowerClick}>convert to lowercase</button>
            <button className="btn btn-primary" onClick={handleClearClick}>Clear the Text</button>
            <button type="submit" onClick={speak} className="btn btn-primary mx-3 my-2"><i class="fa-solid fa-volume-high"></i></button>
            <button className="btn btn-primary" onClick={handleCopy}><i class="fa-regular fa-clipboard"></i></button>
        
        </div>
        <div className="container mt-3 mb-3">
            <h3>Your text summary</h3>
            <p>{lengthofword(text)} words, {text.length} characters</p>
            <p>{(text.split(" ").length)*0.008} Minute read </p>
            <h4>Preview:</h4>
            <p>{text.length>0 ? text:"Enter something in the textarea above to preview it"}</p>
        </div>
        </>
    );
}