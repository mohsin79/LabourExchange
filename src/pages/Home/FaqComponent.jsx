import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SideSectionLogoImg from "../../assets/images/SideSectionLogo.png";

// A reusable accordion component to avoid duplication
const FaqAccordion = ({ panel, expanded, handleChange, title, content }) => (
  <Accordion
    expanded={expanded === panel}
    onChange={handleChange(panel)}
    sx={{
      backgroundColor: "#101533",
      color: "white",
      marginBottom: "5px",
      borderBottom: "1px solid #444",
      "&:before": {
        display: "none", // Removes MUI default divider
      },
      "&.Mui-expanded": {
        margin: 0, // No extra margin when expanded
      },
    }}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
      aria-controls={`${panel}-content`}
      id={`${panel}-header`}
    >
      <Typography variant="h6" sx={{ fontSize: "1.5rem" }}>
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{content}</Typography>
    </AccordionDetails>
  </Accordion>
);

const FaqComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      panel: "panel1",
      title: "How does this work?",
      content:
        "Easy! Sign up, create a profile  making sure to list as many skills as possible ( you can add to this later) as long as they are legal! 🤣.",
    },
    {
      panel: "panel2",
      title: "Can anyone join?",
      content: "Yes, open to anyone.",
    },
    {
      panel: "panel3",
      title: "What can I do?",
      content:
        "Literally anything as long as it is legal and you feel confident you can complete the task. For instance, wash windows, flower arranging, plumbing , architect, car mechanic, etc.",
    },
    {
      panel: "panel4",
      title: "What can I ask for?",
      content:
        "Anything as long as it is legal. Eg handyman, dog Walker, curtains made , car fixed etc.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#0A0F24",
        minHeight: "70vh",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundImage: "radial-gradient(#232540 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        position: "relative",
      }}
    >
      {/* Left Sidebar with colorful lines */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={SideSectionLogoImg} width={"15px"} height={"820px"} />
        {/* {["#F26257", "#37CE9E", "#6152F6"].map((color, index) => (
          <Box
            key={index}
            sx={{
              height: "200px",
              width: "4px",
              backgroundColor: color,
              marginBottom: "10px",
            }}
          />
        ))} */}
      </Box>

      <Container maxWidth="md">
        <Box sx={{ textAlign: "left", color: "white", padding: "20px" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              marginBottom: "30px",
              color: "white",
              fontSize: "3rem",
            }}
          >
            Frequently Asked Questions
          </Typography>

          {/* Rendering the FAQs */}
          {faqs.map((faq) => (
            <FaqAccordion
              key={faq.panel}
              panel={faq.panel}
              expanded={expanded}
              handleChange={handleChange}
              title={faq.title}
              content={faq.content}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FaqComponent;
