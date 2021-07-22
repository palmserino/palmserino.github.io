import React, { Component } from 'react';

class App extends Component {
    state = {
        usernames : []
    };


    async componentDidMount() {
        try { 
            const res = await fetch('http://127.0.0.1:8000/api/shopping_list');
            const usernames = await res.json();
            this.setState({
                usernames
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return(
            <div>
                {this.state.usernames.map(item => (
                    <div key={item.id}>
                        <h1>{item.name}</h1>  
                        <h2>{item.item}</h2>                  
                    </div>
                ))}
            </div>
       );
    }
}

export default App