import { Route, Link, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { AboutStuff } from './pages/AboutStuff';
import { Contact } from './pages/Contact';

import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';

import './App.css';

function App() {
  return (
    <Layout>
      <Header>
        <h1>The Tool App</h1>
      </Header>
      <Menu>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about/2?sort=model">About Stuff</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Menu>
      <Content>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/about/:id">
            <AboutStuff />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch></Content>
      <Sidebar>sidebar</Sidebar>
      <Footer>
        <small>&copy; {new Date().getFullYear()} A Cool Company, Inc.</small>
      </Footer>
    </Layout>
  );
}

export default App;
