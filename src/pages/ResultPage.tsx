import React from 'react';

import { ReusltData } from '../stores/Result/ResultData';

export default function ResultPage(): React.ReactElement {
  return <img src={ReusltData[0].image} width={350} height={350} />;
}
