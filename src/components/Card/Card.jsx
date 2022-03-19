import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { noImage } from "../../constans/constans";

export default function ActionAreaCard({ info }) {

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="345"
                    image={info.url || noImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                        {info.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}