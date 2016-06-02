import React from 'react';
import { Route } from 'react-router';
import App from '../views/App';
import NotFound from '../views/NotFound';
import UniverseList from '../views/UniverseList';
import CategoryList from '../views/CategoryList';
import SegmentList from '../views/SegmentList';
import ProductList from '../views/ProductList';
import Product from '../views/Product';

export default (

  <Route component={App}>

  <Route path="/" components={{ main: UniverseList }} />
  <Route path="/universe/:universeId" components={{ main: CategoryList }} />
  <Route path="/universe/:universeId/category/:categoryId" components={{ main: SegmentList }} />
  <Route path="/universe/:universeId/category/:categoryId/segment/:segmentId" components={{ main: ProductList }} />
  <Route path="/universe/:universeId/category/:categoryId/segment/:segmentId/product/:productId" components={{ main: Product }} />
  <Route path="*" components={{ main: NotFound }} />

  </Route>

);
