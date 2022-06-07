import React from "react";
import Accordion from "../Accordion/index";
import faqsData from "../../../fixtures/faqs.json"
import OptForm from "../Optform/index";


export default function AccordionContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
        <OptForm.Break />  <OptForm.Break />
        <OptForm.Input placeholder="Email address" />
        <OptForm.ButtonLink to="/signup">Get Started</OptForm.ButtonLink>


      </OptForm>
    </Accordion>
  )
}