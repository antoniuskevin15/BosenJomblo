import React, { useState } from 'react';
import ArrayHighlight from './list-array-highlight';


type contextProps = {
    children: React.ReactNode;
}

const ArrayHighlightProvider = (props: contextProps) => {
    const [arrayNum, setArrayNum] = useState<number[]>([]);

    const addList = (num: number) => {
        const added = num;
        setArrayNum((listNow) => {
            return listNow.concat(added);
        })
    };
    const deleteList = (num: number) => {
        arrayNum.splice(arrayNum.indexOf(num), 1);
    };
    return (
        <ArrayHighlight.Provider value={{
            arrayNum,
            addList,
            deleteList
        }}>
            {props.children}
        </ArrayHighlight.Provider>
    );
};

export default ArrayHighlightProvider;