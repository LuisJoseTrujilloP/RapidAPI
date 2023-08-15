import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
// import { useGetSongsByContryQuery} from '../redux/services/shazamCore';

const AroundYou = () => {
const [country, setCountry ] = useState('');
const [loading, setLoading ] = useState(true);
const { activeSong, isPlaying } = useSelector((state) => state.player);
// const { data, isFetching, error } = useGetSongsByContryQuery(country)

console.log(country);
// if (isFetching && loading) return <Loader title='Loading songs around you' />;
// if (error && country != '') return <Error/>



useEffect(() => {   

    axios
    .get(`https://geo.ipify.org/api/v2/country?apiKey=at_cfqkRfHQR9mmB2GmZwMNHymrH3TVD&`)
    .then((res) => setCountry(res?.date?.location?.country))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
}, [country])



return (<div/> )
};

export default AroundYou;
