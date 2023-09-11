import React, { useMemo, useState } from 'react';
import './App.css';
import Header from './components/header';
import StoreFilter from './components/filter';

import {} from './types/store';
import { buildFilterParams } from './utils/requests';
import { FilterData } from './types/filterData';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
    console.log(params);
  };

  return (
    <>
      <div className="main-container">
        <Header />
        <StoreFilter onSubmitFilter={onFilterChange} />
      </div>
    </>
  );
}

export default App;
