import React, { PureComponent } from "react";
// import "./TempChart.css"
import {
    toDomYCoord_Linear,
    toDomXCoord_Linear,
    fromDomXCoord_Linear
} from "./PlottingUtils"

class AreaChart extends PureComponent {
    constructor(props) {
        super(props);
        this.canvasW = this.props.width
        this.canvasH = this.props.height
    }

    componentDidMount() {
        this.cpbChartCanvas = this.refs.cpbChartCanvas
        this.cpbChartCtx = this.cpbChartCanvas.getContext("2d")
        this.drawCPBChart(this.cpbChartCtx)
    }

    componentDidUpdate() {
        this.drawCPBChart(this.cpbChartCtx)
    }

    drawCPBChart = (ctx) => {
        // let { minX, maxX, minY, maxY, data } = this.props
        ctx.canvas.width = ctx.canvas.width
        let domX
        let minX = this.props.dtWindow[0] / 1000
        let maxX = this.props.dtWindow[1] / 1000
        let height = this.canvasH
        let data = this.props.data

        // first plot the stroke
        ctx.lineWidth = 4
        ctx.strokeStyle = "rgba(128,128,128,0.7)"
        data.forEach(d => {
            domX = toDomXCoord_Linear(this.canvasW, minX, maxX, d["time"])
            let domY = toDomYCoord_Linear(this.canvasH, 12, 43, d["temp"])
            ctx.lineTo(domX, domY)
        })
        ctx.stroke()
        // now define the bottom of the filled area
        const maxY = height; //Math.max.apply(null, pts.map(pt=>pt.y));
        // draw the missing parts
        domX = toDomXCoord_Linear(this.canvasW, minX, maxX, data[data.length - 1]["time"])
        ctx.lineTo(domX, maxY); // bottom-right
        domX = toDomXCoord_Linear(this.canvasW, minX, maxX, data[0]["time"])
        ctx.lineTo(domX, maxY); // bottom-left
        ctx.fillStyle = "rgba(192,192,192,0.4)"
        ctx.fill(); // will close the path for us
    }

    render() {
        // let minXInSecs = minX / 1000, maxXInSecs = maxX / 1000
        return (
            <canvas
                className="cpb-chart-canvas"
                ref="cpbChartCanvas"
                width={this.canvasW}
                height={this.canvasH}
            />
        )
    }
}

export default AreaChart