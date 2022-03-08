import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import BookTitle from "./components/BookTitle";
import BookContextProvider from "./context/BookContext";


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <BookTitle />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
