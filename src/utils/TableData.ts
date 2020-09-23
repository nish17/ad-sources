import { TableDataType } from '../types';
const TableData: TableDataType[] = [
  { 
    name: 'Lists', 
    subTables: true, 
    subTablesData: [
      { 
        name: 'Member #1', 
        subTables: false,
        subTablesData: []
      }, 
      { 
        name: 'Member #2', 
        subTables: false,
        subTablesData: []
      }
    ] 
  }, 
  { 
    name: 'Audience', 
    subTables: false,
    subTablesData: []
  }, 
  { 
    name: 'Campaigns', 
    subTables: false,
    subTablesData: []
  }, 
  { 
    name: 'Reports', 
    subTables: false,
    subTablesData: []
  }
];

export default TableData;