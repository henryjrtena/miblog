import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My Awesome Blog</h1>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/about" element={<AboutPage></AboutPage>} />
            <Route path="/articles" element={<ArticleListPage></ArticleListPage>} />
            <Route path="/article" element={<ArticlePage></ArticlePage>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;