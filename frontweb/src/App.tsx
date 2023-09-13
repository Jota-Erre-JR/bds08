import './App.css';
import Header from './components/header';
import {} from './types/store';

import SalesSummary from './components/sales-summary';

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <SalesSummary />
      </div>
    </>
  );
}

export default App;
