import React from 'react';

import { Route, Switch } from 'react-router-dom';
import MainPage from 'containers/MainPage/Loadable';
import DirectoryContext from './DirectoryContext';
import { dequery } from '../utils/query.utils';
import NotFound from 'components/NotFound';

const RoutingController = props => (
  <DirectoryContext.Provider
    value={{
      route: {
        config: props.config,
      },
    }}
  >
    <Switch>
      {/* 
          If tomorow you want to add more types with similar structure just add one more param as prefix.
          For example  <Route exact path="/:type/:id" component={RouterManager} /> and then down in RouterManager
          decide by that param where to redirect.
      */}
      <Route exact path="/:id" component={RouterManager} />
      <Route exact path="/:id/:category" component={RouterManager} />
      <Route exact path="/:id/:category/:article" component={RouterManager} />
      <Route render={() => <NotFound />} />
    </Switch>
  </DirectoryContext.Provider>
);

const RouterManager = props => {
  const {
    match: {
      params: { id, category, article },
    },
    location: { search },
  } = props;
  const query = dequery(search);
  const ctx = React.useContext(DirectoryContext);
  if (ctx.route.id !== id) {
    ctx.route.id = id;
  }
  if (ctx.route.category !== category) {
    ctx.route.category = category;
  }
  if (ctx.route.article !== article) {
    ctx.route.article = article;
  }
  if (ctx.route.query !== query) {
    ctx.route.query = query;
  }
  /**
   * This means if found page then show MainPage
   * else if the config not exist (means obviously still loading,
   * because we load it dynamicaly and it can be delayed)
   * then show Fragment, else if config is loaded but still no results
   * then show NotFound
   */
  const Component =
    ctx.route.config && ctx.route.config.find(route => route.path === id)
      ? MainPage
      : ctx.route.config
      ? NotFound
      : React.Fragment;

  return <Component />;
};

export default RoutingController;
