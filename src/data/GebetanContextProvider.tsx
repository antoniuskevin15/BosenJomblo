import React, { useState } from 'react';
import DataGebetanContext, { Gebetan } from "./list-gebetan-context"

type contextProps = {
    children: React.ReactNode;
}

const GebetanContextProvider = (props: contextProps) => {
    const [gebetans, setGebetans] = useState<Gebetan[]>([
        { id: '1', fname: 'Shalden', lname: 'Rouge', caption: 'Yes yes', url: 'https://cdn-icons-png.flaticon.com/512/4140/4140051.png', gender: 'Female' },
        { id: '2', fname: 'Molly Blue', lname: 'Wolf', caption: 'Oh Yeah!!', url: 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png', gender: 'Female' },
        { id: '3', fname: 'Golden', lname: 'Natasha', caption: 'Noice', url: 'https://cdn-icons-png.flaticon.com/512/6997/6997662.png', gender: 'Female' },
        { id: '4', fname: 'Divi', lname: 'Mini', caption: 'Nicee!!', url: 'https://cdn-icons-png.flaticon.com/512/417/417776.png', gender: 'Female' },
        { id: '5', fname: 'Sick For', lname: 'Lala', caption: 'Beleh beleh', url: 'https://cdn-icons-png.flaticon.com/512/363/363098.png', gender: 'Female' },
        { id: '6', fname: 'Sayang', lname: 'Reislin', caption: 'Prikiteeww', url: 'https://cdn-icons-png.flaticon.com/512/2293/2293793.png', gender: 'Female' },
        { id: '7', fname: 'Si', lname: ' Cantik', caption: 'Gaskannn', url: 'https://cdn-icons-png.flaticon.com/512/3233/3233486.png', gender: 'Female' },
        { id: '8', fname: 'Si', lname: ' Manis', caption: 'Lop uu', url: 'https://cdn-icons-png.flaticon.com/512/3577/3577135.png', gender: 'Female' },
        { id: '9', fname: 'Putri', lname: 'Sitohang', caption: 'Semangatt!!', url: 'https://cdn-icons-png.flaticon.com/512/4580/4580467.png', gender: 'Female' },
        { id: '10', fname: 'Rupawan', lname: 'Cuy', caption: 'Asikin ajaa', url: 'https://cdn-icons-png.flaticon.com/512/4128/4128400.png', gender: 'Female' },
        { id: '11', fname: 'Budi', lname: 'Putra', caption: 'Lakii!!', url: 'https://cdn-icons-png.flaticon.com/512/4128/4128176.png', gender: 'Male' },
        { id: '12', fname: 'Irvan', lname: 'Hukum', caption: 'Kekar', url: 'https://cdn-icons-png.flaticon.com/512/4139/4139981.png', gender: 'Male' },
        { id: '13', fname: 'Dhio', lname: 'Dia', caption: 'Mantullss', url: 'https://cdn-icons-png.flaticon.com/512/2940/2940654.png', gender: 'Male' },
        { id: '14', fname: 'Anton', lname: 'Kevski', caption: 'Crossplat Asik', url: 'https://cdn-icons-png.flaticon.com/512/4140/4140057.png', gender: 'Male' },
        { id: '15', fname: 'Iwa', lname: 'Gans', caption: 'Super man', url: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png', gender: 'Male' },
        { id: '16', fname: 'Vallen', lname: 'Nais', caption: 'Lorttt', url: 'https://cdn-icons-png.flaticon.com/512/4140/4140039.png', gender: 'Male' },
        { id: '17', fname: 'Tampan', lname: 'Gan', caption: 'Cocoksss', url: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png', gender: 'Male' },
        { id: '18', fname: 'Joni', lname: ' Doremi', caption: 'Musikk', url: 'https://cdn-icons-png.flaticon.com/512/1795/1795596.png', gender: 'Male' },
        { id: '19', fname: 'Thor', lname: 'Ragnarok', caption: 'Odinson!', url: 'https://cdn-icons-png.flaticon.com/512/4140/4140061.png', gender: 'Male' },
        { id: '20', fname: 'Chris', lname: ' Evans', caption: 'Captain America', url: 'https://cdn-icons-png.flaticon.com/512/3233/3233483.png', gender: 'Male' }
    ]);

    const addList = (gebetan: Gebetan) => {
        const listTambahan: Gebetan = {
            id: gebetan.id,
            fname: gebetan.fname,
            lname: gebetan.lname,
            caption: gebetan.caption,
            gender: gebetan.gender,
            url: gebetan.url
        };
        setGebetans((listNow) => {
            return listNow.concat(listTambahan);
        })
    };
    const deleteList = (gebetan: Gebetan) => {
        gebetans.splice(gebetans.indexOf(gebetan), 1);
    };
    return (
        <DataGebetanContext.Provider value={{
            gebetans,
            addList,
            deleteList
        }}>
            {props.children}
        </DataGebetanContext.Provider>
    );
};

export default GebetanContextProvider;