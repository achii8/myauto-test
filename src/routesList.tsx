import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResultPage from './pages/search-result-page';

export default function RoutesList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}
