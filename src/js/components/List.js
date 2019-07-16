import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

ConnectedList.propTypes = {
  articles: PropTypes.array
};

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = state => ({});

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

export default List;
