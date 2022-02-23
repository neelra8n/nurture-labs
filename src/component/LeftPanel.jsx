import {Box} from '@mui/material'
import { makeStyles, styled } from '@mui/styles';



const useStyles = makeStyles({
    profileName: {
        display: 'flex',
        flexDirection: 'rows',
        alignItems: 'center',
        marginLeft: '10px'
    },
    leftPanel: {
        position: 'absolute',
        width: '300px',
        left: '0%',
        top: '41.48px',
        height: '100vh',
        borderRight: '1px solid #242731',
        overflow: 'hidden',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 30px',

    },
    logo: {
        backgroundColor: '#3772FF',
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    svg1: {
        marginLeft: '60px'
    },
    typography: {
        fontFamily: 'Poppins !important',
        color: '#fff !important',
        marginLeft: '10px',
        fontSize: '26px !important',
        fontWeight: '700 !important',
        fontStyle: 'normal'
    },
    sections: {
        marginTop: '40px',
        '& > *' : {
            padding: '20px 15px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            '& > :first-child' : {
                marginRight: '20px'
            }
        }
    },
    section8:{
        borderRadius: '12px',
        backgroundColor: '#353945',
        '& > :last-child' : {
            color: '#fff'
        }
    },
    bottom: {
        marginTop: '60px',
    },
    div1:{
        display: 'flex',
        alignItems: 'center',
        '& > :last-child' : {
            backgroundColor: '#A3E3FF',
            width: '90px',
            height: '35px',
            borderRadius: '10px',
            color: '#3772FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            fontSize: '14px'
        }
    },
    div2:{
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px'
    },
    subDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#353945',
        borderRadius: '10px',
        width: '90px',
        height: '35px',
        fontSize: '14px',
        marginRight: '8px'
    },
    textN: {
        backgroundColor: '#3772FF',
        fontSize: '10px',
        borderRadius: '50%',
        width: '16px',
        height: '16px',
        textAlign: 'center',
        paddingTop: '3px',
        marginRight: '6px'
    },
    toggle:{
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10px', 
        backgroundColor: '#353945', 
        borderRadius: '30px', 
        width: '70px', 
        height: '30px',
    }
})

