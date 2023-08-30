import { useDispatch, useSelector } from 'react-redux';
import { setTopic, setSorting, selectedSorting, selectedTopic } from '../redux/topicSortSlice';

const SelectsComponent = () => {
    const searchTopic = useSelector(selectedTopic);
    const sorting = useSelector(selectedSorting);
    const dispatch = useDispatch();
    const topics = ["All", "Politik", "Utbildning", "Religion", "Miljo", "Ekonomi", "LivsstilFritt", "SamhalleKonflikter", "Halsa", "Idrott", "VetenskapTeknik"]

    const handleTopicChange = (e) => {
        const selectedTopic = e.target.value;
        dispatch(setTopic(selectedTopic));
    };

    const handleSortingChange = (e) => {
        const selectedSorting = e.target.value;
        dispatch(setSorting(selectedSorting));
    };

    return (
        <div>
            <label htmlFor="topic">Select a topic:</label>
            <select id="topic" name="topic" value={searchTopic} onChange={handleTopicChange}>
                {
                    topics.sort().map((t, i) => <option value={t} key={i}>{t}</option>)
                }
            </select>

            <label htmlFor="sorting">Sort:</label>
            <select id="sorting" name="sorting" value={sorting} onChange={handleSortingChange}>
                <option value="newest" selected>Newest</option>
                <option value="oldest" selected>Oldest</option>
            </select>
        </div>
    );
};

export default SelectsComponent;
