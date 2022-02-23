import {Box} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { useState } from 'react';
import Tab from './Tab';
// import axios from 'axios';




const useStyles = makeStyles({
    mainBody: {
      position: 'absolute',
      top: '40px',
      left: '300px',
      width: 'calc((100% - 780px))',
      height: '100vh',
      padding: '20px 40px'
    },
    card: {
        width: 'calc(50% - 10px)',
        backgroundColor: '#191B20',
        margin: '20px',
        height: '200px',
        borderRadius: '16px',
        padding: '30px 20px',
        overflow: 'hidden'
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
    },
    cardHeading: {
       fontFamily: 'Poppins',
       fontWeight: '900 !important',
        fontSize: '22px!important',
        marginLeft: '10px',
        fontStyle: 'normal'
    },
    cardSubHeading: {
        padding: '25px 0 15px',
        color: '#808191 !important',
        fontWeight: '500 !important',
        fontSize: '16px !important'
    },
    linkBox:{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#242731',
        borderRadius: '8px',
        justifyContent: 'space-between',
        padding: '15px 20px'
        
    },
    heading: {
        display: 'flex',
        alignItems: 'center',
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
    rewardCard: {
        width: 'calc(100% - 40px)',
        backgroundColor: '#191B20',
        borderRadius: '24px',
        marginLeft: '20px',
        height: '200px',
        padding: '30px 50px 30px 35px',
        '& > :first-child' : {
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '20px',
        }
    },
    span: {
        color: '#fff',
        fontSize: '11px',
        
        '& > *' :{
            backgroundColor: '#353945',
            borderRadius: '11px',
            padding: '4px 12px',
            fontFamily: 'Poppins',
            fontWeight: '700',
            marginRight: '8px'

        }
    },
    price: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
        '& > :first-child' : {
            fontFamily: 'Poppins',
            fontWeight: '700',
            fontSize: '28px',
        }
    },
    button2: {
        fontStyle: 'normal',
        lineHeight: '24px',
        textAlign: 'center',
        color: '#fff',
        width: '220px !important',
        background: '#191B20',
        borderRadius: '10px',
        '& > *': {
            margin: '0 5px'
        }
    },
    button4: {
        width: '50px !important',
        height: '20px !important',
        fontSize: '11px',
        color: '#3772FF',
        backgroundColor: '#A3E3FF',
        borderRadius: '5px !important',
        marginLeft: '20px!important'
    },
    section:{
        display: 'flex',
        alignItems: 'center',
        margin: '0 20px 20px 30px',
        justifyContent: 'space-between',

        '& > :first-child' : {
            fontWeight: '600',
            fontSize: '18px'
        }
    },
    horizontalLine: {
        marginTop: '6px',
    },
    buttonText: {
        fontSize: '14px !important'
    },
    apiSection:{
        padding: '0 20px'

    },
    apiSectionHeader:{
        display: 'flex',
        padding: '15px 0',
    },
    tab1: {
        fontSize: '18px !important',
        margin: '0 8px'
    },
    tab2: {
        fontSize: '18px !important',
        opacity: '0.5',
        margin: '0 20px'
    },
    tutorial: {
        backgroundColor: '#ABE8FF',
        borderRadius: '10px',
        margin: '0 20px 20px',
        height: '100px',
        padding: '20px'
    },
    tutorialSvg1: {
        position: 'absolute',
        left: '93%',
        top: '91px'
    },
    tutorialSvg2: {

    },
    tutorialText: {
        color: '#2B2557 !important',
        fontFamily: 'Poppins !important',
        fontWeight: '500 !important',
        fontStyle: 'normal',
        fontSize: '14px',
    },
    tutorialButton: {
        fontSize: '12px',
        borderRadius: '6px !important',
        width: '90px !important',
        height: '30px !important',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        color:'#2B2557',
        marginLeft: '0px!important'
    },
    bitcoinSvg:{
        transform: 'translateX(-25px)'
    },
    

})




