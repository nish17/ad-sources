import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { TextField } from '@material-ui/core';
import { FixedBottomPominentButton } from '../layout-components';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

const TableDashBoard: React.FC = () => {

  const classes = useStyles();

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const radioBtnData: string[] = ['Audience', 'Campaigns', 'Reports'];
  let filteredData: string[] = [];

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setIsDisabled(false);
    setHelperText(' ');
    setError(false);
  };

  const NextBtnHandler = () => {
    console.log('clicked on next!');
    if (!value) {
      setHelperText('Please select an option.');
      setError(true);
    }else {
      console.log(value, ' is selected');
    }
  }

  filteredData = radioBtnData.filter(d => d.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1);
  return (
    <div>
      <form>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <FormLabel component="legend">
            <TextField id="standard-basic" label="Filter" size="medium" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} />
          </FormLabel>
          <RadioGroup aria-label="table-data" name="data" value={value} onChange={handleRadioChange}>
            {filteredData.map((radiodata,i) => <FormControlLabel key={i} value={radiodata} control={<Radio />} label={radiodata} />)}
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