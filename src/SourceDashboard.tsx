import React, { useEffect, useState } from "react";
import { Typography, CircularProgress} from '@material-ui/core';
import getData from "./api";

import SourceCard from './SourceCard';
import { SourceData } from './source-data-model';

import sheetData from './googleSheets';


interface Props {
  isClicked: boolean
}

const SourceDashboard:React.FC<Props> = ({isClicked}) => {
  const [APIData, setAPIData] = useState<SourceData[]>([]);
  const [favSources, setFavSources] = useState<Array<number>>([]);

  const [clickedId, setClickedId] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if(!isClicked) return;
    setIsLoading(true);
    async function fetch() {
      const data = await getData();
      setAPIData([...data, sheetData]);
      setIsLoading(false);
    }
    fetch();
  }, [isClicked]);

  

  useEffect(() => {
    if(clickedId === -1) return;
    const newData = [...APIData];

    const selectedSrcIndex = APIData.findIndex((data) => data.id === clickedId)
    newData.splice(0, 0, newData.splice(selectedSrcIndex, 1)[0]);

    setAPIData(newData);

  }, [clickedId]);

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
              <SourceCard key={i} data={d} favSource={favSources} addFavSource={setFavSources} clickedId={setClickedId} isFav /> :
              <SourceCard key={i} data={d} favSource={favSources} addFavSource={setFavSources} clickedId={setClickedId} />
          ))}
        </div>
      )}
      {APIData.length === 0 && isLoading && (
        <div><CircularProgress/></div>
      )}
    </div>
  );
};

export default SourceDashboard;