import React, { Component } from 'react';
import "./App.css";
import { FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }

    //Function to call API based on your search
    search(){
        console.log('this.state', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = BASE_URL + 'q=' + this.state.query
                          + '&type=artist&limit=1'
        console.log('FETCH_URL', FETCH_URL);
    }
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
                          placeholder="Search for an Artist"
                          value = {this.state.query}
                          onChange={event => {this.setState({query: event.target.value})}}
                          onKeyPress={event => {
                              if (event.key === 'Enter'){
                                  this.search();
                              }
                          }}
                        />
                          <Button onClick={()=>this.search()}>
                              <FontAwesomeIcon icon={faSearch} />
                          </Button>
                          
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