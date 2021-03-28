import React, {Component} from 'react';
import { connect } from "react-redux";
import { getArticles} from "../redux/actions/actions";

class Articles extends Component {
    componentDidMount() {
        this.props.getArticlesFromAPI();
    }

    render() {
        console.log("-------"+this.props.articlesInfo)
        console.log("---!!!!----"+this.props.info)

        return(
           <div className="body-page-content">
               Articles
               {this.props.articlesInfo}
           </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      articlesInfo: state.articlesInfo,
      info: state.info
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    getArticlesFromAPI: (articles) => {
      dispatch(getArticles(articles));
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(Articles);