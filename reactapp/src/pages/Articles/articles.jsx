import { useEffect, useState } from 'react';

// In order to use react hooks like the `useCookies` hook, the must use functional components.
// Functional components are the industry standard for the react components at the moment.
// Class components vs Functional components: https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components/
const Articles = () => {
    const [articles, setArticles] = useState([])
    const [searchTopic, setSearchTopic] = useState("All")
    const [sorting, setSorting] = useState("newest")
    const [loading, setLoading] = useState(true)
    const topics = ["All", "Ekonomi", "SamhalleKonflikter", "LivsstilFritt", "Idrott", "Halsa", "Politik"

    ]

    useEffect(() => {
        populateArticleData();
    }, [searchTopic, sorting])

    const handleTopicChange = (e) => {
        e.preventDefault()
        setSearchTopic(e.target.value)
    }

    const handleSortingChange = (e) => {
        e.preventDefault()
        setSorting(e.target.value)
    }

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
            {renderTopicDropdownMenu()}
            {renderSortingDropdownMenu()}
            {renderArticlesTable()}
        </>

    }

    const renderTopicDropdownMenu = () => {
        return <>
            <label htmlFor="topic">Select a topic:</label>
            <select id="topic" name="topic" value={searchTopic} onChange={handleTopicChange}>
                {
                    topics.sort().map((t, i) => <option value={t} key={i}>{t}</option>)
                }
            </select>
        </>

    }

    const renderSortingDropdownMenu = () => {
        return <>
            <label htmlFor="order">Sort:</label>
            <select id="sorting" name="sorting" value={sorting} onChange={handleSortingChange}>
                <option value="newest" selected>Newest</option>
                <option value="oldest" selected>Oldest</option>
            </select>
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
