import React, { useCallback, useEffect, useState } from "react";
import { Typography, CircularProgress, TextField, Grid } from '@material-ui/core';
import getData from "../../utils/api";

import SourceCard from './SourceCard';
import { DataSourceDto, SourceDataType, clickParams,HistoryProp } from '../../types';
import sheetData from '../../utils/googleSheets';

const SourceDashboard: React.FC<HistoryProp> = ({ history }) => {
  const [APIData, setAPIData] = useState<SourceDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [clickedParams, setClickedParams] = useState<clickParams>({ id: -1, fav: false });

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
    setIsLoading(true);
    async function fetch() {
      const data = await getData();
      setAPIData([...data, sheetData].map(changeAPIDataType));
      setIsLoading(false);
    }
    fetch();
  }, [changeAPIDataType]);

  useEffect(() => {
    if (clickedParams.id === -1) return;
    let dataToUpdate = [...APIData];
    const selectedSrcIndex = dataToUpdate.findIndex((d) => d.data.id === clickedParams.id);
    if (dataToUpdate[selectedSrcIndex].isMarked === clickedParams.fav) return;
    dataToUpdate[selectedSrcIndex].isMarked = !dataToUpdate[selectedSrcIndex].isMarked;
    dataToUpdate = [...dataToUpdate.filter(d => d.isMarked === true), ...dataToUpdate.filter(d => d.isMarked === false)];
    setAPIData(dataToUpdate);

  }, [clickedParams, APIData]);
  tempAPIData = APIData.filter((d) => d.data.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        Below is the list of the sources you have connected. Please choose the
        data source you would like to import data from.
      </Typography>
      <TextField
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
      />
      {tempAPIData.length > 0 && (
        <div>
          <Grid container direction='row' spacing={2}>
            {tempAPIData.map(d => (
              <Grid key={d.data.id} item xs={12} sm={6}>
                <SourceCard apiData={d} clickedParams={setClickedParams} isFav={d.isMarked} history={history} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
      {tempAPIData.length === 0 && isLoading && (
        <div><CircularProgress /></div>
      )}
    </div>
  );
};

export default SourceDashboard;