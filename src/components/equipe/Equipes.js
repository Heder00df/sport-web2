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
  },
  columns: {
    id: {
      width: '10%'
    },
    name: {
      width: '40%'
    },
    edit: {
      width: '10%'
    }
  }
};

class Equipes extends React.Component{

  componentDidMount(){
    this.props.buscarEquipes();
  }
  remove(equipe){
    this.props.excluirEquipe(equipe);

  }

  exibirEquipes(){
    if (this.props.equipes.length > 0){
      return this.props.equipes.map(equipe =>
        <TableRow key={equipe.id}>
          <TableRowColumn style={styles.columns.id}>{equipe.id}</TableRowColumn>
          <TableRowColumn style={styles.columns.name}>{equipe.descricao}</TableRowColumn>
          <TableRowColumn style={styles.columns.edit}>
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
                <TableHeaderColumn style={styles.columns.id}>Cogigo</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.name}>Nome</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.exibirEquipes()}
            </TableBody>
          </Table>
        </div>
      </PageBase>
    );
  }
}
export function mapStateToProps(state){
  return{
    equipeSelecionada: state.equipeSelecionada,
    equipes: state.equipes
  };
}
export default connect(mapStateToProps, {selecionarEquipe, buscarEquipes, excluirEquipe } )(Equipes);
