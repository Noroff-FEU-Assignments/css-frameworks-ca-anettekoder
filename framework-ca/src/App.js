import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { News } from "./components/News/News";
import { Contact } from "./components/Contact/Contact";
import { Wrapper } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { HomeCarousel } from "./components/Carousel";
import { TextHome } from "./components/HomeText";
import { TabContainer } from "./components/TabStyle.js";
import { StickyFooter } from "./components/FooterStyle";
import { GlobalStyles } from "./components/Global";
import { NewsPagination } from "./components/News/NewsPagination";
import { Cards } from "./components/News/Cards";
import { ContactForm } from "./components/Contact/ContactForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <GlobalStyles />
        <Wrapper>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}>
                <HomeCarousel />
                <Wrapper>
                  <TextHome />
                  <TabContainer />
                </Wrapper>
              </Route>
              <Route path="/news" component={News}>
                <Wrapper>
                  <News />
                  <NewsPagination />
                  <Cards />
                  <NewsPagination />
                </Wrapper>
              </Route>
              <Route path="/contact" component={Contact}>
                <wrapper>
                  <ContactForm />
                </wrapper>
              </Route>
            </Switch>
          </Router>
        </Wrapper>
        <StickyFooter />
      </React.Fragment>
    );
  }
}
export default App;
