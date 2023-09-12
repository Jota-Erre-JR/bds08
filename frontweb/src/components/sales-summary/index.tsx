import './styles.css';

import SalesSummaryCard from './sales-summary-card';
import { useEffect, useState } from 'react';
import { requestBackend } from '../../utils/requests';
import { SalesSummaryData } from '../../types/salesSummaryData';
import { FilterData } from '../filter';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  sum: 0,
  avg: 0,
  count: 0,
  max: 0,
  min: 0
};

function SalesSummary({ filterData }: Props) {
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);

  //const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    requestBackend
      .get<SalesSummaryData>(`/sales/summary?storeId=${filterData?.store?.id}`)
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales summary');
      });
  }, [filterData?.store?.id]);
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={summary.sum} />
    </div>
  );
}

export default SalesSummary;
