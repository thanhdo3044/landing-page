import {User} from './Mockr'


export const getUser = ()=> {
  return new Promise (resolve => resolve(User))
};