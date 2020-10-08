import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const StyledRoot = styled.div`
  padding: 50px 12px;
`;

const StyledContainer = styled.div`
  max-width: 60rem;
  display: flex;
  width: 100%;
  height: 100%;
  margin: auto;
  margin-right: auto;
  margin-left: auto;
  height: 40rem;
  width: 40rem;
  border: none;
  border-radius: 4rem 4rem 4rem 4rem;
  padding: 2rem 1rem 2rem 2rem;
  opacity: 0.9;
  background-color: #2b2020;
`;

// const StyledContainer = styled.div`
//   margin-right: auto;
//   margin-left: auto;
//   height: 40rem;
//   width: 40rem;
//   border: none;
//   border-radius: 4rem 4rem 4rem 4rem;
//   padding: 2rem 1rem 2rem 2rem;
//   opacity: 0.9;
//   background-color: #2b2020;
//   background-image: url(${BaseballHatLogo});
//   background-attachment: local;
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
// `;

const Title = styled.h1`
  text-align: center;
  margin-top: -2rem;
  font-size: 7rem;
  color: #933a16;
  font-weight: 700;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  text-align: center;
  margin-top: 25rem;
  font-size: 5rem;
  color: #fff;
  font-weight: 300;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Checkout() {
  const classes = useStyles();

  return (
    <StyledRoot>
      //{' '}
      <StyledContainer>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">
            With a start adornment
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="With a grid" />
            </Grid>
          </Grid>
        </div>
      </StyledContainer>
      //{' '}
    </StyledRoot>
  );
}

// const Checkout = () => (
//   <StyledRoot>
//     <StyledContainer>
//       <TextField label="FirstName" id="standard-start-adornment" />
//     </StyledContainer>
//   </StyledRoot>
// );

// export default Checkout;
