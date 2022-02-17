import Main from '../main/main';

type AppProps = {
  arendaOfferData: number[],
};

function App({ arendaOfferData }: AppProps): JSX.Element {
  return ( <Main arendaOfferData={arendaOfferData} /> );
}

export default App;
