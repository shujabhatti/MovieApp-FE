import React, { Fragment, useEffect, useState } from "react";
import MainNav from "../../layouts/MainNav";
import SubHeader from "../../layouts/SubHeader";
import LabelContainer from "../../layouts/LabelContainer";
import InputContainer from "../../layouts/InputContainer";
import SelectContainer from "../../layouts/SelectContainer";
import FormSubmitButton from "../../layouts/FormSubmitButton";
import ButtonContainer from "../../layouts/ButtonContainer";
import ConfirmationDialogue from "../../layouts/ConfirmationDialogue";

import RecordsTable from "./RecordsTable";

import {
  getRecords,
  addRecord,
  updateRecord,
  clearCurrentRecord,
  clearErrors,
} from "../../../actions/showingActions";

import { getShortList as getMoviesList } from '../../../actions/movieActions';
import { getShortList as getScreensList } from '../../../actions/screenActions';

import {
  showElem,
  hideElem,
  enableElem,
  disableElem,
} from "../../../common functions/helpers";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

import Color from "../../constants/Colors";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Showings = (props) => {
  const initialInputs = {
    showing_ID: "0",
    movie_ID: "0",
    screen_ID: "0",
    scheduler_ID: "0",
    date: "",
    start_time: ""
  };

  const [record, setRecord] = useState(initialInputs);
  const [formDialog, setFormDialog] = useState(false);

  const { showing_ID, movie_ID, screen_ID, scheduler_ID, date, start_time } = record;

  //#region Functions

  const onChange = (e) =>
    setRecord({ ...record, [e.target.name]: e.target.value });

  const [saveChangesDialogue, setSaveChangesDialogue] = useState(false);

  const onDialogClose = () => {
    setSaveChangesDialogue(false);
  };

  const onFormDialogClose = () => {
    setFormDialog(false);
  };

  const onCancel = () => {
    setRecord(initialInputs);
    hideElem("save-btn");
    hideElem("cancel-btn");
    showElem("insert-btn");
    disableElem("movie-inp");
    disableElem("screen-inp");
    disableElem("schedular-inp");
    disableElem("date-inp");
    disableElem("start-time-inp");
    setFormDialog(false);
  };

  const onEnableForm = () => {
    enableElem("movie-inp");
    enableElem("screen-inp");
    enableElem("schedular-inp");
    enableElem("date-inp");
    enableElem("start-time-inp");
    hideElem("insert-btn");
    showElem("save-btn");
    showElem("cancel-btn");
    setFormDialog(true);
  };

  const onInsertNew = () => {
    setRecord(initialInputs);
    onEnableForm();
  };

  const onSave = (e) => {
    e.preventDefault();
    setSaveChangesDialogue(true);
  };

  const onConfirm = () => {
    if (current) {
      props.updateRecord(record);
    } else {
      props.addRecord(record);
    }
    setSaveChangesDialogue(false);
  };

  //#endregion

  const { records, movierecords, screenrecords, current, message, error } = props;

  useEffect(() => {
    props.getRecords();
    props.getMoviesList();
    props.getScreensList();
    onCancel();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (message) {
      M.toast({ html: `${message}` });
      props.clearErrors();
      props.clearCurrentRecord();
    }

    onCancel();

    if (error) {
      M.toast({ html: `${error}` });
      props.clearErrors();
    }

    if (current !== null) {
      setRecord(current);
      onEnableForm();
    }

    // eslint-disable-next-line
  }, [current, message, error]);

  return (
    <Fragment>
      <MainNav selItem={"show-id"} />
      <div className='main'>
        <div className='row'>
          <SubHeader
            text={"Showings"}
            style={{ textAlign: "left", paddingLeft: "20px" }}
          />
          {/* Table */}
          <div className='row'>
            <div className='col s10 offset-s1'>
              <div id='insert-btn'>
                <ButtonContainer
                  icons={"add"}
                  text={"Insert"}
                  onClick={onInsertNew}
                  style={{
                    backgroundColor: Color.primaryHex,
                    width: "auto",
                    marginTop: '20px'
                  }}
                />
              </div>
              <RecordsTable tbData={records} />
            </div>
          </div>
        </div>
        {/* Save Changes Dialog */}
        <ConfirmationDialogue
          open={saveChangesDialogue}
          onConfirmDialogClose={onDialogClose}
          title='Save Changes'
          content='Are you sure you want to made changes?'
          onConfirm={onConfirm}
        />
      </div>
      {/* Dialog Form */}
      <Dialog
        open={formDialog}
        onClose={onFormDialogClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        disableBackdropClick
        disableEscapeKeyDown 
      >
        <DialogTitle id='alert-dialog-title'>
          {current ? "Update Showing" : "Add Showing"}
        </DialogTitle>
        <form onSubmit={onSave}>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <div className="row" style={{minWidth: '400px'}}> 
                <LabelContainer name='showing_ID' value={showing_ID} text='ID' />
                <SelectContainer
                  id='movie-inp'
                  list={movierecords}
                  name='movie_ID'
                  value={movie_ID}
                  onChange={onChange}
                  text='Select Movie'
                  style={inputStyle}
                  required
                />
                <SelectContainer
                  id='screen-inp'
                  list={screenrecords}
                  name='screen_ID'
                  value={screen_ID}
                  onChange={onChange}
                  text='Select Screen'
                  style={inputStyle}
                  required
                />
                <InputContainer
                  id='schedular-inp'
                  type='text'
                  name='scheduler_ID'
                  value={scheduler_ID}
                  onChange={onChange}
                  text='Scheduler ID'
                  style={inputStyle}
                  required
                />
                <InputContainer
                  id='date-inp'
                  type='text'
                  name='date'
                  value={date}
                  onChange={onChange}
                  text='Date'
                  style={inputStyle}
                  required
                />
                <InputContainer
                  id='start-time-inp'
                  type='text'
                  name='start_time'
                  value={start_time}
                  onChange={onChange}
                  text='Start Time'
                  style={inputStyle}
                  required
                />
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <FormSubmitButton
              icons={"save"}
              text={"Save"}
              style={{
                backgroundColor: Color.success,
                width: "auto",
              }}
            />
            <ButtonContainer
              icons={"close"}
              text={"Cancel"}
              onClick={onCancel}
              style={{
                backgroundColor: Color.danger,
                width: "auto",
              }}
            />
          </DialogActions>
        </form>
      </Dialog>
    </Fragment>
  );
};

const inputStyle = {
  backgroundColor: "transparent",
  borderStyle: "none",
  borderBottom: "1px solid black",
};

Showings.propTypes = {
  records: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired,
  getRecords: PropTypes.func.isRequired,
  getMoviesList: PropTypes.func.isRequired,
  getScreensList: PropTypes.func.isRequired,
  addRecord: PropTypes.func.isRequired,
  updateRecord: PropTypes.func.isRequired,
  clearCurrentRecord: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  records: state.showings.records,
  movierecords: state.movies.shortrecords,
  screenrecords: state.screens.shortrecords,
  current: state.showings.current,
  message: state.showings.message,
  error: state.showings.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getRecords: () => dispatch(getRecords()),
    getMoviesList: () => dispatch(getMoviesList()),
    getScreensList: () => dispatch(getScreensList()),
    addRecord: (obj) => dispatch(addRecord(obj)),
    updateRecord: (obj) => dispatch(updateRecord(obj)),
    clearCurrentRecord: () => dispatch(clearCurrentRecord()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Showings);
