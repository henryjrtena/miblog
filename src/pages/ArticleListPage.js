import articles from './article-content';
import ArticlesList from '../components/ArtcilesList';


const ArticleListPage = () => {
    return (
        <>
            <h1>Articles</h1>
            <ArticlesList articles={articles}></ArticlesList>
        </>
    )
}

export default ArticleListPage;