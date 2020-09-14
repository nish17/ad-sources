import React, { useCallback, useEffect, useState } from "react";
import { Typography, CircularProgress, TextField } from '@material-ui/core';
import getData from "./api";

import SourceCard from './SourceCard';
import { DataSourceDto } from './types';
import sheetData from './googleSheets';
// import { SourceData } from "./source-data-model";

interface Props {
  isClicked: boolean
}

interface SourceDataType {
  data: DataSourceDto,
  isMarked: boolean,
  iconUrl: string
}

const SourceDashboard: React.FC<Props> = ({ isClicked }) => {
  const [APIData, setAPIData] = useState<DataSourceDto[]>([]);
  const [favSources, setFavSources] = useState<Array<number>>([]);
  const [clickedId, setClickedId] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [dataSource, setDataSource] = useState<SourceDataType[]>([]);

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
      setAPIData([...data, sheetData]);
      setDataSource(APIData.map(changeAPIDataType));
      setIsLoading(false);
    }
    fetch();
  }, [isClicked, APIData, changeAPIDataType]);



  /*   useEffect(() => {
      if (clickedId === -1 || !favSources.includes(clickedId)) return;
      const newData = [...APIData];
  
      const selectedSrcIndex = APIData.findIndex((data) => data.id === clickedId)
      newData.splice(0, 0, newData.splice(selectedSrcIndex, 1)[0]);
  
      setAPIData(newData);
  
    }, [clickedId]);
     */
  // setDataSource(APIData.map(changeAPIDataType));
  tempAPIData = dataSource.filter((d) => d.data.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
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
            !favSources.includes(d.data.id) ?
              <SourceCard key={i} data={d.data} favSource={favSources} addFavSource={setFavSources} clickedId={setClickedId} isFav /> :
              <SourceCard key={i} data={d.data} favSource={favSources} addFavSource={setFavSources} clickedId={setClickedId} />
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