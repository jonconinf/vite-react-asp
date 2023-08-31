import { selectedTopic } from '../redux/topicSortSlice';
import { useSelector } from 'react-redux';
import "./articlesTopicTitle.css";

const ArticlesTopicTitle = () => {
    const searchTopic = useSelector(selectedTopic);

    return <h1 className='articles-topic-title'>{searchTopic}</h1>
}

export default ArticlesTopicTitle;