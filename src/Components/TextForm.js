import React, { useState } from 'react'
import Alert from './Alert'

function TextForm(props) {
    const [text, setText] = useState("")
    const [alert, setAlert] = useState(0)
    const [alertMessage, setAlertMessage] = useState('')

    // console.log('text', text)

    const handleUpperCase = ()=>{ 
      setText(text.toUpperCase())       
        setAlert(1)
        setAlertMessage('Your text has been converted into uppercase.')
        setTimeout(() => {
          setAlert(0)
        }, 5000);
    }

    const handleLowerCase = ()=>{        
        setText(text.toLowerCase())
        setAlert(1)
        setAlertMessage('Your text has been converted into lowercase.')
        setTimeout(() => {
          setAlert(0)
        }, 5000);
    }

    const handleCopy = ()=>{        
        navigator.clipboard.writeText(text)
        setAlert(1)
        setAlertMessage('Your text has been coppied.')
        setTimeout(() => {
          setAlert(0)
        }, 5000);
    }

    const handleRemoveExtraSpaces = ()=>{        
      setText(text.replace(/\s+/g, ' ').trim());
      setAlert(1)
        setAlertMessage('Remove extras spaces form you text.')
        setTimeout(() => {
          setAlert(0)
        }, 5000);
    }

    const handleClear = () =>{
      setText('')
    }
  return (
    <>
    <div className="container my-4" style={{height:'58px'}}>
        <Alert alert={alert} alertMessage={alertMessage}/>
</div>
        <div className="container">       
        <h4 htmlFor="exampleFormControlTextarea1" className="form-label">{props.formText}</h4>
        <textarea className="form-control textarea" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} id="exampleFormControlTextarea1" rows="5" value={text} onChange={(e) => {setText(e.target.value)}} placeholder='Enter Text..'></textarea>
        
        <button className="btn btn-primary btn-sm my-1 me-1" onClick={handleUpperCase} disabled={text.length === 0}>Convert To Upper Case</button>
        <button className="btn btn-primary btn-sm my-1 me-1" onClick={handleLowerCase} disabled={text.length === 0}>Convert To Lower Case</button>
        <button className="btn btn-primary btn-sm my-1 me-1" onClick={handleCopy} disabled={text.length === 0}>Copy Text</button>
        <button className="btn btn-primary btn-sm my-1 me-1" onClick={handleRemoveExtraSpaces} disabled={text.length === 0}>Remove Extra Spaces</button>
        <button className="btn btn-primary btn-sm my-1 me-1" onClick={handleClear} disabled={text.length === 0}>Clear</button>
        <h5 className='my-2'>Your Text Summary</h5>
        {/* <p>{ text.length > 0 ? text.split(' ').length : '0'  } Words, {text.length} Characters</p>   */}
        <p>{ text.split(' ').filter((item)=>(item.length!==0)).length   } Words, {text.length} Characters</p>  
        <p>{0.008 * text.split(' ').length} Minutes Read</p>
        <h2>Preview</h2>
        <div>{text.length > 0 ? text : 'Enter text in text area.'}</div>
        </div>

            
    </>
  )
}

export default TextForm