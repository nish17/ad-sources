import React, { useCallback, useEffect, useState } from "react";
import { Typography, CircularProgress, TextField } from '@material-ui/core';
import getData from "./api";

import SourceCard from './SourceCard';
import { DataSourceDto,SourceDataType } from './types';
import sheetData from './googleSheets';

interface Props {
  isClicked: boolean
}


const SourceDashboard: React.FC<Props> = ({ isClicked }) => {
  const [APIData, setAPIData] = useState<SourceDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [clickedId, setClickedId] = useState<number>(-1);
  const [prevClickId, setPrevClickId] = useState<number>(-1);

  let tempAPIData: SourceDataType[] = [];
  const getImagePath = (name: string): string => {
    return `${process.env.PUBLIC_URL}/images/${name.toLowerCase().split(" ").join("-")}-logo.png`;
  };

  const changeAPIDataType = useCallback((data: DataSourceDto): SourceDataType => {
    const sourceDataTypeObj: SourceDataType = {
      data: data,
      isMarked: false,
      iconUrl: getImagePath(data.name)
    };
    return sourceDataTypeObj;
  }, []);

  useEffect(() => {
    if (!isClicked) return;
    setIsLoading(true);
    async function fetch() {
      const data = await getData();
      setAPIData([...data, sheetData].map(changeAPIDataType));
      setIsLoading(false);
    }
    fetch();
  }, [isClicked, changeAPIDataType]);

  useEffect(() => {
    if (clickedId === -1 || clickedId === prevClickId) return; 
    let dataToUpdate = [...APIData];
    const selectedSrcIndex = dataToUpdate.findIndex((d) => d.data.id === clickedId);
    dataToUpdate[selectedSrcIndex].isMarked = !dataToUpdate[selectedSrcIndex].isMarked;
    dataToUpdate = [...dataToUpdate.filter(d => d.isMarked === true), ...dataToUpdate.filter(d => d.isMarked === false)];

    setAPIData(dataToUpdate);
    setPrevClickId(clickedId);
    
  }, [clickedId,prevClickId,APIData]);
  tempAPIData = APIData.filter((d) => d.data.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        Below is the list of the sources you have connected. Please choose the
        data source you would like to import data from.
      </Typography>
      {isClicked && <TextField
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
            <SourceCard key={i} apiData={d} clickedId={setClickedId} isFav={d.isMarked} />
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