import React, { useState } from 'react'
import { Typography, TextField, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { PageContainer, FixedTopBar, FixedMiddleBody, TopbarBackButton, FixedBottomPominentButton } from "../layout-components";
import data from '../../utils/TableData';
import { HistoryProp, TableDataType } from '../../types';

interface Props extends HistoryProp {
  match: any
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

const IndentedTable: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(false);
  const subTableData: TableDataType[] = data;
  let filteredData: TableDataType[] = [];

  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => { props.history.goBack(); }
  };

  const NextBtnHandler = () => {
    console.log("TODO - Go to SelectColumnsPage")
  }
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement).value;
    setValue(newValue);
    setIsDisabled(false);
    setError(false);
  }

  filteredData = subTableData[props.match.params.tableIndex].subTablesData.filter(d => d.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1);
  return (
    <PageContainer>
      <FixedTopBar title="Select Sub-Table" leftButton={topbarLeftButton} />
      <FixedMiddleBody>
        <Typography variant="h5">
          {props.match.params.sourceName.split('-').join(' ').toUpperCase()} has the following sub-tables ready for import.
        Please select the sub-table you would like to import.
        </Typography>
        <form>
          <FormControl component="fieldset" error={error} className={classes.formControl}>
            <FormLabel component="legend">
              <TextField id="standard-basic" label="Filter" size="medium" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} />
            </FormLabel>
            <RadioGroup aria-label="table-data" name="data" value={value} onChange={handleRadioChange}>
              {filteredData.map((radiodata, i) => <FormControlLabel key={i} value={radiodata.name} control={<Radio />} label={radiodata.name} />)}
            </RadioGroup>
            <FixedBottomPominentButton
              title="Next"
              onClick={() => NextBtnHandler()}
              disabled={isDisabled}
            />
          </FormControl>
        </form>
      </FixedMiddleBody>
    </PageContainer>
  )
}

export default IndentedTable;