const Body = () => {
    const classes = useStyles();
    const [state, setState] = useState(0);

    return (
        <Box className={classes.mainBody}>
           <Box className={classes.section}>
               <Typography>Section<hr color='#3772FF' className={classes.horizontalLine}/></Typography>
               <Button className={classes.button2}>
                    <svg className={classes.svg3} width="21" height="26" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3479 10.2662H16.2959C14.8081 10.2655 13.6022 9.30171 13.6013 8.11177C13.6013 6.92184 14.8081 5.95807 16.2959 5.95734H20.3479" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.7542 8.06248H16.4423" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.4439 1.14359H15.0953C17.9961 1.14359 20.3478 3.02443 20.3478 5.34448V11.0899C20.3478 13.4099 17.9961 15.2908 15.0953 15.2908H6.4439C3.54308 15.2908 1.19141 13.4099 1.19141 11.0899V5.34448C1.19141 3.02443 3.54308 1.14359 6.4439 1.14359Z" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Typography className={classes.buttonText} >0.2 $XYZ</Typography>
                    <Button className={classes.button4}>Tier 1</Button>
                </Button>
           </Box>
           
           <Box className={classes.tutorial}>
                <svg className={classes.tutorialSvg1} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.3738" cy="12.6436" r="12" fill="white"/>
                <path d="M15.8738 9.14355L8.87378 16.1436" stroke="#191B20" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.87378 9.14355L15.8738 16.1436" stroke="#191B20" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            <Typography className={classes.tutorialText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
            <Button className={classes.tutorialButton}>
                Tutorial
            </Button>
           </Box>

           <Box className={classes.rewardCard}>
                <Typography>Your Reward</Typography>
                <Box className={classes.price}>
                    <Typography>$ 0.26231428</Typography>
                    <Button className={classes.button3}>
                        <svg className={classes.svg} width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5913 15.6857H5.59131V13.7295H13.5913V1.99222H3.59131V7.86084H1.59131V1.01411C1.59131 0.474201 2.03931 0.0360107 2.59131 0.0360107H14.5913C15.1433 0.0360107 15.5913 0.474201 15.5913 1.01411V14.7076C15.5913 15.2475 15.1433 15.6857 14.5913 15.6857Z" fill="white"/>
                        <path d="M11.5912 3.94843H5.59125L7.88425 6.19122L0.177246 13.7295L1.59125 15.1125L9.29825 7.57425L11.5912 9.81705V3.94843Z" fill="white"/>
                        </svg>
                        <Typography>Custom link</Typography>
                    </Button>
                </Box> 
                <Box className={classes.span}>
                        <span>$40 AVAX</span>
                        <span>$10 BNB</span>
                        <span>$210 BTC</span>
                </Box>
           </Box>
           <Box className={classes.cards}>
                <Box className={classes.card}>
                    <Box className={classes.heading}>
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.9747" cy="12.3044" r="12.0673" fill="url(#paint0_linear_0_532)"/>
                        <path d="M15.3193 10.2586H11.0659C10.2514 11.1896 8.79163 13.0769 8.79163 14.6595C8.79163 15.3742 9.10917 17.7064 13.1926 17.7064C17.276 17.7064 17.5935 15.3742 17.5935 14.6595C17.5935 13.0769 16.1338 11.1896 15.3193 10.2586Z" fill="white"/>
                        <path d="M12.8543 9.58404V8.2299H13.5314V9.58404H15.0947L16.4489 6.87576H9.9368L11.2909 9.58404H12.8543Z" fill="white"/>
                        <defs>
                        <linearGradient id="paint0_linear_0_532" x1="-11.1598" y1="12.3044" x2="12.9747" y2="36.4389" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BBB5E2"/>
                        <stop offset="1" stop-color="#9C92DF"/>
                        </linearGradient>
                        </defs>
                        </svg>
                        <Typography className={classes.cardHeading}>12.5% of fee</Typography>
                    </Box>
                        <Typography className={classes.cardSubHeading}>Your Referral Link for xyz</Typography>
                        <Box className={classes.linkBox}>
                            <Typography>https://unityexchange.design</Typography>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2812 12.5594H1.28125C0.72825 12.5594 0.28125 12.1124 0.28125 11.5594V1.55939C0.28125 1.00739 0.72825 0.559387 1.28125 0.559387H11.2812C11.8342 0.559387 12.2812 1.00739 12.2812 1.55939V11.5594C12.2812 12.1124 11.8342 12.5594 11.2812 12.5594Z" fill="white"/>
                            <path d="M15.2812 16.5594H4.28125V14.5594H14.2812V4.55939H16.2812V15.5594C16.2812 16.1124 15.8342 16.5594 15.2812 16.5594Z" fill="white"/>
                            </svg>
                        </Box>
                </Box>
                <Box className={classes.card}>
                    <Box className={classes.heading}>
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.9747" cy="12.3044" r="12.0673" fill="url(#paint0_linear_0_532)"/>
                        <path d="M15.3193 10.2586H11.0659C10.2514 11.1896 8.79163 13.0769 8.79163 14.6595C8.79163 15.3742 9.10917 17.7064 13.1926 17.7064C17.276 17.7064 17.5935 15.3742 17.5935 14.6595C17.5935 13.0769 16.1338 11.1896 15.3193 10.2586Z" fill="white"/>
                        <path d="M12.8543 9.58404V8.2299H13.5314V9.58404H15.0947L16.4489 6.87576H9.9368L11.2909 9.58404H12.8543Z" fill="white"/>
                        <defs>
                        <linearGradient id="paint0_linear_0_532" x1="-11.1598" y1="12.3044" x2="12.9747" y2="36.4389" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BBB5E2"/>
                        <stop offset="1" stop-color="#9C92DF"/>
                        </linearGradient>
                        </defs>
                        </svg>
                        <Typography className={classes.cardHeading}>12.5% of fee</Typography>
                    </Box>
                        <Typography className={classes.cardSubHeading}>Your Referral Link for xyz</Typography>
                        <Box className={classes.linkBox}>
                            <Typography>https://unityexchange.design</Typography>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2812 12.5594H1.28125C0.72825 12.5594 0.28125 12.1124 0.28125 11.5594V1.55939C0.28125 1.00739 0.72825 0.559387 1.28125 0.559387H11.2812C11.8342 0.559387 12.2812 1.00739 12.2812 1.55939V11.5594C12.2812 12.1124 11.8342 12.5594 11.2812 12.5594Z" fill="white"/>
                            <path d="M15.2812 16.5594H4.28125V14.5594H14.2812V4.55939H16.2812V15.5594C16.2812 16.1124 15.8342 16.5594 15.2812 16.5594Z" fill="white"/>
                            </svg>
                        </Box>
                </Box>
           </Box>
           <Box className={classes.apiSection}> 
                <Box className={classes.apiSectionHeader}>
                    <Typography onClick={()=>setState(0)} className={classes.tab1}>First Tab<hr style={{marginTop: '5px'}} color='#3772FF'/></Typography>
                    <Typography onClick={()=>setState(1)} className={classes.tab2}>Second Tab</Typography>
                </Box>  
                <Box className={classes.table}>
                    <Table>
                        <Tr>
                            <Th>ASSET</Th>
                            <Th>AMOUNT</Th>
                            <Th>USER ACCOUNT</Th>
                            <Th>REFERRAL EARNING</Th>
                        </Tr>
                        <Tab state={state} />
                    </Table>
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

const Typography = styled('p')({
    color: '#fff',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',

})

const Table = styled('div')({
    color: '#fff',
    width: '100%'
})

const Th = styled('div')({
    fontSize: '11px',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontStyle: 'normal',
    opacity: '0.5'
})

const Tr = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#191B20',
    borderRadius: '8px',
    height: '40px',
    alignItems: 'center',
    padding: '0 50px'
})


export default Body;
