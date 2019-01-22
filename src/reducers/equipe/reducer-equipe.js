import {BUSCAR_EQUIPES,
  SELECIONAR_EQUIPE,
  SALVAR_EQUIPE} from "../../actions/types";

export default function  reducerEquipe ( state = [], action) {
  switch (action.type) {
    case BUSCAR_EQUIPES: {
      return action.payload.data;
    }
    case SELECIONAR_EQUIPE:{
      return action.payload;
    }
    case SALVAR_EQUIPE: {
      return action.payload.data;
    }

    default:{
      return state;
    }
  }
}
