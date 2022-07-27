import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type SignInCardProps = {
  onSignIn: () => void;
};

const SignInCard = ({ onSignIn }: SignInCardProps) => (
  <Paper
    variant="outlined"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 600,
      paddingX: 9,
      paddingY: 8,
    }}
  >
    <Typography variant="h4" gutterBottom>
      My Myoozik List
    </Typography>
    <Button onClick={onSignIn} variant="contained" fullWidth sx={{ mt: 4 }}>
      Sign In
    </Button>
  </Paper>
);

export default SignInCard;
