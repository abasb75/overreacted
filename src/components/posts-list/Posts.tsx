import './Posts.css';
import React from 'react';
import Profile from '../profile/Profile';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

interface Post {
    id:number;
    title:string;
    time:string;
    description:string;
}


interface PostState {
    loading:Boolean;
    connection:Boolean;
    posts:Array<Post>;
}



class Posts extends React.Component{

    state: PostState={
        loading:true,
        connection:true,
        posts:[],
    }


    getPosts(){
        fetch('/data.json').then(res=>res.json()).then(res=>{
            if(res.status){
                this.setState({
                    loading:false,
                    connection:true,
                    posts:res.data,
                })
            }else{

            }
        }).catch(err=>{

        });
    }


    componentDidMount() {
        this.getPosts();
    }


    postList(){
        if(!this.state.loading && this.state.connection && this.state.posts.length>3){
            return (<main>
                {this.state.posts.map((post,index)=>{
                    return this.postArticle(post,index);
                })}
            </main>);
        }else{
            return <></>;
        }
    }

    postArticle(post:Post,index:number){
        return (<article key={index}>
            <Link to={'/'+post.id}><h3>{post.title}</h3></Link>
            <small>{post.time}</small>
            <p>{post.description}</p>
        </article>);
    }

    render(): React.ReactNode {
        return (<>
            <Profile />
            {this.postList()}
            <Footer />
        </>)
    }

}

export default Posts;