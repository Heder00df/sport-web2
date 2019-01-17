import React from 'react';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';
import Data from '../../data';

const EquipesTable = () => {

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

  return (
    <PageBase title="Lista de equipes"
              navigation="Application / Table Page">

      <div>
        <Link to="/form" >
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
            {Data.tablePage.equipes.map(equipe =>
              <TableRow key={equipe.id}>
                <TableRowColumn style={styles.columns.id}>{equipe.id}</TableRowColumn>
                <TableRowColumn style={styles.columns.name}>{equipe.descricao}</TableRowColumn>
                <TableRowColumn style={styles.columns.edit}>
                  <Link className="button" to="/form">
                    <FloatingActionButton zDepth={0}
                                          mini={true}
                                          backgroundColor={grey200}
                                          iconStyle={styles.editButton}>
                      <ContentCreate  />
                    </FloatingActionButton>
                  </Link>
                </TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>    
      </div>
    </PageBase>
  );
};

export default EquipesTable;
