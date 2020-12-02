import React from 'react'
import styled from 'styled-components'

import {Section, Container} from '@components/global'

import AccordionItem from '@common/AccordionItem'

const FAQS = [
  {
    title: 'Data collection systems',
    content: () => (
      <>
        I have done this multiple times in my career. DUTs were always RF transceiver ICs. The data collection setup was
        a set of rack based (mostly RF) instruments augmented with a temperature forcing device. The DUTs were hooked up
        to the various measurement devices via switch matrices (RF, Baseband and DC) so all the required (Tx, Rx, DC,
        miscellaneous) measurements could be done without reconfiguring the setup. Automation was done either with
        AgilentVEE or NI Labview or Matlab. The data collection stations were used for characterisation and debug
        purposes. <br /> <br />
        <i>Skills: Automated measurements, LabView, Agilent Vee, Matlab</i>
        <br />
      </>
    ),
  },
  {
    title: 'Antenna diversity algorithm',
    content: () => (
      <>
        Rx side spatial antenna diversity performance comes down to two most important factors: how much improvement it
        brings to link budget in a fading prone environment and what is the shortest training sequence (hence lowest
        power consumption penalty) it can robustly run on. I led the activity of fine tuning algorithm parameters with
        the help of conducted and radiated test setups built for the purpose to meet certain performance criteria in
        both metrics on multiple product lines.
        <br /> <br />
        <i>Skills: Automated measurements, Agilent Vee, Signal processing</i>
      </>
    ),
  },
  {
    title: 'Fast signal detection algorithm',
    content: () => (
      <>
        One of the TRX IC products I worked on offered a rather novel fast signal detection capability that had
        attractive benefits: faster Rx channel scan turnaround times, lower Rx current consumption via duty cycling the
        device between Rx and idle states. I supervised performance validation and enhancements on the algorithm to
        maintain performance (sensitivity and robustness mainly) or control the performance loss (frequency offset
        tolerance and sensitivity mostly) over a range of preamble lengths.
        <br /> <br />
        <i>Skills: Automated measurements, Agilent Vee, Signal processing</i>
      </>
    ),
  },
  {
    title: 'Intermittent Rx malfunction',
    content: () => (
      <>
        One of the PXI based RF generator test setup I was working on started producing intermittent Rx packet losses we
        could not quite explain with the DUT behavior. After instrumenting up the generator the dropped packets clearly
        correlated to a mid-packet frequency pull on the test signal. These, as turned out soon, were induced by the
        on/off switching of a high power equipment at the company next door. A UPS between the mains and the generator
        fixed the issue.
        <br /> <br />
        <i>Skills: Automated measurements, Agilent Vee, PXI instrumentation</i>
      </>
    ),
  },
  {
    title: 'Best Rx performance',
    content: () => (
      <>
        In this rather demanding project the Rx performance had to be optimized simultaneously meeting stringent
        requirements on sensitivity, frequency offset tolerance, data rate offset tolerance, selectivity, blocking and
        resilience in packet collision events. Since optimizing for one may hit another this project was all about
        iteratively turning the knobs and taking a big set of measurement data making sure no adverse effects were
        caused.
        <br /> <br />
        <i>Skills: Automated measurements, Agilent Vee, Radio architectures</i>
      </>
    ),
  },
]

const Portfolio = () => (
  <Section id="portfolio">
    <Container>
      <SectionHeading>Case studies </SectionHeading>
      <div>
        {FAQS.map(({title, content}) => (
          <AccordionItem title={title} key={title}>
            {content()}
          </AccordionItem>
        ))}
      </div>
    </Container>
  </Section>
)

const SectionHeading = styled.h1`
  margin-top: 100px;

  color: ${(props) => props.theme.color.primary};
  ${(props) => props.theme.font_size.xlarge};

  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-top: 80px;
  }
`

export default Portfolio
