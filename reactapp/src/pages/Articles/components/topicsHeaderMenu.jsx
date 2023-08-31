import { setTopic } from '../redux/topicSortSlice';
import { useDispatch } from 'react-redux';

const TopicsHeaderMenu = () => {
    const dispatch = useDispatch();
    const topics = ["All", "Politik", "Utbildning", "Religion", "Miljo", "Ekonomi", "LivsstilFritt", "SamhalleKonflikter", "Halsa", "Idrott", "VetenskapTeknik"]

    const handleTopicChange = (selectedTopic) => {
        dispatch(setTopic(selectedTopic));
    };

    return (
        <div className="navbar">
            {
                topics.map((t, i) => <a href="#" onClick={() => handleTopicChange(t)} key={i}>{t}</a>)
            }
        </div>
    );
}

export default TopicsHeaderMenu