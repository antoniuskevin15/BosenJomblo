import React from 'react';

export interface Context {
    arrayNum: number[];
    addList: (num: number) => void,
    deleteList: (num: number) => void
};

const ArrayHighlight = React.createContext<Context>({
    arrayNum: [],
    addList: () => {},
    deleteList: () => {}
});

export default ArrayHighlight;