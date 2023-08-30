import { useEffect, useState } from 'react';
import SelectsComponent from './components/select';
import { selectedSorting, selectedTopic } from './redux/topicSortSlice';
import { useSelector } from 'react-redux';

const Articles = () => {
    const [articles, setArticles] = useState([])
    const searchTopic = useSelector(selectedTopic);
    const sorting = useSelector(selectedSorting);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        populateArticleData();
    }, [searchTopic, sorting])

    const populateArticleData = async () => {
        setLoading(true)
        const token = localStorage.getItem("token")
        const response = await fetch(`/home?topic=${searchTopic}&sortBy=${sorting}`, { headers: { 'Authorization': `Bearer ${token}` } });
        const data = await response.json();
        setArticles(data)
        setLoading(false)
    }

    const renderPage = () => {
        return <>
            <SelectsComponent />
            {renderArticlesTable()}
        </>

    }

    const renderArticlesTable = () => {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Summary</th>
                        <th>Link</th>
                        <th>Published</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article =>
                        <tr key={article.title}>
                            <td>{article.title}</td>
                            <td>{article.summary}</td>
                            <td><a href={article.link} target="_blank" rel="noopener noreferrer">{article.link}</a></td>
                            <td>{article.published}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    return (
        <div>
            <h1 id="tabelLabel">Article List</h1>
            {loading
                ? <p><em>Loading...</em></p>
                : renderPage()}
        </div >
    );
}

export default Articles;
