import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqCard = ({ item }) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {item.description}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default FaqCard;