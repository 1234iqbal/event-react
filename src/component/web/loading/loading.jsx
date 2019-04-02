import React, { Component } from "react";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  alignt-items: center;
  padding-right: 50%;
`;

export default class loading extends Component {
  render() {
    return (
      <div>
        <center>
          <ClipLoader
            loading={this.props.loading}
            css={override}
            sizeUnit={"px"}
            size={150}
            color={"#123abc"}
            className="text-center"
          />
        </center>
      </div>
    );
  }
}
