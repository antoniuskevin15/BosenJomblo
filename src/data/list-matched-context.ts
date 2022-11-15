import React from 'react';
export interface Pacar {
    id: string,
    fname: string,
    lname: string,
    caption: string,
    gender: string,
    url: string
};

export interface Context {
    matches: Pacar[];
    addPacar: (tambah: Pacar) => void,
    deletePacar: (hapus: Pacar) => void
}

const MatchedContext = React.createContext<Context>({
    matches: [],
    addPacar: () => {},
    deletePacar: () => {}
});

export default MatchedContext;