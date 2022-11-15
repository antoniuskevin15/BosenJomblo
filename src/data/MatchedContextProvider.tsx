import React, { useState } from 'react';
import MatchedContext, { Pacar } from './list-matched-context';

type contextProps = {
    children: React.ReactNode;
}

const MatchedContextProvider = (props: contextProps) => {
    const [matches, setMatches] = useState<Pacar[]>([]);

    const addPacar = (pacar: Pacar) => {
        const listTambahan: Pacar = {
            id: pacar.id,
            fname: pacar.fname,
            lname: pacar.lname,
            caption: pacar.caption,
            gender: pacar.gender,
            url: pacar.url
        };
        setMatches((listNow) => {
            return listNow.concat(listTambahan);
        })
    };
    const deletePacar = (pacar: Pacar) => {
        matches.splice(matches.indexOf(pacar), 1);
    };
    return (
        <MatchedContext.Provider value={{
            matches,
            addPacar,
            deletePacar
        }}>
            {props.children}
        </MatchedContext.Provider>
    );
};

export default MatchedContextProvider;