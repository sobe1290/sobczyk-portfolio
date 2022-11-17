import React from 'react'
import { Button } from 'react-bootstrap'
import ProfList from './ProfList'

function Resume() {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SobczykResume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SobczykResume.pdf';
                alink.click();
            })
        })
    }
  return (
    <>
            <center>
                <h1 className="headone">Click on below button to download a copy of my Resume</h1>
                <Button variant="primary" className="button-84 m-3" onClick={onButtonClick}>Download PDF</Button>
            </center>
            <ProfList />
        </>
  )
}

export default Resume