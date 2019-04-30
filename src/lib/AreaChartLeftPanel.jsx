import React, { PureComponent } from "react";
// import "./TempChartLeftPanel.css"

class AreaChartLeftPanel extends PureComponent {
    constructor(props) {
        super(props);
        this.canvasW = this.props.canvasW
        this.canvasH = this.props.canvasH
    }

    render() {
        let { panelHeight, panelWidth, label, colorString } = this.props

        const styles = {
            leftPanel: {
                height: panelHeight + "px",
                width: panelWidth + "px",
                backgroundColor: colorString
            },
            areaChartLabel: {
                marginLeft: "15%",
                lineHeight: panelHeight + "px",
                color: '#373c62',
                fontWeight: '800',
                fontFamily: 'MuseoSans, Sans'
            }
        }

        return (
            <div className="area-chart-left-panel"
                style={styles.leftPanel}>
                <div className="area-chart-label"
                    style={styles.areaChartLabel}> {label} </div>
            </div>
        )
    }
}

export default AreaChartLeftPanel