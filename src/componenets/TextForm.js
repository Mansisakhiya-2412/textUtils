import React,{useState} from 'react'


// console.log(useState)

export default function TextForm(props) {
    const handleUPClick = () =>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () =>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) =>{
        console.log("on change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState('');
    // text = "new text" //wrong way to change the state
    // setText("new text"); //correct way to change the state
    return (
      <>
        <div className="container">
          <h1>{props.heading} </h1>
          <div className="form-floating">
            {/* <label for="myBox"></label> */}

            <textarea
              className="form-control "
              value={text}
              onChange={handleOnChange}
              placeholder="Leave a comment here"
              id="myBox"
            ></textarea>

            <button
              className="btn btn-primary mx-1 my-3"
              onClick={handleUPClick}
            >
              Convert to Uppercase
            </button>
            <button
              className="btn btn-primary mx-1 my-3"
              onClick={handleLoClick}
            >
              Convert to Lowercase
            </button>

            <button
              className="btn btn-primary mx-1 my-3"
              onClick={handleCopy}
            >
              CopyText
            </button>
          </div>
        </div>
        <div className="container">
          <h2>Your text summary</h2>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </>
    );
}
