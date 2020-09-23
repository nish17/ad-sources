import { TableDataType } from '../types';
const TableData: TableDataType[] = [
  { 
    name: 'Lists', 
    subTables: true, 
    subTablesData: [
      { 
        name: 'Member #1', 
        subTables: false 
      }, 
      { 
        name: 'Member #2', 
        subTables: false 
      }
    ] 
  }, 
  { 
    name: 'Audience', 
    subTables: false 
  }, 
  { 
    name: 'Campaigns', 
    subTables: false 
  }, 
  { 
    name: 'Reports', 
    subTables: false 
  }
];

export default TableData;