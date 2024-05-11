import { useState } from 'react';

const useNumberFormat = (value: number) => {
  const formatNumber = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return { formatNumber };
};

export default useNumberFormat;
