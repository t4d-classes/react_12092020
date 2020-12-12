import { useParams, useHistory } from 'react-router-dom';

import { useQueryParams } from '../hooks/useQueryParams';

export function AboutStuff() {

  const { id } = useParams();

  const history = useHistory();

  const navToHome = () => {
    history.push('/');
  };

  const queryParams = useQueryParams();

  return (
    <div>
      <h2>About</h2>
      <div>
        id: {id}<br />
        sort: {queryParams.get('sort')}<br />
        <button type="button" onClick={navToHome}>Go Home</button>
      </div>
    </div>
  );
}