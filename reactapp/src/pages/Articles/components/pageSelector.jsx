import PropTypes from 'prop-types';
import { selectedPage, setPage } from '../redux/topicSortSlice';
import { useSelector, useDispatch } from 'react-redux';
import "./pageSelector.css";

const PageSelector = ({ articles, itemsPerPage = 20 }) => {
    const page = useSelector(selectedPage);
    const dispatch = useDispatch();

    return (
        <div className='page-selector'>
            <button onClick={() => dispatch(setPage(Math.max(1, page - 1)))}>{"<"}</button>
            <span>{page}</span>
            <button onClick={() => dispatch(setPage(Math.ceil(Math.min(Math.max((articles.length / itemsPerPage), 1), page + 1))))}>{">"}</button>
        </div>
    );
}

PageSelector.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    articles: PropTypes.array.isRequired,
};

export default PageSelector;