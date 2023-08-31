import { useEffect, useState } from 'react';
import SelectsComponent from './components/select';
import { selectedSorting, selectedTopic, setPage } from './redux/topicSortSlice';
import { useSelector, useDispatch } from 'react-redux';
import PageSelector from './components/pageSelector';
import ArticlesTable from './components/articlesTable';
import ArticlesTopicTitle from './components/articlesTopicTitle';
import TopicsHeaderMenu from './components/topicsHeaderMenu';
import Loader from './components/loader';

const Articles = () => {
    const dispatch = useDispatch();
    const [articles, setArticles] = useState([]);
    const searchTopic = useSelector(selectedTopic);
    const sorting = useSelector(selectedSorting);
    const itemsPerPage = 20;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        populateArticleData();
    }, [searchTopic, sorting]);

    const populateArticleData = async () => {
        setLoading(true);
        const token = localStorage.getItem("token");
        const response = await fetch(`/home?topic=${searchTopic}&sortBy=${sorting}`, { headers: { 'Authorization': `Bearer ${token}` } });
        const data = await response.json();
        setArticles(data);
        dispatch(setPage(1))
        setLoading(false);
    };

    const renderPage = () => {
        return (
            <div>
                <TopicsHeaderMenu />
                <ArticlesTopicTitle />
                <div className='article-options'>
                    <PageSelector articles={articles} itemsPerPage={itemsPerPage} />
                    <SelectsComponent />
                </div>
                <ArticlesTable articles={articles} itemsPerPage={itemsPerPage} />
            </div>
        );
    };


    return (
        <div>
            {loading ? <div className='loader'><Loader /></div> : renderPage()}
        </div>
    );
}

export default Articles;
