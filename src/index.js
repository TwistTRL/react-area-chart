import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import AreaChartBundle from "./lib";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { "time": 1509426000, "value": 35 },
                { "time": 1509429600, "value": 34.5 },
                { "time": 1509433200, "value": 34 },
                { "time": 1509436800, "value": 33.5 },
                { "time": 1509440400, "value": 33 },
                { "time": 1509444000, "value": 32.5 },
                { "time": 1509447600, "value": 32 },
                { "time": 1509451200, "value": 31.5 },
                { "time": 1509454800, "value": 31 },
                { "time": 1509458400, "value": 30.5 },
                { "time": 1509462000, "value": 30 },
                { "time": 1509465600, "value": 29.5 },
                { "time": 1509469200, "value": 29 },
                { "time": 1509472800, "value": 28.5 },
                { "time": 1509476400, "value": 28 },
                { "time": 1509480000, "value": 27.5 },
                { "time": 1509483600, "value": 27 },
                { "time": 1509487200, "value": 26.5 },
                { "time": 1509490800, "value": 26.4 },
                { "time": 1509494400, "value": 26.4 },
                { "time": 1509498000, "value": 26.4 },
                { "time": 1509501600, "value": 26.5 },
                { "time": 1509505200, "value": 26.8 },
                { "time": 1509508800, "value": 27 },
                { "time": 1509512400, "value": 27.5 },
                { "time": 1509516000, "value": 28 },
                { "time": 1509519600, "value": 28.5 },
                { "time": 1509523200, "value": 29 },
                { "time": 1509526800, "value": 29.5 },
                { "time": 1509530400, "value": 30 },
                { "time": 1509534000, "value": 30.5 },
                { "time": 1509537600, "value": 31 },
                { "time": 1509541200, "value": 31.5 },
                { "time": 1509544800, "value": 32 },
                { "time": 1509548400, "value": 32.5 },
                { "time": 1509552000, "value": 33 },
                { "time": 1509555600, "value": 33.5 },
                { "time": 1509559200, "value": 34 },
                { "time": 1509562800, "value": 34.5 },
                { "time": 1509566400, "value": 35 },
                { "time": 1509570000, "value": 35 },
                { "time": 1509573600, "value": 35 },
                { "time": 1509577200, "value": 35 },
                { "time": 1509580800, "value": 35 }],
            dtWindow: [1508814800000, 1510117200000],
            width: 1200,
            height: 50,
            yRange: [18, 36],
            label: "CPB",
            colorString: "#fffcec",
            areaChartBackgroundColor: "#fff3e4"
        }

        this.handleRemoveBtnCLick = this.handleRemoveBtnCLick.bind(this)
    }

    componentDidMount() {
        let self = this
        let firstTime = true
        setInterval(function () {
            self.simulateDataChange(firstTime)
            firstTime = false
        }, 100)
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
            value: (Math.floor(Math.random() * 20) + 20)
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
        let { data, dtWindow, width, height, yRange, label, colorString, areaChartBackgroundColor } = this.state
        let dataClone = [...data]

        return (
            <>
                <div>Pass in data in the form: {' { time: 1509534000, value: 35 } '}</div>
                <form onSubmit={this.handleSubmit}>
                    <input style={{
                        height: "50px",
                        width: "50%",
                        fontSize: "14pt"
                    }} placeholder="data" type="text" ref={(element) => { this.data = element }} />
                    <br></br>
                    <button>ADD DATA</button>
                </form>
                <button onClick={this.handleRemoveBtnCLick}>REMOVE DATA</button>
                <AreaChartBundle
                    data={data}
                    dtWindow={dtWindow}
                    width={width}
                    height={height}
                    yRange={yRange}
                    label={label}
                    colorString={colorString}
                    areaChartBackgroundColor={"white"} />
                <div>
                    {dataClone.reverse().map((d, i) => {
                        return <div key={d.time + i}>{d.value}</div>
                    })}
                </div>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

