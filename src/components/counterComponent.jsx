import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: []
  };

  displayData = {};

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p></p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    this.state.value++;
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);
    let classes = this.getBadgeMethode();
    //this.componentDidMount();
    return (
      <React.Fragment>
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-small"
        >
          Increment
        </button>
        {/* Table for API response */}

        {/* End of Table */}
        {this.renderTags()}
      </React.Fragment>
     
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        this.setState({ displayData: data });
      })
      .catch(console.log);
  }

  getBadgeMethode() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
