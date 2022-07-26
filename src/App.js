import Button from '@mui/material/Button';
import { MetaMaskProvider } from 'metamask-react';

function App() {
	return (
		<>
			<MetaMaskProvider>
				<div className='App'>
					<Button variant='contained'>account NTF</Button>
				</div>
			</MetaMaskProvider>
		</>
	);
}

export default App;
