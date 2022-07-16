import * as React from 'react';
import {styled, ThemeProvider, createTheme} from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const theme = createTheme();

theme.typography.font = {
    fontFamily: 'NanumSquareAcr', color: '#6e6a67', textAlign: 'left',
};

theme.typography.fontDetail = {
    fontFamily: 'NanumSquareAcl', fontSize: '90%', color: '#6e6a67', textAlign: 'left',
};


const Accordion = styled((props) => (<MuiAccordion disableGutters elevation={0} square {...props} />))(({theme}) => ({
    // border: `1px solid ${theme.palette.divider}`,
    marginLeft: '15%', marginRight: '15%', '&:not(:last-child)': {
        borderBottom: 0,
    }, '&:before': {
        display: 'none',
    }, marginBottom: '2%'
}));

const AccordionSummary = styled((props) => (<MuiAccordionSummary
        {...props}
    />))(({}) => ({
    backgroundColor: '#F8F5EF', '& .MuiAccordionSummary-content': {
        marginLeft: '5%'
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    borderBottom: '1px solid rgba(0, 0, 0, .125)', paddingLeft: '7%', paddingRight: '7%', paddingTop: '5%'
}));

export default function AccordionComponent() {
    return (<div>
            <ThemeProvider theme={theme}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="font">
                            신랑 측 계좌번호 보기</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="fontDetail">
                            <div>신랑 김세중 우리은행</div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography variant="font">
                            신부 측 계좌번호 보기</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="fontDetail">
                            <div className="accountDiv">우리은행 1002-756-471511
                                <div style={{paddingTop: "1%"}} className="fontRegular"> 예금주 최유정</div>
                            </div>
                            <div className="accountDiv">
                                우리은행 1002-756-471511
                                <div style={{paddingTop: "1%"}} className="fontRegular"> 예금주 최성대</div>
                            </div>

                            <div className="accountDiv">우리은행 1002-756-471511
                                <div
                                    style={{paddingTop: "1%"}} className="fontRegular"> 예금주 백순조</div>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </ThemeProvider>
        </div>);
}