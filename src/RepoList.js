import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import RepoListItem from "./RepoListItem";

export default class RepoList extends PureComponent {
  static propTypes = {
    repos: PropTypes.array,
    org: PropTypes.string
  };

  // This is rendered when we've got search results
  render() {
    const { repos, org } = this.props;
    // if repos is set but empty show empty case
    if (repos && repos.length === 0) {
      return (<div className="repo-list"><ul><li className="list-item">No repositories for this organization</li></ul></div>);
    } else if (repos) {
      // map the list of repos to the repo list items
      return (
        <div className="repo-list">
          <ul>
            {repos.map(item => (
              <RepoListItem item={item}  key={item.id} org={org}></RepoListItem>
            ))}
          </ul>
        </div>
      );
    } else {
      // there's no text in the search input, show nothing
      return (null);
    }
  }
}
