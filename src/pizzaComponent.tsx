import React, { useEffect } from 'react'
import { makeStyles, Slider, Button } from '@material-ui/core'
import { State } from './reducer'
import { pizzaHundler } from './pizzaContainer'

const useStyles = makeStyles({
    orderWrapper: {
        margin: '0 auto',
        padding: 30,
        textAlign: 'center',
        '& button': {
            padding: '0 50px'
        },
        maxWidth: 400
    },
    tabesugi: {
        fontSize: '300%'
    },
    button: {
        margin: '30px 0'
    }
});

type Props = State & pizzaHundler

export const PizzaComponent: React.FC<Props> = (props: Props) => {
    const count = 1
    useEffect(() => {
        props.hundleInit()
    }, [count])
    const classes = useStyles();
    return (
        <>
            <div className={classes.orderWrapper}>
                <div>ようこそ{props.username}さん</div>
            </div>
        </>
    )
}