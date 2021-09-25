import { makeStyles, createStyles, CircularProgress, Avatar, Typography } from '@material-ui/core';
import React from 'react';
import { CardList,  SectionHeader } from './stories';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { POSTS} from './api/queries';
import { Posts,Posts_posts_nodes } from './api/__generated__/Posts';
import MediaCard from './stories/Cards/MediaCard'


const FeedPageStyles = makeStyles(
  createStyles({
    header: {
        position: 'sticky'
    },
    page: {
        padding: '20px'
    }
}));

export interface FeedPageProps {
  pageTitle: string;
}

const FeedPage = ({ pageTitle }: FeedPageProps): JSX.Element => {
  const [cards, setCards] = React.useState<JSX.Element[]>([]);
  
  const {loading, error, data} = useQuery<Posts>(POSTS)
  const styles = FeedPageStyles();

    useEffect(() => {
        if(!loading && !error) {
            setCards(data!.posts!.nodes!.map((post : Posts_posts_nodes) => {
                return <MediaCard ImageUrl = {post.link} Description = {post.description}/>
            }))
        }
    }, [data]);

    return <div className={styles.page}>
        
        {cards.length === 0 ? <CircularProgress /> : <CardList cards={cards} cols={window.innerWidth / 650} />}
    </div>
  
};

export default FeedPage;
