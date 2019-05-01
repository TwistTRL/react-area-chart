## Available Scripts
```javascript
<AreaChartBundle
                    data={data}
                    dtWindow={dtWindow}
                    width={width}
                    height={height}
                    yRange={yRange}
                    label={label}
                    colorString={colorString}
                    areaChartBackgroundColor={"white"} />

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
```
