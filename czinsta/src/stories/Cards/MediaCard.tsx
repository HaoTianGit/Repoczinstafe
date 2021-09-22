import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


interface IMediaCardProps {
    ImageUrl: string | undefined;
    Description: string | undefined;
}

function MediaCard(props: IMediaCardProps) {
    return (
        <div>
            <Link to = "/display">
            <Card className="MediaCardContainer">
                <CardActionArea >
                    <CardMedia
                        className="MediaCardImage"
                        image={props.ImageUrl}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" className="MediaCardDescription">
                            {props.Description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Link>
        </div>
    )
}

export default MediaCard