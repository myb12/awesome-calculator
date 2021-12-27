import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    mainHeadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20
    },
    mainHeading: {
        textAlign: 'center',
        textTransform: 'uppercase',
        display: 'inline',
        borderBottom: '2px solid #1976d2',
        paddingBottom: 5,
        position: 'relative',

        '&:after': {
            content: '""',
            backgroundColor: '#1976d2',
            position: 'absolute',
            height: 5,
            width: 30,
            bottom: -3,
            left: 'calc(50% - 15px)'
        },
    }
});