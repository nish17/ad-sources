import React, { useEffect, useState } from "react";
import { Typography, CircularProgress} from '@material-ui/core';
import getData from "./api";

import SourceCard from './SourceCard';
import { SourceData } from './source-data-model';

import sheetData from './googleSheets';

const SourceDashboard:React.FC = () => {
  const [APIData, setAPIData] = useState<SourceData[]>([]);
  const [favSources, setFavSources] = useState<Array<number>>([]);

  const [clickedSource, setClickedSource] = useState<number>(-1);

  useEffect(() => {
    async function fetch() {
      const data = await getData();
      setAPIData([...data, sheetData]);
    }
    fetch();
  }, []);

  useEffect(() => {
    const selectedSrc = APIData.findIndex((data) => data.id === clickedSource)
    APIData.splice(0, 0, APIData.splice(selectedSrc, 1)[0]);

  }, [clickedSource, APIData]);

  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        Below is the list of the sources you have connected. Please choose the
        data source you would like to import data from.
      </Typography>
      {APIData.length > 0 && (
        <div>
          {APIData.map((d, i) => (
            !favSources.includes(d.id) ?
              <SourceCard key={i} data={d} favSource={favSources} addFavSource={setFavSources} clickedSrc={setClickedSource} isFav /> :
              <SourceCard key={i} data={d} favSource={favSources} addFavSource={setFavSources} clickedSrc={setClickedSource} />
          ))}
        </div>
      )}
      {APIData.length === 0 && (
        <div><CircularProgress/></div>
      )}
    </div>
  );
};

export default SourceDashboard;