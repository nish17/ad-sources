import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField, FormControlLabel,
  FormControl,
  FormHelperText,
  FormLabel, Radio,
  RadioGroup
} from '@material-ui/core';
import { FixedBottomPominentButton } from '../layout-components';
import { TableDataType, HistoryProp } from '../../types';
import data from '../../utils/TableData';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

const TableDashBoard: React.FC<HistoryProp> = ({ history }) => {

  const classes = useStyles();

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [selectedTable, setSelectedTable] = useState<TableDataType>({ name: 'null', subTables: false, subTablesData: [] });
  // let selectedTableIndex: number = -1;
  const [selectedTableIndex, setSelectedTableIndex] = useState(-1);
  const radioBtnData: TableDataType[] = data;
  let filteredData: TableDataType[] = [];
  let finalIndex: number = selectedTableIndex;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement).value;
    setValue(newValue);
    const index = radioBtnData.findIndex(data => newValue === data.name);
    finalIndex = index;
    setSelectedTableIndex(index);
    setSelectedTable(radioBtnData[finalIndex]);
    setIsDisabled(false);
    setHelperText(' ');
    setError(false);
  };

  const NextBtnHandler = () => {
    console.log('finalIndex: ', finalIndex, ' selectedTable: ', selectedTable);
    if (!value) {
      setHelperText('Please select an option.');
      setError(true);
    } else if (selectedTable.subTables) {
      console.log('about to set history: with final index ', selectedTableIndex, finalIndex);
      history.push(`${location.pathname}/${finalIndex}`)
    } else {
      console.log("TODO - Go to SelectColumnsPage")
    }
  }
  const location = useLocation();
  filteredData = radioBtnData.filter(d => d.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1);
  return (
    <div>
      <form>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <FormLabel component="legend">
            <TextField id="standard-basic" label="Filter" size="medium" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} />
          </FormLabel>
          <RadioGroup aria-label="table-data" name="data" value={value} onChange={handleRadioChange}>
            {filteredData.map((radiodata, i) => <FormControlLabel key={i} value={radiodata.name} control={<Radio />} label={radiodata.name} />)}
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <FixedBottomPominentButton
            title="Next"
            onClick={() => NextBtnHandler()}
            disabled={isDisabled}
          />
        </FormControl>
      </form>
    </div>
  )
}

export default TableDashBoard;