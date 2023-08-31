import PropTypes from 'prop-types';
import './articleCard.css';

function ArticleCard({ article }) {

    function getFormattedDate(rawDate) {
        const fecha = new Date(rawDate);

        const day = fecha.getDate();
        const month = fecha.getMonth() + 1;
        const year = fecha.getFullYear();
        const hour = fecha.getHours();
        const min = fecha.getMinutes();
        const sec = fecha.getSeconds();

        return `${day}/${month}/${year} ${hour}:${min}:${sec}`;
    }

    return (
        <div className="article">
            <div className="content">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-published">{getFormattedDate(article.published)}</p>
                <p className="article-summary">{article.summary}</p>
            </div>
            <div className="button-content">
                <a href={article.link} target="_blank" rel="noreferrer">Read more</a>
            </div>
        </div >
    );
}

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired,
};

export default ArticleCard;
