import React, { useEffect, useState } from "react";
import { Typography, CircularProgress, TextField } from '@material-ui/core';
import getData from "./api";

import SourceCard from './SourceCard';
import { SourceData } from './source-data-model';

import sheetData from './googleSheets';


interface Props {
  isClicked: boolean
}

const SourceDashboard: React.FC<Props> = ({ isClicked }) => {
  const [APIData, setAPIData] = useState<SourceData[]>([]);
  const [favSources, setFavSources] = useState<Array<number>>([]);

  const [clickedId, setClickedId] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  let tempAPIData: SourceData[] = [];

  useEffect(() => {
    if (!isClicked) return;
    setIsLoading(true);
    async function fetch() {
      const data = await getData();
      setAPIData([...data, sheetData]);
      setIsLoading(false);
    }
    fetch();
  }, [isClicked]);



  useEffect(() => {
    if (clickedId === -1 || !favSources.includes(clickedId)) return;
    const newData = [...APIData];

    const selectedSrcIndex = APIData.findIndex((data) => data.id === clickedId)
    newData.splice(0, 0, newData.splice(selectedSrcIndex, 1)[0]);

    setAPIData(newData);

  }, [clickedId]);

  tempAPIData = APIData.filter((d) => d.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 );
  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        Below is the list of the sources you have connected. Please choose the
        data source you would like to import data from.
      </Typography>
      {isClicked &&<TextField
        id="outlined-full-width"
        label="Search Sources"
        style={{ margin: 8 }}
        placeholder="Search..."
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />}
      {tempAPIData.length > 0 && (
        <div>
          {tempAPIData.map((d, i) => (
            !favSources.includes(d.id) ?
              <SourceCard key={i} data={d} favSource={favSources} addFavSource={setFavSources} clickedId={setClickedId} isFav /> :
              <SourceCard key={i} data={d} favSource={favSources} addFavSource={setFavSources} clickedId={setClickedId} />
          ))}
        </div>
      )}
      {tempAPIData.length === 0 && isLoading && (
        <div><CircularProgress /></div>
      )}
    </div>
  );
};

export default SourceDashboard;