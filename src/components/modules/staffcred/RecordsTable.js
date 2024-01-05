import React, { Fragment, useState, useEffect } from "react";
import InputContainer from "../../layouts/InputContainer";
import SelectContainer from "../../layouts/SelectContainer";
import ButtonContainer from "../../layouts/ButtonContainer";
import ConfirmationDialogue from "../../layouts/ConfirmationDialogue";
import orderBy from "lodash/orderBy";
import Color from "../../constants/Colors";

import {
  getRecords,
  setOnScrRecords,
  setCurrentRecord,
  deleteRecord,
  clearErrors,
} from "../../../actions/staffcredActions";

import { getShortList } from '../../../actions/staffActions';

import {
  TablePagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const RecordsTable = (props) => {
  //#region Hooks and fetched properties

  const records = props.tbData;

  const { onscrrecords, error } = props;

  // Get First Record
  const firstRecord = Array.isArray(records) && records.length ? records[0] : {};

  // Get Headers from first record
  const headers = Object.keys(firstRecord);

  const filtersList = [];

  headers.forEach((header) => filtersList.push({text: `${header}`, value: `${header}`}) );


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [columnToSort, setColumnToSort] = useState("");
  const [sortDirection, setSortDirecton] = useState("desc");
  // On screen filters hooks
  const [text, setText] = useState("");
  const [filterType, setFilterType] = useState("");

  //#endregion

  useEffect(() => {
    if (error) {
      M.toast({ html: `${error}` });
      props.clearErrors();
    }
    // eslint-disable-next-line
  }, [error]);

  //#region Functions

  const [deleteDialogue, setDeleteDialogue] = useState(false);
  const [deleteRecordID, setDeleteRecordID] = useState("");

  const onDialogClose = () => {
    setDeleteDialogue(false);
  };

  const onView = (obj) => {
    props.setCurrentRecord(obj);
  };

  const onDelete = (id) => {
    setDeleteDialogue(true);
    setDeleteRecordID(id);
  };

  const onConfirm = () => {
    if (deleteRecordID) {
      props.deleteRecord(deleteRecordID);
      setDeleteDialogue(false);
    }
  };

  const refreshRecords = (obj) => {
    props.getRecords();
    props.getShortList();
    setText("");
  };

  //#region On Screen Filters Function

  const onScreenFilter = () => {
    if(filterType !== "" || filterType !== null){
        props.setOnScrRecords(records.filter((d) => d[`${filterType}`] && d[`${filterType}`].toLowerCase().includes(text.toLowerCase())));
    }
    else{
      props.setOnScrRecords(records);
    }
  };

  //#endregion

  //#region Pagination Functions

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  //#endregion

  //#region Sorting Functions

  const invertDirection = {
    asc: "desc",
    desc: "asc",
  };

  const handleSort = (columnName) => {
    setColumnToSort(columnName);
    if (columnToSort === columnName) {
      setSortDirecton(invertDirection[sortDirection]);
    } else {
      setSortDirecton("asc");
    }
  };

  //#endregion

  const classes = useStyles();

  //#endregion

  return (
    <Fragment>
      {/* Get Records */}
      <ButtonContainer
        text={"Refresh"}
        icons={"refresh"}
        onClick={refreshRecords}
        style={{
          width: "auto",
          float: "right",
          marginTop: "20px",
          marginBottom: "20px",
          backgroundColor: Color.success,
        }}
      />
      {/* Filter Container */}
      <div className='row'>
        <div className='col s12 m4'>
          <InputContainer
            type='text'
            name='text'
            value={text}
            text='Search...'
            onChange={(e) => setText(e.target.value)}
            onKeyUp={() => onScreenFilter()}
            onPaste={() => onScreenFilter()}
            style={inputStyle}
          />
        </div>
        <div className='col s12 m3'>
          <SelectContainer
            list={filtersList}
            type='text'
            name='filterType'
            value={filterType}
            text='Filter by...'
            onChange={(e) => setFilterType(e.target.value)}
            onKeyUp={() => onScreenFilter()}
            onPaste={() => onScreenFilter()}
            style={inputStyle}
          />
        </div>
      </div>
      {/* Table Container */}
      <TableContainer component={Paper}>
        <Table className={classes.table} size='small' aria-label='simple table'>
          <TableHead
            classes={{
              root: classes.root,
            }}
          >
            <TableRow>
              <TableHeadCellStyle>
                <div>View</div>
              </TableHeadCellStyle>
              { 
                headers.map(header =>
                  <TableHeadCellStyle>
                    <div onClick={() => handleSort(`${header}`)} style={sortIconStyle}>
                      <span>{header}</span>
                      {columnToSort === `${header}` ? (
                        sortDirection === "asc" ? (
                          <span class='material-icons'>arrow_drop_up</span>
                        ) : (
                          <span class='material-icons'>arrow_drop_down</span>
                        )
                      ) : null}
                    </div>{" "}
                  </TableHeadCellStyle>
                ) 
              }
              <TableHeadCellStyle>
                <div>Delete</div>
              </TableHeadCellStyle>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderBy(onscrrecords, columnToSort, sortDirection)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((obj) => (
                <TableRow key={obj.staffcred_ID}>
                  <TableCell component='th' scope='row'>
                    <div
                      style={tableIconStyle}
                      onClick={onView.bind(this, obj)}
                    >
                      <span className='material-icons'>visibility</span>
                    </div>
                  </TableCell>
                  {
                    Object.keys(obj).map((key)=>
                      <TableCell>{obj[key]}</TableCell>
                    )
                  }
                  <TableCell>
                    <div
                      style={tableIconStyle}
                      onClick={onDelete.bind(this, obj.staffcred_ID)}
                    >
                      <span className='material-icons'>delete</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Table Pagination Component */}
      <TablePagination
        rowsPerPageOptions={[
          5,
          10,
          25,
          50,
          100,
          { value: onscrrecords.length, label: "All" },
        ]}
        component='div'
        count={onscrrecords.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      {/* Delete Confirmation Dialog */}
      <ConfirmationDialogue
        open={deleteDialogue}
        onConfirmDialogClose={onDialogClose}
        title='Delete Record'
        content='Are you sure you want to delete this record?'
        onConfirm={onConfirm}
      />
    </Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: Color.primaryHex,
    color: "white",
    height: 30,
    padding: "0 30px",
  },
  table: {
    minWidth: 600,
  },
  paper: {
    backgroundColor: Color.fore,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 4, 3),
    width: "400px",
  },
}));

const TableHeadCellStyle = withStyles(() => ({
  head: {
    backgroundColor: Color.primaryHex,
    color: Color.fore,
    padding: "10px 15px",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const inputStyle = {
  backgroundColor: "transparent",
  borderStyle: "none",
  borderBottom: "1px solid black",
};

const sortIconStyle = {
  display: "flex",
  alignItems: "center",
};

const tableIconStyle = {
  cursor: "pointer",
};

RecordsTable.propTypes = {
  onscrrecords: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  getRecords: PropTypes.func.isRequired,
  getShortList: PropTypes.func.isRequired,
  setOnScrRecords: PropTypes.func.isRequired,
  setCurrentRecord: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  onscrrecords: state.staffcreds.onscrrecords,
  error: state.staffcreds.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getRecords: () => dispatch(getRecords()),
    getShortList: () => dispatch(getShortList()),
    setOnScrRecords: (obj) => dispatch(setOnScrRecords(obj)),
    setCurrentRecord: (obj) => dispatch(setCurrentRecord(obj)),
    deleteRecord: (id) => dispatch(deleteRecord(id)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordsTable);
