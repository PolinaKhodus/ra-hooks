import useJsonFetch from '../../hooks/useJsonFetch';

export default function DataExample() {
  //eslint-disable-next-line no-unused-vars
  const [ data, isLoading, hasError ] = useJsonFetch(`${process.env.REACT_APP_URL2}data`);

  return (
    <div className="example-box data-box">
      <h3>Normal fetch:</h3>
      <p>Status: <span className="normal">{data}</span></p>
    </div>
  );
}