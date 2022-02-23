import {Box} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
// import { useInput } from '@mui/base';


const useStyles = makeStyles({
    rightPanel: {
        // position: 'absolute',
        width: '480px',
        float: 'right',
        top: '41.48px',
        height: '100vh',
        borderLeft: '1px solid #242731',
        overflow: 'hidden',
        padding: '20px 30px',
        display: 'flex',    
        flexDirection: 'column',
        fontSize: '14px',
    },
    avalanch: {
        backgroundColor: '#353945',
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontStyle: 'normal',
        paddingRight: '5px',
    },
    avalanche: {
        
    },
    button4 : {
        border: '1px solid #242731 !important',
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '12',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '24px',
        textAlign: 'center',
        '& > *' :{
            padding: '0 5px',
        }
    },
    button3: {
        backgroundColor: '#3772FF',
        borderRadius: '10px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '24px',
        textAlign: 'center',
        color: '#fff',
        '& > *' :{
            padding: '0 5px',
        }
    },
    svg : {
        fontSize: '14px',
    },
    inputfield: {
       marginTop: '30px !important'
    },
    anchortag: {
        textDecoration: 'none',
        color: '#fff',
        paddingLeft: '20px',
        fontFamily: 'Poppins',
        fontWeight: '400 !important',
        fontStyle: 'normal'

    },
    button2: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '24px',
        textAlign: 'center',
        color: '#fff',
        background: '#000',
        borderRadius: '10px',
        border: '1px solid #3772FF !important',
        '& > *' :{
            padding: '0 5px',
        }
    },
    box1: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '20px',
        justifyContent: 'space-between',
        marginBottom: '30px'
    },
    box3: {
        display: 'flex',
        marginBottom: '40px',
        paddingLeft: '10px',
        alignItems: 'center',
        
    },
    box4: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '20px',
        justifyContent: 'space-between',
        marginBottom: '60px',
        padding: '25px'
    },
    customLink: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px !important',
        lineHeight: '24px',
        paddingLeft: '10px'
    },
  
 
})


const RightPanel = () => {
    const classes = useStyles();
    return (
        <Box className={classes.rightPanel}>
            <Box className={classes.box1}>
                <Button className={classes.avalanch}>
                    <Typography className={classes.avalanche}>Avalanche</Typography>
                    <svg className={classes.svg1} width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.82277 0.0812988L4.52778 3.72408L1.2328 0.0812988L0.220612 1.20276L4.52778 5.97496L8.83495 1.20276L7.82277 0.0812988Z" fill="white"/>
                    </svg>
                </Button>
                <Button className={classes.button2}>
                    <svg className={classes.svg} width="31" height="26" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3479 10.2662H16.2959C14.8081 10.2655 13.6022 9.30171 13.6013 8.11177C13.6013 6.92184 14.8081 5.95807 16.2959 5.95734H20.3479" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.7542 8.06248H16.4423" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.4439 1.14359H15.0953C17.9961 1.14359 20.3478 3.02443 20.3478 5.34448V11.0899C20.3478 13.4099 17.9961 15.2908 15.0953 15.2908H6.4439C3.54308 15.2908 1.19141 13.4099 1.19141 11.0899V5.34448C1.19141 3.02443 3.54308 1.14359 6.4439 1.14359Z" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Typography>0xf6...1353</Typography>
                    <svg className={classes.svg} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2969 0.236542L6.026 3.92013L1.75509 0.236542L0.443115 1.37057L6.026 6.19624L11.6089 1.37057L10.2969 0.236542Z" fill="white"/>
                    </svg>
                </Button>
            </Box>
            <Box className={classes.box2}>
                <Box className={classes.box3}>
                    <svg className={classes.svg} width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.159832 4.55645L4.36365 0.352631L5.13492 1.1239L1.8622 4.39663H11.4546C11.7562 4.39663 12 4.64099 12 4.94209C12 5.24318 11.7562 5.48754 11.4546 5.48754H1.8622L5.13492 8.76027L4.36365 9.53154L0.159832 5.32772C-0.0534402 5.11445 -0.0534402 4.76972 0.159832 4.55645Z" fill="white"/>
                    </svg>
                    <Typography className={classes.customLink}>Custom link</Typography>
                </Box>
                <a href='https://naturelabs-neelra8n.vercel.app/' className={classes.anchortag} >https://testnet.xyz.xyz/trade?ref=</a>
                <Input className={classes.inputfield} placeholder= "ENTER"/>
                <Box className={classes.box4}>
                    <Button className={classes.button3}>
                        <svg className={classes.svg} width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5913 15.6857H5.59131V13.7295H13.5913V1.99222H3.59131V7.86084H1.59131V1.01411C1.59131 0.474201 2.03931 0.0360107 2.59131 0.0360107H14.5913C15.1433 0.0360107 15.5913 0.474201 15.5913 1.01411V14.7076C15.5913 15.2475 15.1433 15.6857 14.5913 15.6857Z" fill="white"/>
                        <path d="M11.5912 3.94843H5.59125L7.88425 6.19122L0.177246 13.7295L1.59125 15.1125L9.29825 7.57425L11.5912 9.81705V3.94843Z" fill="white"/>
                        </svg>
                        <Typography>Custom link</Typography>
                    </Button>
                    <Button className={classes.button4}>
                        <svg className={classes.svg} width="27" height="27" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.05151 7.8042H0.0515137V9.8042H6.05151V12.8042L10.0515 8.8042L6.05151 4.8042V7.8042Z" fill="white"/>
                        <path d="M15.0515 16.8042H1.05151C0.499514 16.8042 0.0515137 16.3562 0.0515137 15.8042V11.8042H2.05151V14.8042H14.0515V2.8042H2.05151V5.8042H0.0515137V1.8042C0.0515137 1.2522 0.499514 0.804199 1.05151 0.804199H15.0515C15.6035 0.804199 16.0515 1.2522 16.0515 1.8042V15.8042C16.0515 16.3562 15.6035 16.8042 15.0515 16.8042Z" fill="white"/>
                        </svg>
                        <Typography>Cancel</Typography>
                    </Button>
                </Box>
            </Box>
         </Box>
    )
}


const Button = styled('button')({
    margin: '10px',
    width: '200px',
    height: '40px',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    borderStyle: 'none'
})

const Input = styled('input')({
    background: '#242731',
    mixBlendMode: 'normal',
    borderRadius: '12px',
    borderStyle: 'none',
    width: '95%',
    height: '50px',
    margin: '0 10px',
    paddingLeft: '20px',
    fontWeight: '700'
})

const Typography = styled('p')({
    color: '#fff',
    fontSize: '14px',
    margin: '0 5px',
    fontWeight: 'bold'
})



export default RightPanel;


