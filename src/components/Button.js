import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--mainDark);
border-color:${props => props.cart ? "var(--mainYellow)":"var(--mainDark)"};
color:${props => props.cart? "var(--mainYellow)":"var(--mainDark)" };
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
  background:${props => props.cart ? "var(--mainYellow)":"var(--mainDark)"};
  color:var(--mainWhite);
}
&:focus{
  outline:none;
}
`;

export const ButtonContainers = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--mainDark);
border-color:${props => props.cart ? "var(--mainYellow)":"var(--mainBlack)"};
color:${props => props.cart? "var(--mainYellow)":"var(--mainBlack)" };
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
  background:${props => props.cart ? "var(--mainYellow)":"var(--mainDark)"};
  color:var(--mainWhite);
}
&:focus{
  outline:none;
}
`;

export const ButtonContainerss = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:var(--mainWhite);
border:0.05rem solid var(--mainDark);
border-color:${props => props.cart ? "var(--mainYellow)":"var(--mainDark  )"};
color:${props => props.cart? "var(--mainYellow)":"var(--mainBlack)" };
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
  background:${props => props.cart ? "var(--mainYellow)":"var(--mainYellow)"};
  color:var(--mainWhite);
}
&:focus{
  outline:none;
}
`;
