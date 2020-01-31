import React from 'react';
import './App.css';
import FetchButton from './components/FetchButton';
import TableRowData from './components/TableRowData ';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tableValue: Array(6),
      buttonPressed: false,
      apiResult: [],
      tables: Array()
    };
  }

  render() {
    //function that will handle the API
    //the result willed be reveres and then stored in the apiResult
    const handleAPI = (e) => {
      fetch("https://factory-application-dev.azurewebsites.net/home/testendpoint")
        .then(res => res.json())
        .then((result) => {
          this.setState({
            isLoaded: true,
            apiResult: result.reverse()
          });
        },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          });
    }

    //each fetch will store the reversed array into an array called tables
    //which will be used to render it on the page
    this.state.tables.unshift(this.state.apiResult);

    return (
      <div className="App">
        <header className="App-header">
          <FetchButton fetch={handleAPI} />
          {/* each array in tables array will be sent to the TableRowData component */}
          <table>
            {this.state.tables.map(function (element) {
              return <TableRowData rowValues={element} />
            })}
          </table>
        </header>
      </div>
    );
  }
}

export default App;
