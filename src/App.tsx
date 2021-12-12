import { useState } from 'react';
import { isError, useQuery } from 'react-query';

import Book from './Book/Book';
import Drawer from '@material-ui/core/Drawer';
import { LinearProgress } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import './App.style.scss';

export type CartItemType = {
  id : number;
	cover : string;
	title : string;
  isbn : string;
	synospis : string;
	price : number;
	amount : number;
}
const BOOKS_URL = "https://henri-potier.techx.fr/books";
const getBooks = async (): Promise<CartItemType[]> => 
	await (await fetch(BOOKS_URL)).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'books', 
    getBooks
  );
  console.log(data);

  if(isLoading) return <LinearProgress />;

  if(error) return <div>Oops! Il semble que l'application n'a pas pu se connecter à l'API pour récupérer les livres!</div>;

  return (
    <div>
      <div className="header">
          <span className="logo">HP Library</span> 
          <div className="spacer"></div>
      </div>
      <div className="book-wrapper">
        <div className="book-container">
          <div className="book-intro">
              <div className="pre-title">Découvrez le monde merveilleux d'Harry Potter et ses aventures</div>
              <div className="title">Nos livres</div>
              <div className="accroche">Le premier livre de Harry Potter, Harry Potter et la pierre philosophale, a été publié par Bloomsbury en 1997 et a immédiatement été acclamé par le public et la critique. Six autres best-sellers, trois livres d'accompagnement, un scénario et deux scénarios ont suivi depuis. Les livres Harry Potter ont été traduits dans plus de 80 langues, ont remporté de nombreux prix et se sont vendus à plus de 500 millions d'exemplaires dans le monde, devenant ainsi la série de livres la plus vendue de l'histoire...</div>
          </div>
          <div className="book-list">
            {data?.map(item => (
              <Grid item key="{item.id}">
                <Book book={item} />
              </Grid>  
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
