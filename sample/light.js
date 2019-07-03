class LightningCounter extends React.Component {
    
    /* 초기 상태 값 설정 */
    constructor(props) {
        super(props);

        this.state = {
            strikes: 0
        };
    }
    render() {
        return (
            <h1>{this.state.strikes}</h1>
        );
    }
}

class LightningCounterDisplay extends React.Component {
    render() {
        var divStyle = {
            width: 250,
            textAlign: "center",
            backgroundColor: "black",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#999",
            borderRadius: 10
        };

        return (
            <div style={divStyle}>
                <LightningCounter />
            </div>
        );
    }
}

ReactDOM.render(
    <LightningCounterDisplay />, document.querySelector("#container")
);