import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div>
        <h1>Not Found</h1>
      </div>

      <Link to="/">GO HOME</Link>
    </>
  );
};

export default NotFound;
