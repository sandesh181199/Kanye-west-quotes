import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    state = { quote : ''}
    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.kanye.rest/')
        .then((response)=>{
            console.log(response)
           const { quote } = response.data;
            this.setState({quote})

        }).catch((err)=>{
            console.log(err)

        })

    }
    render() {
        const {quote} = this.state;
        return(
        <div className="app">
            <div className="card">
                <h1 className="heading">{ quote }</h1>
                < button className = "button"
                onClick = {
                    this.fetchAdvice
                } >
                    <span>
                        Get the lyrics !
                    </span>
                </button>
            </div>

        </div>
        )
    }
}
 export default App;