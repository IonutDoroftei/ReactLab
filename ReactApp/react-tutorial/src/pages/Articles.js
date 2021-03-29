import React from "react";
import { connect } from "react-redux";
import { getArticles } from "../redux/actions/actions";

class Articles extends React.Component {
  componentDidMount() {
    this.props.getArticlesFromAPI();
  }

  render() {
    console.log("-------" + this.props.articles);
    return (
      <div className="body-page-content">
        {JSON.stringify(this.props.articles)}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getArticlesFromAPI: (articles) => {
    dispatch(getArticles(articles));
  },
});

const mapStateToProps = (state)=>{
  return {
    articles : state.articlesReducer.articlesInfo
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
