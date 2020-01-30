import React, { Component } from "react";
import Counters from "./counters";

class dataTable extends React.Component {
  state = {
    loading: true,
    dataDisplay: null
  };
  Dod = {};
  displayData = {};

  render() {
    {
      return (
        <div>
          <h1>Display Information</h1>
          {this.state.loading || !this.state.displayData ? (
            <div>loading....</div>
          ) : (
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Body</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {this.state.displayData.map((listValue, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{listValue.id}</th>
                        <td>{listValue.title}</td>
                        <td>{listValue.body}</td>
                      </tr>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          )}
        </div>
      );
    }
  }

  async componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        // this.Dod = data;
        this.setState({ displayData: data, loading: false });
      })
      .catch(console.log);
  }
}

export default dataTable;
