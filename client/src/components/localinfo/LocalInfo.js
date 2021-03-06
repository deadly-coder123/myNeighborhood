import React from 'react';
// import './style.sass';
import axios from "axios";
import Card from '../Card/Card'
import  "./news.scss";


class LocalInfo extends React.Component {
    // try getting server to scrape to avoid CORS issues

    state = {
        news: [],
        article_count: 0
    }

    componentDidMount(){
        axios.get("/api/scrape")
        .then( (response) => {
            console.log("scraped data returned");
            console.log(response.data);
            this.setState({
                news: response.data
            })
        })
        .catch( (err) => {
            console.log("Error in http access");
            console.log(err);
        })

    }



    handleNewArticle = () => {
        let count = this.state.article_count + 1;
        
        this.setState({article_count: count})
    }

    render() {

        return (
            <div className=" text-center " id="article-wrapper">
            <h1>Local News</h1>
            {this.state.news.map((item, id) => {
                return <div><Card item_info={item} key={id}/></div>
            }
                    
            // <a className="news" href={item.anchor}>{item.head}</a>
                
            )}
        
            </div>

        );
    }
}
                
export default LocalInfo;