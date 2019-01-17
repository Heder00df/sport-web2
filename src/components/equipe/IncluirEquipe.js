import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import Toggle from "material-ui/Toggle";
import Divider from "material-ui/Divider";
import {Link} from "react-router";
import RaisedButton from "material-ui/RaisedButton";
import PageBase from "../PageBase";
import React from "react";
import {grey400} from "material-ui/styles/colors";


const IncluirEquipe = () => {

  const styles = {
    toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  };

  return (
    <PageBase title="Form Page"
              navigation="Application / Form Page">
      <form>

        <TextField
          hintText="Name"
          floatingLabelText="Name"
          fullWidth={true}
        />


        <DatePicker
          hintText="Expiration Date"
          floatingLabelText="Expiration Date"
          fullWidth={true}/>

        <div style={styles.toggleDiv}>
          <Toggle
            label="Disabled"
            labelStyle={styles.toggleLabel}
          />
        </div>

        <Divider/>

        <div style={styles.buttons}>
          <Link to="/">
            <RaisedButton label="Cancel"/>
          </Link>

          <RaisedButton label="Save"
                        style={styles.saveButton}
                        type="submit"
                        primary={true}/>
        </div>
      </form>
    </PageBase>

  );
};
export default IncluirEquipe;
