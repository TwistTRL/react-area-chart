import React, { PureComponent } from "react";
// import "./TempChartLeftPanel.css"
import { PlotContainer, PlotSubContainer } from "./PlotContainers/PlotContainers";
import AreaChartLeftPanel from "./AreaChartLeftPanel";
import AreaChart from "./AreaChart";
import AreaChartYAxis from "./AreaChartYAxis";
import DateVerticalGridLines from "./DateVerticalGridLines";
import PropTypes from 'prop-types';

const minY = 0;
const maxY = 200;
const LEFT_WIDTH = 200
const RIGHT_WIDTH = 0
const TOP_HEIGHT = 0
const BOTTOM_HEIGHT = 0

class AreaChartBundle extends PureComponent {
    filterDataToDtWindow(data) {
        let minX = this.props.dtWindow[0] / 1000
        let maxX = this.props.dtWindow[1] / 1000
        let filteredData = data
        let timeSet = new Set()
        let timeArr = []

        if (data) {
            if (minX) {
                // filter out the data that is within the dtWindow range
                filteredData = filteredData.filter(function (o) {
                    if (o.time <= maxX && o.time >= minX) {
                        if (!timeSet.has(o.time)) {
                            timeSet.add(o.time)
                            timeArr.push(o.time)
                        }
                    }
                    return o.time <= maxX && o.time >= minX
                })
            }
        }

        return [filteredData, timeArr]
    }

    // unix time in ms
    getDaysBetweenDates(d0, d1) {
        var msPerDay = 8.64e7

        // Copy dates so don't mess them up
        var x0 = new Date(d0)
        var x1 = new Date(d1)

        // Set to noon - avoid DST errors
        x0.setHours(12, 0, 0)
        x1.setHours(12, 0, 0)

        // Round to remove daylight saving errors
        return Math.round((x1 - x0) / msPerDay)
    }

    render() {
        let { dtWindow, width, height, yRange, data, label, colorString, areaChartBackgroundColor } = this.props
        let plotWidth = width - LEFT_WIDTH - RIGHT_WIDTH
        let plotHeight = height - TOP_HEIGHT - BOTTOM_HEIGHT
        let minXInMSecs = 0, maxXInMSecs = 0

        if (dtWindow) {
            minXInMSecs = dtWindow[0]
            maxXInMSecs = dtWindow[1]
        }

        const styles = {
            leftPanelGradShadow: {
                position: "absolute",
                top: 0,
                left: LEFT_WIDTH - 52,
                height: height,
                width: 70,
                opacity: 1,
                backgroundImage: "linear-gradient(to right, black, rgba(255,255,255,0))"
            },
            mainPlotWrapDiv: {
                zIndex: -1,
                backgroundColor: areaChartBackgroundColor
            }
        }
        // data = this.filterDataToDtWindow(data)

        return (
            <PlotContainer width={width} height={height}
                leftWidth={LEFT_WIDTH} plotWidth={plotWidth} rightWidth={RIGHT_WIDTH}
                topHeight={TOP_HEIGHT} plotHeight={plotHeight} bottomHeight={BOTTOM_HEIGHT} >
                {/*Row TOP*/}
                {/*Col LEFT*/}
                <PlotSubContainer>
                </PlotSubContainer>
                {/*Col PLOT*/}
                <PlotSubContainer>
                </PlotSubContainer>
                {/*Col RIGHT*/}
                <PlotSubContainer>
                </PlotSubContainer>
                {/*Row PLOT*/}
                {/*Col LEFT*/}
                <PlotSubContainer>
                    <div style={styles.leftPanelGradShadow}>
                    </div>
                    <AreaChartLeftPanel label={label} colorString={colorString} panelWidth={LEFT_WIDTH} panelHeight={height} />
                    <AreaChartYAxis canvasH={height} canvasW={LEFT_WIDTH} yRange={yRange} />
                </PlotSubContainer>
                {/*Col PLOT*/}
                <div style={styles.mainPlotWrapDiv}>
                    <PlotSubContainer>
                        {/* Main plot area interaction */}
                        <DateVerticalGridLines width={plotWidth} height={plotHeight} minX={minXInMSecs} maxX={maxXInMSecs} />
                        <AreaChart data={data} yRange={yRange} width={plotWidth} height={plotHeight} dtWindow={dtWindow} />
                    </PlotSubContainer>
                </div>
                {/*Col RIGHT*/}
                <PlotSubContainer>
                </PlotSubContainer>
                {/*Row BOTTOM*/}
                {/*Col LEFT*/}
                <PlotSubContainer>
                </PlotSubContainer>
                {/*Col PLOT*/}
                <PlotSubContainer>
                </PlotSubContainer>
                {/*Col RIGHT*/}
                <PlotSubContainer>
                </PlotSubContainer>
                {/*Other stuffs that ignore grid layut*/}
            </PlotContainer>
        )
    }
}

AreaChartBundle.propTypes = {
    data: PropTypes.array.isRequired,
    dtWindow: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    yRange: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    colorString: PropTypes.string.isRequired,
    areaChartBackgroundColor: PropTypes.string.isRequired
}

export default AreaChartBundle