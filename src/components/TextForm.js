import React, { useState } from 'react'

const TextForm = (props) => {

    const [text, setText] = useState("Enter Text here");

    const handleOnClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success')
    }

    const handleLowClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert('Converted to LowerCase', 'success')
    }

    const handleClearClick = () => {
        let cleartText = ''
        setText(cleartText)
        props.showAlert('Text is clear', 'success')
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text.valueOf());
        props.showAlert('Text is copy ', 'success')
    }

    const handleCapitalClick = () => {
        let capText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(capText)
        props.showAlert('Converted to Capitalize', 'success')

    }

    const handleSpaceClick = () => {
        let spaceRemove = text.split(/[ ]+/);
        setText(spaceRemove.join(' '))
        props.showAlert('Remove extra spaces', 'success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40', color: props.mode === 'light' ? 'black' : 'white' }} id="myText" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleOnClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCapitalClick}>Capitalized Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleSpaceClick}>Remove Extra Space</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length
                } Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}

export default TextForm
