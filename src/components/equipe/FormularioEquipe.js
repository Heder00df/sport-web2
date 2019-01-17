import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import PageBase from '../PageBase';

class FormPage extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      descricao:'',
      dataInclusao: null
    };

    this.handleDescricaoEquipe = this.handleDescricaoEquipe.bind(this);
    this.salvarEquipe = this.salvarEquipe.bind(this);
  }

  componentDidMount(){
    if (this.props.equipe){
      this.setState({descricao:this.props.equipe.descricao})
    }
  }

  handleDescricaoEquipe(event){
    this.setState({descricao:event.target.value})
  }
 
  salvarEquipe(event){
    console.log(this.state.descricao)
    event.preventDefault();
  }


  render() {
    console.log(this.props.equipe)
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
      <div>
        <PageBase title="Inclusão de equipes"
                  navigation="Sport / Formulário Equipe">
          <form onSubmit= {this.salvarEquipe}>

            <TextField
              hintText="Nome"
              floatingLabelText="Nome da equipe"
              onChange={this.handleDescricaoEquipe}
              value={this.state.descricao}
              fullWidth={true}
            />

            <DatePicker
              hintText="Data Expiração"
              floatingLabelText="Expiration Date"
              fullWidth={true}/>

            <div style={styles.buttons}>
              <Link to="/equipes">
                <RaisedButton label="Cancelar"/>
              </Link>

              <RaisedButton label="Salvar"
                            style={styles.saveButton}
                            type="submit"
                            primary={true}/>
            </div>
          </form>
        </PageBase>
      </div>
    );
  }

}
export function mapStateToProps(state) {
  return{
    equipe: state.equipes
  }

}
export default connect(mapStateToProps,null)(FormPage);
