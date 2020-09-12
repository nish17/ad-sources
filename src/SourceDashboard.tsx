import React, { useEffect, useState } from "react";
import Typography from '@material-ui/core/Typography';
import getData from "./api";

import SourceCard from './SourceCard';
import {SourceData} from './source-data-model';

const SourceDashboard = () => {
  const [APIData, setAPIData] = useState<SourceData[]>([]);

  useEffect(() => {
    async function fetch() {
      const data = await getData();
      setAPIData(data);
    }
    fetch();
  }, []);

  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        Below is the list of the sources you have connected. Please choose the
        data source you would like to import data from.
          </Typography>
      {APIData.length > 0 && (
        <div>
          {APIData.map((d, i) => (
            <SourceCard key={i} data={d} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SourceDashboard;