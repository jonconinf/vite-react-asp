import { setTopic } from '../redux/topicSortSlice';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const TopicsHeaderMenu = () => {
    const dispatch = useDispatch();
    const topics = ["All", "Politik", "Utbildning", "Religion", "Miljo", "Ekonomi", "LivsstilFritt", "SamhalleKonflikter", "Halsa", "Idrott", "VetenskapTeknik"]
    const [, , removeCookie] = useCookies();
    const navigate = useNavigate();

    const handleTopicChange = (selectedTopic) => {
        dispatch(setTopic(selectedTopic));
    };

    const handleLogout = () => {
        removeCookie('session', { path: '/' })
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <div className="navbar">
            {
                topics.map((t, i) => <a href="#" onClick={() => handleTopicChange(t)} key={i}>{t}</a>)
            }
            <a href="#" onClick={() => handleLogout()} key="logout">Logout</a>
        </div>
    );
}

export default TopicsHeaderMenu