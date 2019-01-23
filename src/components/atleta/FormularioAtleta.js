import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Select from '@material-ui/core/Select';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../PageBase';

class FormPage extends React.Component {
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render(){
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
      <PageBase title="Form Equipe"
                navigation="Application / Formulario Equipe">
        <form>

          <TextField
            hintText="Name"
            floatingLabelText="Name"
            fullWidth={true}
          />

          <Select
              value={this.state.age}
              onChange={this.handleChange}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

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
  }

}

export default FormPage;
