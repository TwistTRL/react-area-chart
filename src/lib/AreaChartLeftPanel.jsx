import React, { PureComponent } from "react";
// import "./TempChartLeftPanel.css"

class AreaChartLeftPanel extends PureComponent {
    constructor(props) {
        super(props);
        this.canvasW = this.props.canvasW
        this.canvasH = this.props.canvasH
    }

    componentDidMount() {
        // this.meterCanvas = this.refs.meterCanvas
        // this.meterCtx = this.meterCanvas.getContext("2d")
    }

    componentDidUpdate() {

    }

    render() {
        let { panelHeight, panelWidth } = this.props

        const styles = {
            leftPanel: {
                height: panelHeight + "px",
                width: panelWidth + "px",
                backgroundColor: "#fffcec"
            },
            cpbLabel: {
                position: "absolute",
                top: "25%",
                left: "10%",
                color: '#373c62',
                fontWeight: '800'
            }
        }

        return (
            <div className="cpb-left-panel"
                style={styles.leftPanel}>
                <div className="cpb-label"
                    style={styles.cpbLabel}> CPB </div>
            </div>
        )
    }
}

export default AreaChartLeftPanel