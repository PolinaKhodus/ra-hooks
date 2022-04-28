import useJsonFetch from '../../hooks/useJsonFetch';

export default function LoadingExample() {
  //eslint-disable-next-line no-unused-vars
  const [data, isLoading, hasError] = useJsonFetch(`${process.env.REACT_APP_URL2}data`);

  return (
    <div className="example-box loading-box">
      <h3>Loading fetch:</h3>
      {isLoading 
      	? <p className='loading-box'>Loading...</p> 
      	: <p>Status: <span className="loading">{data}</span></p>}      
    </div>
  );
}
