import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Grid, Button, TextField} from "@mui/material";
import {useRouter} from "next/router";
import TrackList from "../../components/TrackList";
import {useTypedSelector} from "../../hooks/useTypesSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchTracks, searchTracks} from "../../store/actions-creators/track";
import {useDispatch} from "react-redux";
import SaveIcon from "@mui/material/SvgIcon/SvgIcon";

const Index = () => {
    const router = useRouter();
    const {tracks, error} = useTypedSelector(state => state.track);
    const [query, setQuery] = useState<string>('');
    const dispatch = useDispatch() as NextThunkDispatch;
    const [timer, setTimer] = useState(null)

    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      if(timer){
          clearTimeout(timer)
      }
      setTimer(
          setTimeout(async() => {
             await dispatch(await searchTracks(e.target.value)) ;
          }, 500)
      )
    }

    if(error){
       return (
           <MainLayout>
               <h1>{error}</h1>
           </MainLayout>
       )
    }

    return (
        <MainLayout title={"Track list - Music box"}>
            <Grid container className='tracks_list'>
                   <Grid container justifyContent='space-between'>
                       <h1>Tracks list</h1>

                       <TextField
                         value={query}
                         onChange={search}
                         label="Search"
                       />

                       <Button variant="contained" size="medium" color="warning" onClick={() => router.push('/tracks/create')}>Add track</Button>
                   </Grid>
                   <TrackList tracks={tracks}/>
            </Grid>
        </MainLayout>
    );
};

export default Index;

// @ts-ignore
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch( await fetchTracks())
});