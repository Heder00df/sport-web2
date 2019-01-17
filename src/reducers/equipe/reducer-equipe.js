import {BUSCAR_EQUIPES, SELECIONAR_EQUIPE} from "../../actions/types";

export default function  reducerEquipe ( state = [], action) {
  switch (action.type) {
    case BUSCAR_EQUIPES: {
      return action.payload;
    }
    case SELECIONAR_EQUIPE:{
      return action.payload;
    }
    default:{
      return state;
    }
  }
}
