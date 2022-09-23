import React, { Component } from 'react';
import '../node_modules/trix/dist/trix.css'
import "trix";
import { TrixEditor } from "react-trix";



function ClickSave(){
    document.addEventListener("trix-change", function(e) {
        var element = e.target
        var html = element.value
        console.log(html)
    })
}

class App extends Component {
    render() {
        return (
            <div>
            <TrixEditor />
            <button onClick={ClickSave}>
            Save
            </button>
                </div>
        );
    }
}

export default App;
