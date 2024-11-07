import React from 'react';
import Form from './form';
import ListEventos from './eventos/listEventos';

export default function Home({ Component, pageProps }) {
    
    return (
        <>
        <Form/>
        <ListEventos/>           
        </>
    );
}
