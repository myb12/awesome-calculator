import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    seeInputBtn: {
        cursor: 'pointer',
        border: '2px solid #666',
        color: '#fff',
        backgroundColor: '#666',
        fontWeight: '500',
        fontSize: '0.875rem',
        lineHeight: '1.75',
        letterSpacing: '0.02857em',
        minWidth: '64px',
        padding: '4px 16px',
        borderRadius: '20px',
        transition: 'all 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms, color 250ms cubic-bezier(0.4,0,0.2,1) 0ms',

        '&:hover': {
            color: '#666',
            background: '#fff'
        }

    },
    card: {
        border: '2px solid #666',
        boxShadow: 'none',
        borderRadius: 10,
        margin: '10px 0',
        padding: '24px 10px',
        color: '#666'
    }
});