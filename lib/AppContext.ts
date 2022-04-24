import { createContext } from "react";
import * as config from '../config.json';
const AppContext =createContext(config);
export default AppContext;