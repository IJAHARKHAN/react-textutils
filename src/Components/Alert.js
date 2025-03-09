import React from 'react'

export default function Alert(props) {
    // console.log('Alerts', props)
  return (
    <>
    { props.alert === 1 && (
        <div className="container my-4">
     <div class="alert alert-success" role="alert">
            <b>Success!</b> {props.alertMessage}
          </div>
          </div>
     )
    }
    
    </>
  )
}
