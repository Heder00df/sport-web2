import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Remove from 'material-ui/svg-icons/content/remove';
import {grey200, grey500, pink500, red200} from 'material-ui/styles/colors';
import PageBase from '../PageBase';

import buscarEquipes from '../../actions/equipe/buscarEquipes';
import selecionarEquipe from '../../actions/equipe/selecionarEquipe';
import excluirEquipe from '../../actions/equipe/excluirEquipe';

const styles = {
  floatingActionButton: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  editButton: {
    fill: grey500
  }
};

class Equipes extends React.Component{

  componentDidMount(){
    this.props.buscarAtletas();
  }
  remove(equipe){
    this.props.excluirAtleta(equipe);

  }

  exibirEquipes(){
    if (this.props.atletas.length > 0){
      return this.props.atletas.map(equipe =>
        <TableRow key={equipe.id}>
          <TableRowColumn>{equipe.id}</TableRowColumn>
          <TableRowColumn>{equipe.descricao}</TableRowColumn>
          <TableRowColumn>
            <Link className="button" to="/equipe" equipe={equipe}
                  onClick={() => this.props.selecionarEquipe(equipe)}>
              <FloatingActionButton zDepth={0}
                                    mini={true}
                                    backgroundColor={grey200}
                                    iconStyle={styles.editButton}>
                <ContentCreate/>
              </FloatingActionButton>
            </Link>
            <Link to="/equipes">
              <FloatingActionButton
                  mini={true}
                  iconStyle={styles.editButton}
                  backgroundColor={red200}
                  onClick={() => this.remove(equipe)}>
                <Remove/>
              </FloatingActionButton>
            </Link>
          </TableRowColumn>
        </TableRow>
      )
     }
    return ''

  }
  render(){
    return (
      <PageBase title="Lista de equipes"
                navigation="Application / Table Page">
        <div>
          <Link to="/equipe" >
            <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
              <ContentAdd />
            </FloatingActionButton>
          </Link>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Cogigo</TableHeaderColumn>
                <TableHeaderColumn>Nome</TableHeaderColumn>
                <TableHeaderColumn>CPF</TableHeaderColumn>
                <TableHeaderColumn>Data de Nascimento</TableHeaderColumn>
                <TableHeaderColumn>RG</TableHeaderColumn>
                <TableHeaderColumn>Posição</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.exibirAtletas()}
            </TableBody>
          </Table>
        </div>
      </PageBase>
    );
  }
}
export function mapStateToProps(state){
  return{
    atletaSelecionado: state.atletaSelecionado,
    atletas: state.atletas
  };
}
export default connect(mapStateToProps, {selecionarEquipe, buscarEquipes, excluirEquipe } )(Equipes);
