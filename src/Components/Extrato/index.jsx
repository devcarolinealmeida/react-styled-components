import React from 'react';

import { Box, Button } from '../UI';
import { extratoLista } from '../../info';

import Items from '../Items';

const Extrato = () => {
    return <Box>
        { extratoLista.updates.map(( { id, type, value, date, from } ) => {
            return ( 
                <Items key={id} type={type} value={value} date={date} from={from} />
            )
        })}
        <Button>See more</Button>
        </Box>
}
 
export default Extrato;