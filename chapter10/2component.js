class CounterParent extends React.Component {
    constructor(props) {
        super(props);

        console.log("constructor: Default state time!");

        this.state = {
            count: 0
        };
        this.increase = this.increase.bind(this);
    }
    increase() {
        this.setState({
            count: this.state.count + 1
        });
    }

    componentWillUpdate(newProps, newState) {
        console.log("componentWillUpadate: Component is about to update!");
    }
    componentDidUpdate(currentProps, currentState) {
        console.log("componentDidUpdate: Component just updated!");
    }
    componentDidMount() {
        console.log("componentDidMount: Component is inserted into the tree!");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount: Component is about to be removed from the DOM!");
    }


    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate: Should component update?");
        if (newState.count < 5) {
            console.log("shouldComponentUpdate: Component should update!");
            return true;
        } else {
            ReactDOM.unmountComponentAtNode(destination);
            console.log("shouldComponentUpdate: Component should not update!");
            return false;
        }
    }

    componentWillReceiveProps(newProps) {
        console.log("componentWillReceiveProps: Component will get new props!");
    }

    render() {
        var backgroundStyle = {
            padding: 50,
            border: "#33 2px dotted",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };

        return (
            <div style={backgroundStyle}>
                <Counter display={this.state.count} />
                <button onClick={this.increase}>
                    +
                </button>
            </div>
        );
    }
    
}
class Counter extends React.Component {
    render() {
        return (
            <div>
                {this.props.display}
            </div>
        );
    }
}
console.log("defaultProps: Default prop time!");
CounterParent.defaultProps = {

};

ReactDOM.render(
    <div>
        <CounterParent />
    </div>,
    document.querySelector("#container")
);