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
        this.cpbYAxisCanvas = this.refs.cpbYAxisCanvas
        this.cpbYAxisCtx = this.cpbYAxisCanvas.getContext("2d")

        this.drawYAxis(this.cpbYAxisCtx);

    }

    componentDidUpdate() {
        this.minY = this.props.minY
        this.maxY = this.props.maxY
        this.drawYAxis(this.cpbYAxisCtx);
    }

    toDomYCoord_Linear = (height, minY, maxY, dataY) => {
        return height - (dataY - minY) / ((maxY - minY) / height);
    }

    drawYAxis = (ctx) => {
        let labels = [36, 18]
        // clear canvas
        ctx.canvas.width = ctx.canvas.width

        // draw the y-axis line
        ctx.lineWidth = 3
        ctx.moveTo(this.canvasW, 5)
        ctx.lineTo(this.canvasW, this.canvasH - 5)
        ctx.stroke()

        // label styling
        ctx.font = "600 14px MuseoSans";
        ctx.textBaseline = "middle";
        ctx.fillStyle = '#373c62'

        for (let i = 0; i < labels.length; i++) {
            let posDomY = this.toDomYCoord_Linear(this.canvasH, 12, 43, labels[i])
            // ctx.moveTo(this.canvasW - 10, posDomY)
            // ctx.lineTo(this.canvasW, posDomY)
            ctx.fillText(labels[i], this.canvasW - 25, posDomY)
        }
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
                className="cpb-y-axis"
                ref="cpbYAxisCanvas"
                style={styles.canvas}
                width={this.canvasW}
                height={this.canvasH}
            />

        )
    }
}

export default AreaChartYAxis