const LeftPanel = () => {
    const classes = useStyles();
    return (
        <Box className={classes.leftPanel}>
            <Box className={classes.profileName}>
                <Box className={classes.logo}>N</Box>
                <Typography className={classes.typography}>Name</Typography>
                    <svg className={classes.svg1} width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.2588 19.2968H11.2588" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M30.2588 11.7211H21.2588" stroke="#808191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.301406" d="M30.2588 26.8724H21.2588" stroke="#808191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.2588 14.562L10.2588 19.2968L15.2588 24.0316" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </Box>
            <Box className={classes.sections}>
                <Box>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6288 1.30081H16.5186C17.7142 1.30081 18.6841 2.22724 18.6841 3.37012V6.12948C18.6841 7.2715 17.7142 8.19879 16.5186 8.19879H13.6288C12.4323 8.19879 11.4624 7.2715 11.4624 6.12948V3.37012C11.4624 2.22724 12.4323 1.30081 13.6288 1.30081Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15811 1.30081H6.04695C7.24346 1.30081 8.21336 2.22724 8.21336 3.37012V6.12948C8.21336 7.2715 7.24346 8.19879 6.04695 8.19879H3.15811C1.9616 8.19879 0.991699 7.2715 0.991699 6.12948V3.37012C0.991699 2.22724 1.9616 1.30081 3.15811 1.30081Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15817 11.1573H6.04701C7.24352 11.1573 8.21342 12.0838 8.21342 13.2275V15.986C8.21342 17.1289 7.24352 18.0553 6.04701 18.0553H3.15817C1.96166 18.0553 0.99176 17.1289 0.99176 15.986V13.2275C0.99176 12.0838 1.96166 11.1573 3.15817 11.1573Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6291 11.1573H16.5188C17.7144 11.1573 18.6843 12.0838 18.6843 13.2275V15.986C18.6843 17.1289 17.7144 18.0553 16.5188 18.0553H13.6291C12.4325 18.0553 11.4626 17.1289 11.4626 15.986V13.2275C11.4626 12.0838 12.4325 11.1573 13.6291 11.1573Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Typography>Home</Typography>
                </Box>
                <Box>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none"     xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.3634 8.81891V15.3152" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.0294 5.70985V15.3146" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.6202 12.2516V15.315" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6774 1.1138H6.30598C3.03932 1.1138 0.991699 3.30324 0.991699 6.4027V14.764C0.991699 17.8635 3.02979 20.0529 6.30598 20.0529H15.6774C18.9536 20.0529 20.9917 17.8635 20.9917 14.764V6.4027C20.9917 3.30324 18.9536 1.1138 15.6774 1.1138Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Typography>Section 1</Typography>
                </Box>
                <Box>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.04169 10.3486V10.8486H4.54169H5.84171C6.00159 10.8486 6.09171 10.972 6.09171 11.0588V16.6648C6.09171 16.7516 6.00159 16.875 5.84171 16.875H4.54169H4.04169V17.375V18.6723C4.04169 18.7591 3.95157 18.8826 3.79169 18.8826C3.6318 18.8826 3.54169 18.7591 3.54169 18.6723V17.375V16.875H3.04169H1.7417C1.58182 16.875 1.4917 16.7516 1.4917 16.6648V11.0588C1.4917 10.972 1.58182 10.8486 1.7417 10.8486H3.04169H3.54169V10.3486V7.85809C3.54169 7.77131 3.6318 7.64787 3.79169 7.64787C3.95157 7.64787 4.04169 7.77131 4.04169 7.85809V10.3486Z" stroke="#808191"/>
                    <path d="M11.262 4.90246V5.40246H11.762H13.012C13.1718 5.40246 13.262 5.5259 13.262 5.61268V14.7224C13.262 14.8092 13.1718 14.9326 13.012 14.9326H11.772H11.272V15.4326V16.73C11.272 16.8167 11.1819 16.9402 11.022 16.9402C10.8621 16.9402 10.772 16.8167 10.772 16.73V15.4326V14.9326H10.272H9.02197C8.86209 14.9326 8.77197 14.8092 8.77197 14.7224V5.61268C8.77197 5.5259 8.86209 5.40246 9.02197 5.40246H10.262H10.762V4.90246V1.98584C10.762 1.89905 10.8521 1.77562 11.012 1.77562C11.1718 1.77562 11.262 1.89905 11.262 1.98584V4.90246Z" stroke="#808191"/>
                    <path d="M18.4421 2.34674V2.84674H18.9421H20.2421C20.402 2.84674 20.4921 2.97017 20.4921 3.05695V11.9962C20.4921 12.083 20.402 12.2064 20.2421 12.2064H18.9421H18.4421V12.7064V14.7234C18.4421 14.8102 18.352 14.9337 18.1921 14.9337C18.0322 14.9337 17.9421 14.8102 17.9421 14.7234V12.7064V12.2064H17.4421H16.1421C15.9822 12.2064 15.8921 12.083 15.8921 11.9962V3.05695C15.8921 2.97017 15.9822 2.84674 16.1421 2.84674H17.4421H17.9421V2.34674V1.15358C17.9421 1.06679 18.0322 0.943359 18.1921 0.943359C18.352 0.943359 18.4421 1.06679 18.4421 1.15358V2.34674Z" stroke="#808191"/>
                    </svg>
                    <Typography>Section 2</Typography>
                </Box>
                <Box>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.4585 13.5656L8.45163 9.8818L11.8658 12.4215L14.7949 8.84166" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <ellipse cx="18.2088" cy="3.54493" rx="1.9222" ry="1.82024" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.1382 2.52185H5.87042C2.85898 2.52185 0.991699 4.54144 0.991699 7.39314V15.0468C0.991699 17.8985 2.82236 19.9094 5.87042 19.9094H14.4745C17.486 19.9094 19.3533 17.8985 19.3533 15.0468V8.38127" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Typography>Section 3</Typography>
                </Box>
                <Box>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4882 15.7327V5.40222H11.1871V15.7327H10.4882ZM12.6743 8.60627C12.6289 8.22426 12.4414 7.92834 12.1118 7.7185C11.7823 7.50597 11.3675 7.39971 10.8675 7.39971C10.5096 7.39971 10.1999 7.45351 9.93853 7.56112C9.67717 7.66604 9.47404 7.81131 9.32916 7.99694C9.18711 8.17987 9.11609 8.38837 9.11609 8.62242C9.11609 8.8188 9.16438 8.98828 9.26098 9.13087C9.36041 9.27345 9.48967 9.39316 9.64876 9.49001C9.81069 9.58417 9.98399 9.66353 10.1686 9.7281C10.3533 9.78997 10.5309 9.84108 10.7013 9.88144L11.5536 10.0913C11.832 10.1558 12.1175 10.2433 12.4101 10.3536C12.7027 10.4639 12.974 10.6091 13.224 10.7894C13.474 10.9696 13.6757 11.1929 13.8292 11.4593C13.9854 11.7256 14.0635 12.0444 14.0635 12.4156C14.0635 12.8837 13.9357 13.2994 13.68 13.6625C13.4272 14.0257 13.0593 14.3122 12.5763 14.5221C12.0962 14.7319 11.5152 14.8368 10.8334 14.8368C10.18 14.8368 9.61467 14.7386 9.1374 14.5422C8.66012 14.3459 8.28654 14.0674 8.01666 13.7069C7.74677 13.3438 7.59762 12.9133 7.56921 12.4156H8.89024C8.91581 12.7142 9.01808 12.9631 9.19706 13.1622C9.37887 13.3585 9.61041 13.5052 9.89166 13.602C10.1757 13.6962 10.4868 13.7432 10.8249 13.7432C11.1971 13.7432 11.528 13.6881 11.8178 13.5778C12.1104 13.4648 12.3405 13.3088 12.5081 13.1097C12.6757 12.9079 12.7596 12.6725 12.7596 12.4035C12.7596 12.1587 12.6857 11.9583 12.538 11.8023C12.3931 11.6462 12.1956 11.5171 11.9456 11.4149C11.6985 11.3126 11.4186 11.2225 11.1061 11.1445L10.0749 10.8782C9.37603 10.6979 8.82206 10.4329 8.41296 10.0832C8.00671 9.73348 7.80359 9.27076 7.80359 8.69505C7.80359 8.21888 7.93995 7.80324 8.21268 7.44813C8.48541 7.09302 8.85473 6.81728 9.32063 6.62089C9.78654 6.42182 10.3121 6.32228 10.8973 6.32228C11.4882 6.32228 12.0096 6.42047 12.4613 6.61686C12.9158 6.81324 13.2738 7.08361 13.5351 7.42796C13.7965 7.76962 13.9329 8.16239 13.9442 8.60627H12.6743Z" fill="#808191"/>
                    <path d="M4.77795 4.49101C5.06953 4.49101 5.36055 4.48633 5.65158 4.49205C6.03375 4.49932 6.27151 4.71711 6.26822 5.04666C6.26492 5.37049 6.01728 5.59192 5.63895 5.594C4.88832 5.59764 4.1377 5.59816 3.38707 5.594C3.0049 5.59192 2.76274 5.37829 2.75725 5.01547C2.74627 4.28777 2.74627 3.56006 2.75835 2.83236C2.76384 2.49553 3.02302 2.26631 3.34863 2.26838C3.6737 2.27046 3.91751 2.50125 3.93288 2.83911C3.94386 3.07874 3.93508 3.31992 3.93508 3.62556C4.05917 3.51744 4.13495 3.44831 4.21347 3.38281C7.08583 0.991781 10.3876 0.250041 14.0177 1.35875C17.6264 2.46123 19.8536 4.87617 20.7031 8.38059C21.1511 10.2295 20.9441 12.0456 20.2111 13.8088C20.0749 14.1362 19.8443 14.2901 19.5576 14.2542C19.1513 14.2033 18.9404 13.8436 19.103 13.4527C19.4566 12.6002 19.6696 11.7213 19.7328 10.8054C20.0019 6.8836 17.2283 3.22844 13.1869 2.27566C10.0927 1.5464 7.33952 2.22888 4.95641 4.23891C4.88228 4.30128 4.79223 4.3465 4.70931 4.40004C4.73238 4.43019 4.75489 4.46034 4.77795 4.49101Z" fill="#808191"/>
                    <path d="M17.1527 16.1366C16.883 16.1366 16.6129 16.1387 16.3433 16.1361C15.9221 16.1319 15.6574 15.9209 15.6509 15.5877C15.6443 15.243 15.9133 15.0201 16.3488 15.0185C17.0538 15.0159 17.7583 15.0154 18.4634 15.0185C18.9466 15.0206 19.1651 15.2306 19.1657 15.688C19.1668 16.3637 19.1679 17.0395 19.1651 17.7152C19.164 18.1092 18.9323 18.3498 18.5671 18.3441C18.213 18.3384 18.0038 18.1092 17.9988 17.7173C17.9961 17.4948 17.9983 17.2718 17.9983 16.9989C17.9 17.0769 17.8401 17.1221 17.783 17.1699C14.8783 19.5989 11.5392 20.3698 7.86072 19.2221C4.15867 18.0671 1.93644 15.5518 1.16935 11.9356C0.798701 10.1896 1.02164 8.47016 1.71131 6.81047C1.85408 6.46689 2.07372 6.32862 2.39275 6.36968C2.77547 6.41958 2.95668 6.77616 2.83148 7.16341C2.6371 7.76585 2.40922 8.3662 2.29995 8.98372C1.57623 13.0922 4.21577 17.1148 8.44442 18.262C11.6259 19.1254 14.4835 18.4637 16.966 16.3819C17.039 16.3206 17.1285 16.2774 17.2103 16.226C17.1911 16.1963 17.1719 16.1667 17.1527 16.1366Z" fill="#808191"/>
                    <rect x="10.5063" y="5.97818" width="0.71814" height="9.34189" fill="#808191"/>
                    </svg>
                    <Typography>Section 4</Typography>
                </Box>
                <Box>
                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3946 7.73942C13.3946 8.60598 12.3324 9.37969 10.7147 9.8594C9.74566 10.118 8.74689 10.2635 7.74059 10.2927C7.55575 10.3081 7.36983 10.3081 7.18499 10.2927C3.76969 10.2927 0.991699 9.13211 0.991699 7.70847C0.991699 6.28484 3.76969 5.12426 7.18499 5.12426H7.74059C8.01839 5.12426 8.27985 5.12426 8.5413 5.12426C10.0011 5.24113 11.4008 5.72749 12.5939 6.53242C12.8123 6.66606 12.9972 6.84337 13.1355 7.05189C13.2739 7.26041 13.3623 7.49508 13.3946 7.73942V7.73942Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.3948 7.73764V11.436C13.3948 12.38 12.2019 13.1846 10.4044 13.6334C9.33706 13.8948 8.2386 14.0248 7.13616 14.0202C4.30914 14.0202 1.92334 13.231 1.18799 12.1633" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.3946 11.4367V15.2898C13.3946 16.7289 10.6166 17.874 7.18499 17.874C3.75335 17.874 0.991699 16.7289 0.991699 15.2898" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.10023 4.82975C7.88122 4.58721 7.75461 4.28203 7.74072 3.96318C7.74072 2.53954 10.5187 1.37896 13.9504 1.37896C17.382 1.37896 20.1436 2.53954 20.1436 3.96318C20.1436 5.38682 17.3656 6.53192 13.9504 6.53192C13.4986 6.55547 13.0458 6.55547 12.594 6.53192" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.395 14.0831H13.9506C17.3659 14.0831 20.1439 12.938 20.1439 11.5143" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.395 10.2305H13.9506C17.3659 10.2305 20.1439 9.06996 20.1439 7.6618" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.1431 11.5142V7.6611V3.96273" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M0.991699 15.2891V7.73764" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Typography>Section</Typography>
                </Box>
                <Box>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.6717 11.0096H16.3517C16.3517 15.0057 12.8817 18.2917 8.6717 18.2917C4.4517 18.2917 0.991699 15.0057 0.991699 11.0096C0.991699 7.01341 4.4617 3.72747 8.6717 3.72747V11.0096Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.812 8.0559V0.7738C13.852 0.7738 15.802 1.54084 17.242 2.90446C18.682 4.26807 19.492 6.12411 19.492 8.04644H11.812V8.0559Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Typography>Section 6</Typography>
                </Box>
                <Box>
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3794 13.7657L19.4894 13.7657L19.4894 8.14072L15.3794 8.14072L15.3794 13.7657Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.18446 13.7639L12.1945 13.7639L12.1945 4.62567L8.18446 4.62567L8.18446 13.7639Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M0.991684 13.762L5.10168 13.762L5.10168 1.1106L0.991684 1.1106L0.991684 13.762Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Typography>Section 7</Typography>
                </Box>
                <Box className={classes.section8}>
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3588 10.8199C4.50756 10.8199 5.4388 10.0051 5.4388 9C5.4388 7.99489 4.50756 7.18008 3.3588 7.18008C2.21005 7.18008 1.27881 7.99489 1.27881 9C1.27881 10.0051 2.21005 10.8199 3.3588 10.8199Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.4388 4.49525C14.5544 4.49525 15.4588 3.68044 15.4588 2.67532C15.4588 1.6702 14.5544 0.855408 13.4388 0.855408C12.3232 0.855408 11.4188 1.6702 11.4188 2.67532C11.4188 3.68044 12.3232 4.49525 13.4388 4.49525Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.4388 17.1446C14.5544 17.1446 15.4588 16.3298 15.4588 15.3247C15.4588 14.3195 14.5544 13.5047 13.4388 13.5047C12.3232 13.5047 11.4188 14.3195 11.4188 15.3247C11.4188 16.3298 12.3232 17.1446 13.4388 17.1446Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.59882 7.59452L11.1988 4.0808" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.1988 13.9192L5.59882 10.4055" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Typography>Section 8</Typography>
                </Box>
                <Box>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3317 18.524H3.0517C1.9117 18.524 0.991699 17.6529 0.991699 16.5733V2.94663C0.991699 1.86711 1.9117 0.995911 3.0517 0.995911H13.3317C14.4717 0.995911 15.3917 1.86711 15.3917 2.94663V16.5733C15.3817 17.6529 14.4617 18.524 13.3317 18.524Z" stroke="#808191" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.08173 4.9447H12.3017" stroke="#808191" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.08173 9.81207H12.3017" stroke="#808191" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.08173 14.6794H12.3017" stroke="#808191" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Typography>Documentation</Typography>
                </Box>
            </Box>
        <Box className={classes.bottom}>
            <Box className={classes.div1}>
                <Box className={classes.subDiv}>
                    <Box className={classes.textN}>N</Box>
                    <Typography style={{color: '#fff'}}>$0.90</Typography>
                </Box>
                <Box>Buy $XYZ</Box>
            </Box>
            <Box className={classes.div2}>
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3838 0.116333C4.83425 0.116333 0.340332 4.83381 0.340332 10.6464C0.340332 16.459 4.83425 21.1765 10.3838 21.1765C15.9434 21.1765 20.4473 16.459 20.4473 10.6464C20.4473 4.83381 15.9434 0.116333 10.3838 0.116333ZM17.3509 6.43439H14.3851C14.0634 5.11813 13.6009 3.85452 12.9977 2.68568C14.8475 3.34907 16.3857 4.69692 17.3509 6.43439ZM10.3938 2.26447C11.2283 3.52808 11.8817 4.92858 12.314 6.43439H8.47361C8.90591 4.92858 9.55939 3.52808 10.3938 2.26447ZM2.61242 12.7524C2.45157 12.0785 2.35103 11.373 2.35103 10.6464C2.35103 9.91985 2.45157 9.21433 2.61242 8.54041H6.01051C5.93008 9.23539 5.86976 9.93038 5.86976 10.6464C5.86976 11.3625 5.93008 12.0575 6.01051 12.7524H2.61242ZM3.43681 14.8585H6.40259C6.7243 16.1747 7.18676 17.4383 7.78997 18.6072C5.94013 17.9438 4.40195 16.6065 3.43681 14.8585ZM6.40259 6.43439H3.43681C4.40195 4.68639 5.94013 3.34907 7.78997 2.68568C7.18676 3.85452 6.7243 5.11813 6.40259 6.43439ZM10.3938 19.0284C9.55939 17.7648 8.90591 16.3643 8.47361 14.8585H12.314C11.8817 16.3643 11.2283 17.7648 10.3938 19.0284ZM12.7463 12.7524H8.04131C7.95083 12.0575 7.88046 11.3625 7.88046 10.6464C7.88046 9.93038 7.95083 9.22486 8.04131 8.54041H12.7463C12.8368 9.22486 12.9072 9.93038 12.9072 10.6464C12.9072 11.3625 12.8368 12.0575 12.7463 12.7524ZM12.9977 18.6072C13.6009 17.4383 14.0634 16.1747 14.3851 14.8585H17.3509C16.3857 16.5959 14.8475 17.9438 12.9977 18.6072ZM14.7772 12.7524C14.8576 12.0575 14.9179 11.3625 14.9179 10.6464C14.9179 9.93038 14.8576 9.23539 14.7772 8.54041H18.1752C18.3361 9.21433 18.4366 9.91985 18.4366 10.6464C18.4366 11.373 18.3361 12.0785 18.1752 12.7524H14.7772Z" fill="#808191"/>
                </svg>
                <Box className={classes.toggle}>
                    <svg width="20" height="20"  fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8863 9.84174C13.38 9.96769 12.8737 10.0307 12.3673 10.0307C9.20267 10.0307 6.67096 7.51151 6.67096 4.36257C6.67096 3.85873 6.73425 3.3549 6.86084 2.85107C6.92413 2.66213 6.86084 2.41022 6.67096 2.22128C6.48108 2.03235 6.2912 1.96937 6.03803 2.03235C3.06327 2.91405 0.974609 5.68512 0.974609 8.77109C0.974609 12.6128 4.07596 15.6988 7.93682 15.6988C11.0382 15.6988 13.823 13.6205 14.6459 10.5975C14.7091 10.4085 14.6459 10.1566 14.456 9.96769C14.3294 9.84174 14.0762 9.77876 13.8863 9.84174Z" fill="#808191"/>
                    <path d="M9.20275 3.10363H9.83568V3.73342C9.83568 4.11129 10.0889 4.36321 10.4686 4.36321C10.8484 4.36321 11.1015 4.11129 11.1015 3.73342V3.10363H11.7345C12.1142 3.10363 12.3674 2.85171 12.3674 2.47384C12.3674 2.09597 12.1142 1.84405 11.7345 1.84405H11.1015V1.21426C11.1015 0.836388 10.8484 0.584473 10.4686 0.584473C10.0889 0.584473 9.83568 0.836388 9.83568 1.21426V1.84405H9.20275C8.823 1.84405 8.56982 2.09597 8.56982 2.47384C8.56982 2.85171 8.823 3.10363 9.20275 3.10363Z" fill="#808191"/>
                    <path d="M15.5328 5.62213H14.8999V4.99234C14.8999 4.61446 14.6467 4.36255 14.2669 4.36255C13.8872 4.36255 13.634 4.61446 13.634 4.99234V5.62213H13.0011C12.6213 5.62213 12.3682 5.87404 12.3682 6.25192C12.3682 6.62979 12.6213 6.88171 13.0011 6.88171H13.634V7.5115C13.634 7.88937 13.8872 8.14129 14.2669 8.14129C14.6467 8.14129 14.8999 7.88937 14.8999 7.5115V6.88171H15.5328C15.9126 6.88171 16.1657 6.62979 16.1657 6.25192C16.1657 5.87404 15.9126 5.62213 15.5328 5.62213Z" fill="#808191"/>
                    </svg>
                   
                    <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_3658_199)">
                    <circle cx="16.2071" cy="12.711" r="9.11666" fill="#3772FF"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_3658_199" x="0.624707" y="0.361548" width="31.1647" height="31.1647" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3.23284"/>
                    <feGaussianBlur stdDeviation="3.23284"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3658_199"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3658_199" result="shape"/>
                    </filter>
                    </defs>
                    </svg>
                </Box>
            </Box>
        </Box>
        </Box>
    )
}


const Typography = styled('p')({
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    color: '#808191'
})


export default LeftPanel;