import { Route, Link, Switch, useRouteMatch, Redirect } from 'react-router-dom';


export function About() {

  const { url, path } = useRouteMatch();

  return (
    <div>
      <h2>About</h2>
      <nav>
        <ul>
          <li><Link to={`${url}/mission`}>Mission</Link></li>
          <li><Link to={`${url}/history`}>History</Link></li>
          <li><Link to={`${url}/team`}>Team</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path={`${path}/mission`}>
          <h3>Mission</h3>
          Our mission is....
        </Route>
        <Route path={`${path}/history`}>
          <h3>History</h3>
          Our history is....
        </Route>
        <Route path={`${path}/team`}>
          <h3>Team</h3>
          Our team is....
        </Route>
        <Route path="*">
          <Redirect to={`${url}/mission`} />
        </Route>
      </Switch>
    </div>
  );
}