import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home.js";
import { News } from "./components/News/News.js";
import { Contact } from "./components/Contact/Contact.js";
import { Wrapper } from "./components/Layout.js";
import { NavigationBar } from "./components/NavigationBar.js";
import { HomeCarousel } from "./components/Carousel.js";
import { TextHome } from "./components/HomeText.js";
import { TabContainer } from "./components/TabStyle.js";
import { StickyFooter } from "./components/FooterStyle";
import { GlobalStyles } from "./components/Global.js";
import { NewsPagination } from "./components/News/NewsPagination.js";
import { Cards } from "./components/News/Cards.js";
import { ContactForm } from "./components/Contact/ContactForm.js";

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
                <Wrapper>
                  <ContactForm />
                </Wrapper>
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
