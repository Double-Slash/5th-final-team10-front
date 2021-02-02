import logo from './logo.svg';
import './App.css';
import SearchResultList from './components/SearchResultList'
import GridSurveyPreview from './components/GridSurveyPreview'
import ClosedSurvey from './pages/ClosedSurvey'
import ResponseSurvey from './pages/ResponseSurvey'
import SurveyResult from './pages/SurveyResult'
import PointFilter from './components/PointFilter'
import React, { useState } from 'react'
import { BrowserRouter as Router ,Route, Switch } from "react-router-dom";

function App() {
 /* const [modalIsOpen, setmodalIsOpen] = useState(false)
     //PopUpWindow 태그 사용시
  const togglePop = () => {
    setmodalIsOpen(!modalIsOpen)
  }*/

  return (
    <div>
    <Router>
    <Switch>
      <Route exact path="/" component={PointFilter}/>
      <Route exact path="/result/:id" component={SurveyResult}/>
      <Route exact path="/response" component={ResponseSurvey}/>
    </Switch>
    </Router>
    </div>
   /* <div > //팝업창 사용시
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={togglePop}>클릭</button>
      </div>
      { modalIsOpen ? <PopUpWindow toggle={togglePop} /> : null}
    </div >*/
  )
}

export default App


/*class App extends Component {
  constructor(props) {
    super(props);
    this.togglePop=this.togglePop.bind(this);
    this.state = {
      modalIsOpen: false
    };
  }
  togglePop(){
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    })
  };
  render() {
    return (
      <div className="App">
        <div className="btn"
          onClick={function () { this.setState({ modalIsOpen: !this.state.modalIsOpen }) }.bind(this)}>
          <button>Button</button>
        </div>
          {this.state.modalIsOpen ? <PopUpWindow toggle={this.togglePop} /> : null}
      </div>
    );
  }
}

export default App;*/
