import React, { Component, Fragment } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import PropTypes from "prop-types";
import { STYLES_MAP, ZOOM } from "./constants";
import { formatNumberDecimal } from "./utils";
import "./styles.css";

class Map extends Component {
  state = { zoom: 2 };

  handleZoomChange = zoom => this.setState({ zoom });

  handleZoomIn = () => this.handleZoomChange(this.state.zoom + ZOOM);

  handleZoomOut = () => this.handleZoomChange(this.state.zoom - ZOOM);

  handleResetZoom = () => this.setState({ zoom: 2 });

  render() {
    const { width, height, center, scale, currency, map } = this.props.data;
    return (
      <Fragment>
        <ComposableMap
          projectionConfig={{ scale }}
          width={width}
          height={height}
        >
          <ZoomableGroup zoom={this.state.zoom} center={center}>
            <Geographies geography={map}>
              {(geographies, projection) =>
                geographies.map(geography => {
                  const geographyValue = `${currency} ${formatNumberDecimal(
                    geography.properties.VALUE
                  )}`;
                  {MAP_JSON.objects.gadm36_ARG_1.geometries.map((geometry) => (
                    <StyledGeography
                      key={geometry.properties.NAME}
                      data-tip={geometry.properties.EMAIL}
                      geography={geometry}
                      projection={projection}
                      precision={0.5}
                      color={geometry.properties.COLOR}
                    />
                  ))}
                  return (
                    <Geography
                      key={geography.properties.NAME}
                      data-tip={`${
                        geography.properties.EMAIL
                      }`}
                      geography={geography}
                      projection={projection}
                      precision={0.5}
                      style={{
                        default: geography.properties.default,
                        hover: geography.properties.default,
                        pressed: geography.properties.default
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <ReactTooltip />
      </Fragment>
    );
  }
}

Map.defaultProps = {
  width: 600,
  height: 500,
  center: 0,
  scale: 350,
  zoom: 0,
  currency: ""
};

Map.propTypes = {
  data: PropTypes.object
};

export default Map;
