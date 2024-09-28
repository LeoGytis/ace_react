import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App bg-red-500">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p className="bg-red-500 text-3xl border border-blue-500">
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<p className="text-3xl">Valio</p>
			</header>
		</div>
	);
}

export default App;
