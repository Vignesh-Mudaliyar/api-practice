import React from 'react'
import { Button } from 'react-bootstrap'

export default function Buttons({variant="primary",value,onClickFunction}) {
    return (
        <Button className='m-3' variant={variant} onClick={onClickFunction}>{value}</Button>
    )
}
