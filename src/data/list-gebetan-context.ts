import React from 'react';
export interface Gebetan {
    id: string,
    fname: string,
    lname: string,
    caption: string,
    gender: string,
    url: string
};

export interface Context {
    gebetans: Gebetan[];
    addList: (gebetan: Gebetan) => void,
    deleteList: (gebetan: Gebetan) => void
};

const DataGebetanContext = React.createContext<Context>({
    gebetans: [],
    addList: () => {},
    deleteList: () => {}
});

export default DataGebetanContext;