import React, { useState } from 'react';
import { TextField, Typography, Grid, Container } from '@material-ui/core';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from '../Button/Button';
import { ADD_PROJECT} from '../../api/mutations';
import { AddProject } from '../../api/__generated__/AddProject';
import { useMutation } from '@apollo/client';

import './submit-form.css';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      "& .MuiFormHelperText-root": {
        color: "white",
      }
    }
  }));
export interface SubmitFormProps {

}

export const SubmitForm: React.FC<SubmitFormProps> = () => {
    const classes = useStyles();
    const [imageUrl, setimageUrl] = useState<string>("");
    const [description, setDescription] = useState("");
    const [submit, setSubmit] = useState(false);

    const [hasFocus, setHasFocus] = useState(false);

 

    const [addProject] = useMutation<AddProject>(ADD_PROJECT)

    const handleSubmit = async() => {
        if (imageUrl !== "") {
            console.log({"githubUrl": imageUrl, "Description": description });

            try {
                await addProject({variables: {
                    description: description,
                    link: imageUrl,
                }})
                setSubmit(true)
            } catch(e) {
                console.log(e)
            }
        }else{
            setHasFocus(true);
        }

    };

    return (
        <Container className="form_container">
            <Typography variant="h4" >post your image here!</Typography>
            {
                submit ?
                    <Grid>
                        Congratulations! you had posted your content.
                    </Grid> : null
            }
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" label="Image" fullWidth
                        error={hasFocus && (imageUrl === "" )}
                        value={imageUrl}
                        onChange={e => setimageUrl(e.target.value)}
                        className={hasFocus && (imageUrl === "" )?"":classes.root}
                        helperText="Invalid URL" />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="your caption"
                        multiline
                        rows={5}
                        placeholder="Add your Caption"
                        variant="outlined"
                        fullWidth
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Grid>
                
            </Grid>
            <Button className="form_button" backgroundColor="limegreen" label="Submit" onClick={handleSubmit} primary size="medium" />
        </Container>
    );
};