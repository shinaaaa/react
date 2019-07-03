class LightningCounter extends React.Component {

    /* 초기 상태 값 설정 */
    constructor(props) {
        super(props);

        this.state = {
            strikes: 0,
            msg: "번개횟수"
        };
        /* bind : 컴포넌트에 이벤트 연결 */
        this.timerTick = this.timerTick.bind(this);
    }
    /*  setState : 객체의 값을 갱신할 수 있게 해준다. */
    /* timerTick() {
        this.setState({
            strikes: this.state.strikes + 100
        });
    } */
    timerTick = () => {
        this.setState({
            strikes: this.state.strikes + 100
        });
    }
    /*  componentDidMount : 컴포넌트가 렌더링(마운트)된 후에 실행 */
    componentDidMount() {   //render 뒤에 react 엔진이 자동으로 호출
        setInterval(this.timerTick, 1000);
    }
    render() {
        return (
            <h1>{this.state.msg} {this.state.strikes}</h1>
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