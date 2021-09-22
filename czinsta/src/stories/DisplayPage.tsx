import { useQuery } from "@apollo/client";
import { Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { CardList } from ".";
import { PROJECTS } from "../api/queries";
import { Projects, Projects_projects_nodes } from "../api/__generated__/Projects";
import MediaCard from "./Cards/MediaCard";


function DisplayPage() {
    const [cards, setCards] = React.useState<JSX.Element[]>([]);
  
    const {loading, error, data} = useQuery<Projects>(PROJECTS)
  
      useEffect(() => {
          if(!loading && !error) {
              setCards(data!.projects!.nodes!.map((project : Projects_projects_nodes) => {
                  return <MediaCard ImageUrl = {project.link} Description = {project.description}/>
              }))
          }
      }, [data]);
  
      return <div >
          
      </div>
}
  export default DisplayPage;