import * as React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import './App.css';
import logo from './logo.svg';
import { showType } from './store'


interface StateProps {
  count: number
}

interface OwnProps {
  count: number
}

interface DispatchProps {
  showType: any
}

type Props = OwnProps & StateProps & DispatchProps

class App extends React.Component<Props, {}> {
  public componentDidMount() {
    this.props.showType()
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>{this.props.count}</h2>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state: number): StateProps => ({ count: state })
const mapDispatchToProps = (dispatch: Dispatch<>): DispatchProps => {
  return {
    showType: () => dispatch(showType())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
