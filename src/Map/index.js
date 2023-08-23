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
import "./styles.css";

const StyledGeography = styled(Geography)`
  ${({ color, hover, shadow }) => `
    fill: ${color};
    stroke: #909190;
    stroke-width: 0.50;
    outline: none;
    filter: ${shadow};
    &:hover {
      fill: ${hover};
    }
  `}
`;

class Map extends Component {
  state = { zoom: 3 };

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
                  return (
                    <StyledGeography
                      key={geography.properties.NAME}
                      data-tip={`${geography.properties.NAME}, ${geography.properties.EMAIL}` } //[geography.properties.NAME, geography.properties.EMAIL]
                      geography={geography}
                      projection={projection}
                      precision={0.5}
                      color={geography.properties.COLOR}
                      hover={geography.properties.HOVER}
                      filter={geography.properties.SHADOW}
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

Map.propTypes = {
  data: PropTypes.object
};

export default Map;