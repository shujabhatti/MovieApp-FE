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
} from "../../../actions/ticketActions";

import { getShortList as getCustomerList } from '../../../actions/customerActions';
import { getShortList as getShowingList } from '../../../actions/showingActions';
import { getShortList as getSeatList } from '../../../actions/seatActions';

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

const Tickets = (props) => {
  const initialInputs = {
    ticket_ID: "0",
    customer_ID: "0",
    showing_ID: "0",
    seat_ID: "0",
    price: ""
  };

  const [record, setRecord] = useState(initialInputs);
  const [formDialog, setFormDialog] = useState(false);

  const { ticket_ID, customer_ID, showing_ID, seat_ID, price } = record;

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
    disableElem("customer-inp");
    disableElem("showing-inp");
    disableElem("seat-inp");
    disableElem("price-inp");
    setFormDialog(false);
  };

  const onEnableForm = () => {
    enableElem("customer-inp");
    enableElem("showing-inp");
    enableElem("seat-inp");
    enableElem("price-inp");
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

  const { records, customerrecords, showingrecords, seatrecords, current, message, error } = props;

  useEffect(() => {
    props.getRecords();
    props.getCustomerList();
    props.getShowingList();
    props.getSeatList();
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
      <MainNav selItem={"ticket-id"} />
      <div className='main'>
        <div className='row'>
          <SubHeader
            text={"Tickets"}
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
          {current ? "Update Ticket" : "Add Ticket"}
        </DialogTitle>
        <form onSubmit={onSave}>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <div className="row" style={{minWidth: '400px'}}> 
                <LabelContainer name='ticket_ID' value={ticket_ID} text='ID' />
                <SelectContainer
                  id='customer-inp'
                  list={customerrecords}
                  name='customer_ID'
                  value={customer_ID}
                  onChange={onChange}
                  text='Select Customer'
                  style={inputStyle}
                  required
                />
                <SelectContainer
                  id='showing-inp'
                  list={showingrecords}
                  name='showing_ID'
                  value={showing_ID}
                  onChange={onChange}
                  text='Select Showing'
                  style={inputStyle}
                  required
                />
                <SelectContainer
                  id='seat-inp'
                  list={seatrecords}
                  name='seat_ID'
                  value={seat_ID}
                  onChange={onChange}
                  text='Select Seat'
                  style={inputStyle}
                  required
                />
                <InputContainer
                  id='price-inp'
                  type='text'
                  name='price'
                  value={price}
                  onChange={onChange}
                  text='Price'
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

Tickets.propTypes = {
  records: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired,
  getRecords: PropTypes.func.isRequired,
  getCustomerList: PropTypes.func.isRequired,
  getShowingList: PropTypes.func.isRequired,
  getSeatList: PropTypes.func.isRequired,
  addRecord: PropTypes.func.isRequired,
  updateRecord: PropTypes.func.isRequired,
  clearCurrentRecord: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  records: state.tickets.records,
  customerrecords: state.customers.shortrecords,
  showingrecords: state.showings.shortrecords,
  seatrecords: state.seats.shortrecords,
  current: state.tickets.current,
  message: state.tickets.message,
  error: state.tickets.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getRecords: () => dispatch(getRecords()),
    getCustomerList: () => dispatch(getCustomerList()),
    getShowingList: () => dispatch(getShowingList()),
    getSeatList: () => dispatch(getSeatList()),
    addRecord: (obj) => dispatch(addRecord(obj)),
    updateRecord: (obj) => dispatch(updateRecord(obj)),
    clearCurrentRecord: () => dispatch(clearCurrentRecord()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
