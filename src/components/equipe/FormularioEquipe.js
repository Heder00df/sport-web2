import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {grey400} from 'material-ui/styles/colors';
import PageBase from '../PageBase';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import salvarEquipe from '../../actions/equipe/salvarEquipe'

class FormPage extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      descricao:'',
      codigo:null,
      dataInclusao: null,
      mensagem: null
    };

    this.handleDescricaoEquipe = this.handleDescricaoEquipe.bind(this);
    this.salvarEquipe = this.salvarEquipe.bind(this);
  }

  componentDidMount(){
    if (this.props.equipe !== null){
      this.setState({codigo: this.props.equipe.id, descricao:this.props.equipe.descricao})
    }
  }

  handleDescricaoEquipe(event){
    this.setState({descricao:event.target.value})
  }
 
  salvarEquipe(event){
    event.preventDefault();
    const equipe = {
      descricao: this.state.descricao,
      id: this.state.codigo

    }
    this.props.salvarEquipe(equipe).then(resp=>{
      if(resp != null && resp.payload.status === 200){
        this.setState({mensagem: 'Equipe incluída com sucesso.'})
        console.log(this.state.mensagem)
      }else if(resp != null && resp.payload.status !== 200){
        this.setState({mensagem: 'Erro ao incluir equipe.'})
      }
    });

  }


  render() {
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
            <SnackbarContent
                message={
                  'I love candy. I love cookies. I love cupcakes. \
                  I love cheesecake. I love chocolate.'
                }
            />
            <TextField
              hintText="Nome"
              floatingLabelText="Nome da equipe"
              onChange={this.handleDescricaoEquipe}
              value={this.state.descricao}
              fullWidth={true}
            />

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
export default connect(mapStateToProps,{ salvarEquipe})(FormPage);
