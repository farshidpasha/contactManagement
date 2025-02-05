import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import UsersList from './components/UsersList/UsersList';

function App() {
  return (
    <>
      <div className="w-full h-screen grid grid-col-2 grid-rows-[max-content] px-8 gap-4">
        <Header />
        <Form />
        <UsersList />
      </div>
    </>
  );
}

export default App;
