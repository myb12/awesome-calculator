import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    headerContainer: {
        borderBottom: '1px solid rgb(226,226,226)',
    },

    header: {
        display: 'flex !important',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,

        '& .span': {
            textTransform: 'uppercaase',
        },
    },

    '@media screen and (max-width: 900px)': {
        header: {
            flexDirection: 'column',
            height: '100px',

            '& .span': {
                textAlign: 'center',
            },
            '& img': {
                margin: '10px 0'
            },

        },

    },
});