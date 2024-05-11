import './App.css';
import RoutesList from './routesList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './lib/redux/store';
import PageLoader from './components/PageLoader';
import { useEffect } from 'react';
import { fetchManufacturers } from './lib/redux/slices/manufactorersSlice';
import { fetchCategories } from './lib/redux/slices/categoriesSlice';

function App() {
  const loading = useSelector((state: RootState) => state.manufactorer.loading);
  const manufacturersArray = useSelector(
    (state: RootState) => state.manufactorer.manufacturersArray,
  );
  const dispatch = useDispatch() as AppDispatch;

  useEffect(() => {
    if (manufacturersArray?.length === 0) {
      dispatch(fetchManufacturers());
      dispatch(fetchCategories());
    }
  }, [manufacturersArray, dispatch]);

  if (loading) {
    return <PageLoader />;
  }

  return <RoutesList />;
}

export default App;
