import React, { PureComponent } from "react";
import Octicon, { Repo, Star, Pulse, IssueOpened, Eye } from "@primer/octicons-react";
import CommitItem from './CommitItem';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);


export default class RepoListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      commitList: null,
      loading: false
    };
  }

  // This function is called when the user clicks on a repo
  toggleOpen = () => {
    const currentState = this.state.open;
    // The repo list item is closed
    if (!currentState) {
      // If we already have the commit list from a previous call, just open the view
      if (this.state.commitList) {
        this.setState({ open: true })
      // If we aren't already loading get the commits, this prevents duplicate calls
      } else if (!this.state.loading) {
        // well if we weren't loading we are now
        this.setState({ loading: true });

        // The org property is passed from the app component through to here to be used in this call
        let url = new URL(`https://api.github.com/repos/${this.props.org}/${this.props.item.name}/commits`)
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              // If we have commits returned, set the state and open the list
              if (result.length) {
                this.setState({ commitList: result, open: true })
              }
            },
            (error) => {
              console.log(error)
            }
        ).finally(() => {
          // We're done here finish loading
          this.setState({ loading: false });
        })
      }
    } else {
      // The list is already opened, close it
      this.setState({ open: false });
    }
  };

  render() {
    const { item } = this.props;
    // This is the repo template, it has a nested commit list
    return (
      <div onClick={this.toggleOpen} className="list-item">
        <li>
          <span className="list-cell repo-name"><Octicon icon={Repo} /> <span className="list-cell-value">{item.name}</span></span>
          <span className="list-cell"><Octicon icon={IssueOpened} /> <span className="list-cell-value">{item.open_issues}</span></span>
          <span className="list-cell"><Octicon icon={Eye} /> <span className="list-cell-value">{item.watchers}</span></span>
          <span className="list-cell"><Octicon icon={Star} /> <span className="list-cell-value">{item.stargazers_count}</span></span>
          <span className="list-cell pulse"><Octicon icon={Pulse} /> <span className="list-cell-value">{dayjs(item.pushed_at).fromNow()}</span></span>
        </li>
        {/* simple loading state */}
        {this.state.loading && (<div className="loading-message">Loading...</div>)}
        {this.state.open &&
          this.state.commitList.map(commit => (
            <CommitItem commitInfo={commit} key={commit.node_id}></CommitItem>
          ))
        }
      </div>
    )
  };
}
