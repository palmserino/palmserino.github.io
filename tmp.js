import React, { Component } from "react"

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewCompleted: false,
        activeItem: {
          name: "",
          item: "",
          done: false
        },
        shoppingList: []
        };
    }

    async componentDidMount() {
      try {
        const res = await fetch('http://localhost:8000/api/shopping_list/');
        const shoppingList = await res.json();
        this.setState({
          shoppingList
        });
      } catch (e) {
        console.log(e);
      }
    }
    
    renderItems = () => {
          const newItems = this.state.shoppingList
          console.log(newItems)
          return newItems.map(item => (
            <p>{item.name}</p>
          )
      )
    }

    render() {
      return (
        <main className="content">
          <div className="row">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
              <div className="card p-3">
                <ul className="list-group list-group-flush">
                  {this.renderItems()}
                </ul>
              </div>
            </div>
          </div>
        </main>
      )
    }
}


export default App;
