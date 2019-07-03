class Counter extends React.Component {
    render() {
        return (
            <div>
                {this.props.display}
            </div>
        );
    }
}

class CounterParent extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            count: 0
        };

        this.increase = this.increase.bind(this);
    }
    increase() {
        this.setState({
            count: this.state.count+1
        })
    }
    render() {
        return (
            <div>
                <Counter display={this.state.count}/>
                <button onClick={this.increase}> + </button>
            </div>
        );
    }
}
ReactDOM.render(
    <div>
        <CounterParent/>
    </div>,
    document.querySelector("#container")
);