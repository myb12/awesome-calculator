import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    seeInputBtn: {
        border: '1px solid #1976d2',
        color: '#1976d2',
        fontWeight: '500',
        fontSize: '0.875rem',
        lineHeight: '1.75',
        letterSpacing: '0.02857em',
        textTransform: 'uppercase',
        minWidth: '64px',
        padding: '4px 10px',
        borderRadius: '4px',
        transition: 'all 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms, color 250ms cubic-bezier(0.4,0,0.2,1) 0ms',

        '&:hover': {
            color: '#fff',
            background: '#1976d2'
        }

    }
});


// border - radius: 4px;
// transition: background - color 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms, box - shadow 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms, border - color 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms;
// color: #fff;

// box - shadow: 0px 3px 1px - 2px rgb(0 0 0 / 20 %), 0px 2px 2px 0px rgb(0 0 0 / 14 %), 0px 1px 5px 0px rgb(0 0 0 / 12 %);