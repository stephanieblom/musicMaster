import React, { Component } from 'react';
import "./App.css";
import { FormGroup, FormControl, InputGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
    render(){
        return (
            <div className="App">
                <div className="App-title">
                    Music Master from App
                </div>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                          type="text" 
                          placeholder="Search for an Artist"/>
                          <FontAwesomeIcon icon={faSearch} />
                    </InputGroup>
                </FormGroup>
                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        )
    }

}

export default App;