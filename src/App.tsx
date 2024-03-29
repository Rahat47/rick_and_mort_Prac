import './App.css';
import Characters from './components/Characters';
import { QueryClientProvider, QueryClient } from 'react-query';

const client = new QueryClient();

function App() {
    return (
        <div className='App'>
            <div className='container'>
                <h1>Rick and Morty</h1>
                <QueryClientProvider client={client}>
                    <Characters />
                </QueryClientProvider>
            </div>
        </div>
    );
}

export default App;
