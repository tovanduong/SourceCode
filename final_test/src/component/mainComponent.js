// import react from "react";
import Header from "./headerComponent";
import Footer from "./footerComponent";
import Home from "./homeComponent";
import Contact from "./contactComponent";
import About from "./aboutComponent";
import Menu from "./menuComponent";
import history from "../helps/history";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Switch, Route, Redirect, withRouter} from "react-router-dom";
import { fetchStaff } from '../redux/ActionCreator'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    staff: state.staff
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchStaff: dispatch(fetchStaff)
})
function Main(props) {
  console.log(props)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStaff(props))
  }, [])
  return (
    <>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/home" component={() => <Home />} />
            <Route exact path="/menu" component={() => <Menu />} />
            <Route exact path="/about" component={() => <About />} />
            <Route exact path="/contact" component={() => <Contact />} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
