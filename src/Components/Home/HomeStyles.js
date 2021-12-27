import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        '& label.Mui-focused': {
            color: '#666',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#666',
            },
        },
    },
    mainHeadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 16,
    },
    mainHeading: {
        textAlign: 'center',
        textTransform: 'uppercase',
        display: 'inline',
        borderBottom: '2px solid #666',
        paddingBottom: 5,
        position: 'relative',
        color: '#666',

        '&:after': {
            content: '""',
            backgroundColor: '#666',
            position: 'absolute',
            height: 5,
            width: 30,
            bottom: -3,
            left: 'calc(50% - 15px)'
        },
    }
});