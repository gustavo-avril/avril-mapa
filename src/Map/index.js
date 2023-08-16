import React, { Component, Fragment } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ZOOM } from "./constants";
import { formatNumberDecimal } from "./utils";
import "./styles.css";

const StyledGeography = styled(Geography)`
  ${({ color }) => `
    fill: ${color};
    stroke: #b1b1b0;
    strokeWidth: 0.25;
    outline: none;
  `}
`;

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
                  return (
                    <StyledGeography
                      key={geography.properties.NAME}
                      data-tip={[geography.properties.NAME, geography.properties.EMAIL]}
                      geography={geography}
                      projection={projection}
                      precision={0.5}
                      color={geography.properties.COLOR}
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