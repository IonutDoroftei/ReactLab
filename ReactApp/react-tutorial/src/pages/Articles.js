import React from "react";
import { connect } from "react-redux";
import { getArticles } from "../redux/actions/actions";
import ModalDelete from "../components/ModalDelete";

class Articles extends React.Component {
  componentDidMount() {
    this.props.getArticlesFromAPI();
  }

  render() {
    const { articles } = this.props;

    return (
      <div className="body-page-content">
        {articles.map((art, index) => (
          <div key={index} className="articleBox">
            <h2>{art.title}</h2>
            <div className="articleContent">
              <div className="articleTextContainer">
                <p>{art.description}</p>
              </div>
              <div className="articleImageContainer">
                <img src={art.image} alt={art.image}></img>
              </div>
              <div className="articleBtnsContainer">
                <ModalDelete nameArticleData={art.title} />
              </div>
            </div>
            <p>Comment Section: {art.comment}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getArticlesFromAPI: (articles) => {
    dispatch(getArticles(articles));
  },
});

const mapStateToProps = (state) => {
  return {
    articles: state.articlesReducer.articlesInfo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
