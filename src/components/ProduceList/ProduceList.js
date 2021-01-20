import ProduceDetails from './ProduceDetails';
import './ProduceList.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populateProduce } from '../../store/produce';


function ProduceList() {
  const produce = useSelector(state => state.produce);
  const dispatch = useDispatch();

  const produceArr = Object.values(produce);

  useEffect(() => {
    dispatch(populateProduce());
  }, [dispatch])
  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id} produce={produce} />
        ))}
      </ul>
    </>
  );
}

export default ProduceList;
