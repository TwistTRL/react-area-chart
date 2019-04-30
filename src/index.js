import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import AreaChartBundle from "./lib";

class App extends Component {
    constructor(props) {
        super(props);

        this.dataTypeToColorDict = {
            MEDS: "#C2EEF8",
            FLUSHES: "#5DD2EF",
            TPN: "#84A5D5",
            FEEDS: "#A3DBDC",
            lol434ra: "#C13BDA",
            xbo4334x: "#613BFA"
        }

        this.state = {
            data: [
                { "time": 1509426000, "temp": 35 },
                { "time": 1509429600, "temp": 34.5 },
                { "time": 1509433200, "temp": 34 },
                { "time": 1509436800, "temp": 33.5 },
                { "time": 1509440400, "temp": 33 },
                { "time": 1509444000, "temp": 32.5 },
                { "time": 1509447600, "temp": 32 },
                { "time": 1509451200, "temp": 31.5 },
                { "time": 1509454800, "temp": 31 },
                { "time": 1509458400, "temp": 30.5 },
                { "time": 1509462000, "temp": 30 },
                { "time": 1509465600, "temp": 29.5 },
                { "time": 1509469200, "temp": 29 },
                { "time": 1509472800, "temp": 28.5 },
                { "time": 1509476400, "temp": 28 },
                { "time": 1509480000, "temp": 27.5 },
                { "time": 1509483600, "temp": 27 },
                { "time": 1509487200, "temp": 26.5 },
                { "time": 1509490800, "temp": 26.4 },
                { "time": 1509494400, "temp": 26.4 },
                { "time": 1509498000, "temp": 26.4 },
                { "time": 1509501600, "temp": 26.5 },
                { "time": 1509505200, "temp": 26.8 },
                { "time": 1509508800, "temp": 27 },
                { "time": 1509512400, "temp": 27.5 },
                { "time": 1509516000, "temp": 28 },
                { "time": 1509519600, "temp": 28.5 },
                { "time": 1509523200, "temp": 29 },
                { "time": 1509526800, "temp": 29.5 },
                { "time": 1509530400, "temp": 30 },
                { "time": 1509534000, "temp": 30.5 },
                { "time": 1509537600, "temp": 31 },
                { "time": 1509541200, "temp": 31.5 },
                { "time": 1509544800, "temp": 32 },
                { "time": 1509548400, "temp": 32.5 },
                { "time": 1509552000, "temp": 33 },
                { "time": 1509555600, "temp": 33.5 },
                { "time": 1509559200, "temp": 34 },
                { "time": 1509562800, "temp": 34.5 },
                { "time": 1509566400, "temp": 35 },
                { "time": 1509570000, "temp": 35 },
                { "time": 1509573600, "temp": 35 },
                { "time": 1509577200, "temp": 35 },
                { "time": 1509580800, "temp": 35 }],
            dtWindow: [1508814800000, 1510117200000],
            width: 1200,
            height: 50
        }

        this.handleRemoveBtnCLick = this.handleRemoveBtnCLick.bind(this)
    }

    componentDidMount() {
        let self = this
        let firstTime = true
        setInterval(function () {
            self.simulateDataChange(firstTime)
            firstTime = false
        }, 1000)
    }

    handleRemoveBtnCLick() {
        let data = this.state.data
        data = data.slice(0, -1)
        this.setState({
            ...this.state,
            data: [
                { name: "Administered Medications", time: 1456293058, type: "Intake", value: 1 },
                { name: "Blood Products", time: 1456293058, type: "Output", value: 28.502415458937197 },
                { name: "Urine Output", time: 1456293058, type: "Output", value: 28.502415458937197 },
                { name: "Administered Medications", time: 1456293058, type: "Intake", value: 28.502415458937197 },
                { name: "Continuous Medications", time: 1456293058, type: "Intake", value: 28.502415458937197 },
                { name: "Administered Medications", time: 1456293060, type: "Intake", value: 28.502415458937197 },
                { name: "Blood Products", time: 1456293060, type: "Output", value: 28.502415458937197 },
                { name: "Urine Output", time: 1456293060, type: "Output", value: 28.502415458937197 },
                { name: "Administered Medications", time: 1456293060, type: "Intake", value: 28.502415458937197 },
                { name: "Continuous Medications", time: 1456293060, type: "Intake", value: 28.502415458937197 },
            ],
        })
    }

    handleSubmit = (e) => {
        if (e) e.preventDefault()
        const data = this.data.value
        var jsonStr = data.replace(/(\w+:)|(\w+ :)/g, function (s) {
            return '"' + s.substring(0, s.length - 1) + '":'
        })

        let json = JSON.parse(jsonStr)
        let newData = this.state.data
        newData.push(json)
        this.setState({
            data: [...this.state.data, json]
        })
    }

    simulateDataChange(firstTime) {
        let newMaxTime
        if (firstTime) {
            newMaxTime = (this.state.data[this.state.data.length - 1]["time"]) + 3600
        } else {
            newMaxTime = this.state.data[this.state.data.length - 1]["time"] + 3600
        }

        let newTemp = {
            time: newMaxTime,
            temp: (Math.floor(Math.random() * 20) + 20)
        }

        let newData = this.state.data
        newData = newData.slice(2)
        newData.push(newTemp)

        this.setState({
            ...this.state,
            data: [...newData, newTemp],
            dtWindow: [this.state.data[0]["time"] * 1000, newMaxTime * 1000 - 3600000]
        })
    }

    render() {
        let { data, dtWindow, width, height } = this.state
        return (
            <>
                <div>Pass in data in the form: {' { value: 1, type: "MEDS" } '}</div>
                <form onSubmit={this.handleSubmit}>
                    <input style={{
                        height: "50px",
                        width: "50%",
                        fontSize: "14pt"
                    }} placeholder="data" type="text" ref={(element) => { this.data = element }} />
                    <button>ADD DATA</button>
                </form>
                <button onClick={this.handleRemoveBtnCLick}>REMOVE DATA</button>
                <AreaChartBundle
                    data={data}
                    dtWindow={dtWindow}
                    width={width}
                    height={height} />
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

