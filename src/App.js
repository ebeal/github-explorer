import React, { PureComponent } from "react";
import './App.css';
import OrgSearch from './OrgSearch';
import RepoList from './RepoList';
import Octicon, { LogoGithub, MarkGithub } from '@primer/octicons-react';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      repos: null,
      org: null
    };
  }

  // This does the majority of the work for fetching and filtering the repos
  // Called in OrgSearch when the user types anything
  // This should be debounced
  handleSearchChange = event => {
    const org = event.target.value;
    // if the user has typed something
    if (org !== '') {
      // build the url for the given org
      let url = new URL(`https://api.github.com/orgs/${org}/repos`);
      url.search = new URLSearchParams({
        type: "sources",
        sort: "pushed"
      });

      //call the fetch with the constructed params
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            // if the result has a message property this call failed
            // we should still set the org but we clear the repos
            if (result.message) {
              this.setState({
                repos: [],
                org: org
              });
            } else {
              // we've got results set the repo and org state with the results
              this.setState({
                repos: result,
                org: org
              });
            }
          },
          (error) => {
            // something went wrong log it and clear the repos
            console.log(error)
            this.setState({
              repos: null,
              org: org
            });
          }
        )
    } else {
      // no user input, reset repos to null
      this.setState({
        repos: null,
        org: org
      });
    }
  };

  render() {
    const { repos, org } = this.state;
    return (
      <div className="main-content">
        <h1>
          {/* These are the github icons, these were very easy to use */}
          <Octicon className="header-icon" icon={MarkGithub} size='medium' />
          <Octicon className="header-icon" icon={LogoGithub} size='medium' />
           Repository Explorer
        </h1>
        {/* Show the search box and call handle search on change */}
        <OrgSearch textChange={this.handleSearchChange} />
        {/* render the list of repos */}
        <RepoList repos={repos} org={org}></RepoList>
      </div>
    );
  }
}
