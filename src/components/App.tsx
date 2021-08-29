import '@styles/App.scss';
import ExampleProvider from '@ExampleContext';

const App: React.FC = () => {
    return (
        <div className="App">
            <ExampleProvider>
                <h1>Hello world</h1>
            </ExampleProvider>
        </div>
    )
}

export default App;