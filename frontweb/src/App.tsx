import React, { useMemo, useState } from 'react';
import './App.css';
import Header from './components/header';
import StoreFilter, { FilterData } from './components/filter';
import {} from './types/store';
import { buildFilterParams } from './utils/requests';
import SalesSummary from './components/sales-summary';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
    console.log(params);
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <StoreFilter onSubmitFilter={onFilterChange} />
        <SalesSummary filterData={filterData} />
      </div>
    </>
  );
}

export default App;
