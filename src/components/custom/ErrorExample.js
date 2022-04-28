import useJsonFetch from '../../hooks/useJsonFetch';

export default function ErrorExample() {
  //eslint-disable-next-line no-unused-vars
  const [ data, isLoading, hasError ] = useJsonFetch(`${process.env.REACT_APP_URL2}error`);
  
  return (
    <div className="example-box error-box">
      <h3>Error fetch:</h3>
      <p>Error text: <span className="error">{hasError}</span></p>
    </div>
  );
}
