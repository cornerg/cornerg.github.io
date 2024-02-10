import * as React from "react";

type accessContext = {reduceMotion: boolean, setReduceMotion: Function};
export const AccessData = React.createContext<accessContext>({reduceMotion: false, setReduceMotion: () => {console.log("Motion context not yet initialized")}});