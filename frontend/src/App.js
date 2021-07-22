import React, { Component } from "react"

const slItems = [
  {
    name: 1,
    item: "Banana",
    done: true
  },

  {
    name: 2,
    item: "Chips",
    done: true
  },

  {
    name: 3,
    item: "Ice cream",
    done: true
  },
];

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

        async componentDidMount() {
          try {
            const res = await fetch('http://localhost:8000/api/todos/');
            const shoppingList = await res.json();
            this.setState({
              shoppingList
            });
          } catch (e) {
            console.log(e);
        }
        }
        renderItems = () => {
          const { viewCompleted } = this.state;
          const newItems = this.state.todoList.filter(
            item => item.done === viewCompleted
          );
          return newItems.map(item => (
            <li 
              key={item.name}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span 
                className={`todo-title mr-2 ${
                  this.state.viewCompleted ? "completed-todo" : ""
                }`}
                title={item.item}
                >
                  {item.title}
                </span>
            </li>
          ));
        };
    };

    render() {
      return (
        <main className="content">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
              {this.state.slItems.map(snack => (
              <div>
                <h1>{snack.name}</h1>
                <span>{snack.item}</span>
              </div>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      )
    }
  }

export default App;
