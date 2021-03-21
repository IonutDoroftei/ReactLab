import React, {Component} from 'react';
import axios from 'axios';

class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3004/people")
        .then(res => {
            this.setState({people : res.data});
        })
        
    }

    render() {
        
        return(
           <div className="body-page-content">
               <ul>
                   {this.state.people.map(p=><li>{p.name}</li>)}
               </ul>
           </div>
        )
    }
}

export default PeoplePage