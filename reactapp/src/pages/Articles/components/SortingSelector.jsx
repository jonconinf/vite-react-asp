import { useDispatch, useSelector } from 'react-redux';
import { setSorting, selectedSorting } from '../redux/topicSortSlice';
import "./SortingSelector.css";

const SortingSelector = () => {
    const sorting = useSelector(selectedSorting);
    const dispatch = useDispatch();

    const handleSortingChange = (e) => {
        const selectedSorting = e.target.value;
        dispatch(setSorting(selectedSorting));
    };

    return (
        <div>
            <select className='select' id="sorting" name="sorting" value={sorting} onChange={handleSortingChange}>
                <option value="newest" selected>Show newest first</option>
                <option value="oldest" selected>Show oldest first</option>
            </select>
        </div>
    );
};

export default SortingSelector;
