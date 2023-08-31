import PropTypes from 'prop-types';
import { selectedPage, selectedTopic } from '../redux/topicSortSlice';
import { useSelector } from 'react-redux';
import ArticleCard from './articleCard';
import "./articlesTable.css";

const ArticlesTable = ({ articles, itemsPerPage }) => {
    const page = useSelector(selectedPage);
    const topic = useSelector(selectedTopic);

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedArticles = articles.slice(startIndex, endIndex);

    return (
        <>
            {displayedArticles.length !== 0 ?
                displayedArticles.map((article, index) => (
                    <ArticleCard article={article} key={index} />
                ))
                :
                <div className='no-articles'>No articles about {topic}</div>
            }
        </>
    );
}

ArticlesTable.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    articles: PropTypes.array.isRequired,
};

export default ArticlesTable