import { useState } from 'react';
import { useQuery } from 'react-query';

export type CartItemType = {
	cover : string;
	title : string;
	synopsis : string;
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
  return <div className="App">Start</div>;
}

export default App;
