import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Octicon, { GitCommit } from "@primer/octicons-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default class CommitItem extends PureComponent {
  static propTypes = {
    commitInfo: PropTypes.object
  };

  render() {
    // This renders the individual commit, it formats the date using the relative time function
    // The most recent date for commits does not line up with the repository updated or pushed dates always
    // This is rendered in a sentence format, it may not be the most scannable format but I think works here
    const { commitInfo } = this.props;
    return (
      <div className="commit-item">
        <div className="commit-message">
          <Octicon icon={GitCommit} verticalAlign="middle" /> <span className="list-cell-value">{commitInfo.commit.message}</span>
        </div>
        <div className="commit-author">Committed by {commitInfo.commit.author.name}</div>
        <div className="time">{dayjs(commitInfo.commit.author.date).fromNow()}</div>
      </div>
    )
  }
}
