import React, { PureComponent } from "react";

class AreaChartYAxis extends PureComponent {
    constructor(props) {
        super(props);
        this.canvasW = this.props.canvasW
        this.canvasH = this.props.canvasH
        this.minY = this.props.minY
        this.maxY = this.props.maxY
    }

    componentDidMount() {
        this.areaChartYAxisCanvas = this.refs.areaChartYAxisCanvas
        this.areaChartYAxisCtx = this.areaChartYAxisCanvas.getContext("2d")
        this.drawYAxis(this.areaChartYAxisCtx);
    }

    componentDidUpdate() {
        this.minY = this.props.minY
        this.maxY = this.props.maxY
        this.drawYAxis(this.areaChartYAxisCtx);
    }

    toDomYCoord_Linear = (height, minY, maxY, dataY) => {
        return height - (dataY - minY) / ((maxY - minY) / height);
    }

    drawYAxis = (ctx) => {
        let yRange = this.props.yRange
        // clear canvas
        ctx.canvas.width = ctx.canvas.width

        // draw the y-axis line
        ctx.lineWidth = 3
        ctx.moveTo(this.canvasW, 5)
        ctx.lineTo(this.canvasW, this.canvasH - 5)
        ctx.stroke()

        // label styling
        ctx.font = "600 14px MuseoSans, Sans";
        ctx.textBaseline = "middle";
        ctx.fillStyle = '#373c62'

        let minMaxDiff = yRange[1] - yRange[0]
        let xOffset = 25

        // draw the label
        let posDomY = this.toDomYCoord_Linear(this.canvasH, yRange[0] - minMaxDiff * 0.3, yRange[1] + minMaxDiff * 0.4, yRange[0])
        if (yRange[0] < 100) {
            xOffset = 25
        }
        if (yRange[0] < 10) {
            xOffset = 15
        }
        
        ctx.fillText(yRange[0], this.canvasW - xOffset, posDomY)
        posDomY = this.toDomYCoord_Linear(this.canvasH, yRange[0] - minMaxDiff * 0.3, yRange[1] + minMaxDiff * 0.4, yRange[1])
        if (yRange[1] < 100) {
            xOffset = 25
        }
        if (yRange[1] < 10) {
            xOffset = 15
        }
        ctx.fillText(yRange[1], this.canvasW - xOffset, posDomY)
        ctx.stroke()
    }

    render() {
        const styles = {
            canvas: {
                position: "absolute"
            }
        }

        return (
            <canvas
                className="area-chart-y-axis"
                ref="areaChartYAxisCanvas"
                style={styles.canvas}
                width={this.canvasW}
                height={this.canvasH}
            />
        )
    }
}

export default AreaChartYAxis