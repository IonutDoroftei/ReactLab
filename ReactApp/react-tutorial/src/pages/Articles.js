import React from "react";
import { connect } from "react-redux";
import { getArticles } from "../redux/actions/actions";
import ModalDelete from "../components/ModalDelete";
import { removeArticle } from "../redux/actions/actions";

class Articles extends React.Component {
  componentDidMount() {
    this.props.getArticlesFromAPI();
  }

  removeArticlesOnClick(index) {
    let article = this.props.articles.filter((item, idx) => idx !== index);
    this.props.removeArt(article);
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
                <ModalDelete
                  nameArticleData={art.title}
                  deleteAction={() => this.removeArticlesOnClick(index)}
                />
                {/* <button onClick>
                  Delete
                </button> */}
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
  removeArt: (articles) => {
    dispatch(removeArticle(articles));
  },
});

const mapStateToProps = (state) => {
  return {
    articles: state.articlesReducer.articlesInfo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
