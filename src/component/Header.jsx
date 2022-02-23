import {makeStyles, styled} from '@mui/styles';

const useStyles = makeStyles({
    header: {
        // width: '1439.95px',
        width: '100%',
        height: '36.48px',
        backgroundColor: '#3772FF',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins',
        fontSize: '14px',
        lineHeight: '26px',
        fontStyle: 'normal',
        fontWeight: '700',
    }
})


const Header = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.header}>
            Lorem Ipsum is simply dummy text of the printing
        </Typography>
    )
}

const Typography = styled('p')({
    
})

export default Header;