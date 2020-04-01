import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class OrgSearch extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  // This is called when there is typing in the input
  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="search-input">
        <div>
          <input onChange={this.handleChange} placeholder="Enter an organization to see their repositories"/>
        </div>
      </div>
    );
  }
}
