//importo l'hook da useState da React per la gestione dello stato
import { useState } from 'react'
//importo il css
import './App.css'


function App() {
  //creo array con lista articoli (libri)
  //stato per la lista attuale dei libri
  const [books, setBooks] = useState([
    { id: 1, title: 'Orgoglio e pregiudizio' },
    { id: 2, title: '1984' },
    { id: 3, title: 'Il Grande Gatsby' },
    { id: 4, title: 'Moby Dick' },
    { id: 5, title: 'Anna Karenina' },
    { id: 6, title: 'Cime tempestose' },
    { id: 7, title: 'Don Chisciotte della Mancia' },
    { id: 8, title: 'La Metamorfosi' },
    { id: 9, title: 'I Miserabili' },
    { id: 10, title: 'Ulisse' }
  ]);


  //stato per il nuovo libro
  const [newBook, setNewBook] = useState('');

  //funzione per aggiungere nuovo libro
  const addBook = (event) => {
    event.preventDefault();

    //se input = stringa vuota, non aggiungo nulla
    if (newBook === '') return;

    //creo nuovo oggetto libro
    const newBookObj = {
      id: books[books.length - 1].id + 1,
      title: newBook
    };

    //aggiorno stato lista libri
    setBooks([...books, newBookObj]);

    //svuoto input dopo il submit
    setNewBook('');
  };

  return (
    //div principale che contiene la lista dei libri
    <div className="books">
      {/*titolo pagina */}
      <h1>Libri classici</h1>

      {/*creo form per aggiungere nuovi libri */}
      <form onSubmit={addBook}>
        <input
          type="text"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
          placeholder="Aggiungi nuovo libro"
        />
        <button type="submit">Aggiungi libro</button>
      </form>

      {/*se la lista dei libri è vuota, mostro un messaggio*/}
      {books.length === 0 ? (
        <h2>La tua lista è vuota</h2>
      ) : (
        <ul>
          {/*itero sull'array dei libri e creo un elemento <li> per ogni libro*/}
          {books.map((book) => (
            // assegno chiave unica per ogni elemento lista usando l'id univoco
            <li key={book.id}>
              {/* mostro solo titolo libro */}
              {book.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

//esporto il componente
export default App;
