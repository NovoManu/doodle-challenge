import { CURRENT_USER } from "../utils/constants";

// TODO: replace with actual API calls when api is provided

function getCurrentUser () {
    return CURRENT_USER; 
}

export const users = {
  getCurrentUser,
};