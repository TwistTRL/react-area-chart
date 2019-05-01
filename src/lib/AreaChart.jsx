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
        this.areaChartCanvas = this.refs.areaChartCanvas
        this.areaChartCtx = this.areaChartCanvas.getContext("2d")
        this.drawCPBChart(this.areaChartCtx)
    }

    componentDidUpdate() {
        this.drawCPBChart(this.areaChartCtx)
    }

    drawCPBChart = (ctx) => {
        // let { minX, maxX, minY, maxY, data } = this.props
        ctx.canvas.width = ctx.canvas.width
        let domX
        let minX = this.props.dtWindow[0] / 1000
        let maxX = this.props.dtWindow[1] / 1000
        let height = this.canvasH
        let data = this.props.data
        let yRange = this.props.yRange

        // first plot the stroke
        ctx.lineWidth = 4
        ctx.strokeStyle = "rgba(128,128,128,0.7)"
        let minMaxDiff = yRange[1] - yRange[0]
        data.forEach(d => {
            domX = toDomXCoord_Linear(this.canvasW, minX, maxX, d["time"])
            let domY = toDomYCoord_Linear(this.canvasH, yRange[0] - minMaxDiff * 0.3, yRange[1] + minMaxDiff * 0.4, d["value"])
            ctx.lineTo(domX, domY)
        })
        ctx.stroke()
        // now define the bottom of the filled area
        const maxY = height //Math.max.apply(null, pts.map(pt=>pt.y));
        // draw the missing parts
        domX = toDomXCoord_Linear(this.canvasW, minX, maxX, data[data.length - 1]["time"])
        ctx.lineTo(domX, maxY) // bottom-right
        domX = toDomXCoord_Linear(this.canvasW, minX, maxX, data[0]["time"])
        ctx.lineTo(domX, maxY) // bottom-left
        ctx.fillStyle = "rgba(192,192,192,0.4)"
        ctx.fill() // will close the path for us
    }

    render() {
        // let minXInSecs = minX / 1000, maxXInSecs = maxX / 1000
        return (
            <canvas
                className="area-chart-canvas"
                ref="areaChartCanvas"
                width={this.canvasW}
                height={this.canvasH}
            />
        )
    }
}

export default AreaChart