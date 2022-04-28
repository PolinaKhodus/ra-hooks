import DataExample from './DataExample';
import ErrorExample from './ErrorExample';
import LoadingExample from './LoadingExample';

export default function CustomHookWidget() {
  return (
    <div className="custom-hook_container">
      <DataExample />
      <ErrorExample />
      <LoadingExample />
    </div>
  );
}