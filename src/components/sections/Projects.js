import React from 'react'
import styled from 'styled-components'

import {Section, Container} from '@components/global'

import AccordionItem from '@common/AccordionItem'
import Tabs from '@common/Tabs'

const MEASUREMENTS = [
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
        <br />
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
        <br />
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
        <br />
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
        <br />
      </>
    ),
  },
]

const APPLICATIONSOLUTION = [
  {
    title: 'Rx channel hopping',
    content: () => (
      <>
        A crucial parameter at any Rx frequency scanning application (rather popular in the US under FCC 15.247) is the
        minimum time the device can complete a full scan over. On this occasion our solution had ways to go to meet the
        specification from the customer. A significant time was taken up by relocking the tuner at each frequency hop
        (conventional way) so I devised an idea to Rx two channels subsequently without a re-tune by some baseband
        trickery saving so the tuning time for every other channel.
        <br /> <br />
        <i>Skills: Automated measurements, Radio architectures, Signal processing</i>
        <br />
      </>
    ),
  },
  {
    title: 'Self desensitisation',
    content: () => (
      <>
        This debug work was carried out on an cellular 3G FDD TRx IC. It exhibited intermittent Rx desensitization in
        the application from its own transmissions at power levels previous static measurements indicated would still be
        safe. After building a dynamic measurement setup that emulated application behavior it turned out that desense
        only occurred when the Tx was switched on or off while a packet was being received. From here on focus shifted
        towards the Tx power ramping profile that was proven to cause the issue at the Rx via spectral splatter.
        <br /> <br />
        <i>Skills: Radio architectures</i>
        <br />
      </>
    ),
  },
  {
    title: 'Poor throughput',
    content: () => (
      <>
        This project had an interesting angle where the issue reported by the customer simply could not be reproduced at
        our premises. The issue itself was significantly lower throughput than on the customer’s legacy product. A visit
        onsite revealed that the radio environment was hugely different to ours which manifested itself in a 10 MHz wide
        rather high power (tower was closeby) LTE channel right above the application operating frequency. From this
        point on the task became balancing dynamic range, linearity, selectivity and sensitivity of the Rx by various
        configuration changes that in the end produced results on par with the legacy device.
        <br /> <br />
        <i>Skills: Radio architectures, Signal processing</i>
        <br />
      </>
    ),
  },
  {
    title: 'Channel Cross Talk',
    content: () => (
      <>
        The end product Rx radio application in this project scanned multiple channels in multiple frequency bands.
        Intermittent packet drops were observed in nearly the whole power dynamic range when high band signals were sent
        to the device. I supervised the investigation that proved the root cause to be spurious reception in high band
        when the device was scanning low band through a second harmonic mechanism. Mitigation measures in the baseband
        configuration were put in place to avoid such a mechanism.
        <br /> <br />
        <i>Skills: Radio architectures</i>
        <br />
      </>
    ),
  },
  {
    title: 'IQ samples for various SW demodulators',
    content: () => (
      <>
        Although the radio IC product in question could support providing IQ samples by default I still had many tasks
        to complete to make it work for various customer requirements. I performed extensive testing for finding the
        practical bandwidth boundaries, meticulous calculations to synthesize the exact required sampling frequencies
        (and modulation parameters at the Tx side, which was a non-IQ architecture) and also various Rx AGC (Automatic
        Gain Control) optimizations on a case by case basis.
        <br /> <br />
        <i>Skills: Radio architectures, Signal processing</i>
        <br />
      </>
    ),
  },
]

const REGULATORY = [
  {
    title: 'Contributing to ETSI standards',
    content: () => (
      <>
        I actively took part in ETSI’s ERM TG28 as a delegate of my company for a few years. I submitted many technical
        proposals and participated in discussions and meetings. The technical work was mostly related to ETSI EN 300-220
        at the time when all standards got updated to the RED mandate. Some of my measurement proposals (i.e., Transient
        power) and corrections are still there to this date and were also picked up for other standards. Apart from
        technical debates I gained a valuable insight into the whole European standardisation process.
        <br /> <br />
        <i>Skills: ETSI ISM band standards</i>
        <br />
      </>
    ),
  },
  {
    title: 'ARIB T-108 compliance',
    content: () => (
      <>
        ARIB T108 is the leading regulatory standard in the Japanese subGHz market that also applies to utility metering
        applications. The standard itself is quite demanding and the measurements are often up to interpretation. This
        creates a rather challenging environment for both performing the measurements and ensuring a particular product
        passes the regulation (with already conservative limits) on a worst case statistical analysis basis. Many a time
        the above mix led to dedicated characterisation exercises on particular applications with slightly amended
        measurement procedures and slightly amended DUT configurations.
        <br /> <br />
        <i>Skills: ARIB T108, Automated measurements, Agilent Vee, Radio architectures</i>
        <br />
      </>
    ),
  },
  {
    title: 'FCC part 15.247 compliance',
    content: () => (
      <>
        This regulation controls the most popular sub-GHz and also the 2.4 GHz ISM band in the US and also many other
        regions that adopt it. It grants more Tx power allowance as the transmission is spread out. Spreading can happen
        either via frequency hopping or with wideband modulation. Since frequency hopping is an extra layer of
        complexity the preferred way (for more power) is going with a wideband modulation technique. The crucial
        question here is what sort of modulation one may pick that already constitutes wideband but still has acceptable
        sensitivity (DSSS capable devices have an edge here). I was involved in many such system level proposals for
        various devices and also had my fair share optimizing radio configurations for the frequency hopping scenario.
        <br /> <br />
        <i>Skills: FCC part 15.247, Automated measurements, Agilent Vee, Radio architectures</i>
        <br />
      </>
    ),
  },
  {
    title: 'ETSI EN 301 489 EMI compliance',
    content: () => (
      <>
        This regulatory standard dictates the EMC/EMI minimum requirements for radio equipment in the EEA (European
        Economic Area). The immunity test allows certain performance loss when exposed to an external EM field. Some
        manufacturers/industries go beyond and allow even less performance degradation in even higher level EM fields.
        Such scenarios require mapping out the performance boundaries, devising external filtering and optimizing Rx
        baseband algorithms which I have deeply got involved in on multiple product lines.
        <br /> <br />
        <i>Skills: ETSI ISM band standards, Radio architectures</i>
        <br />
      </>
    ),
  },
  {
    title: 'ETSI category 1 Rx',
    content: () => (
      <>
        Category 1 Rx performance specification by regulatory standards EN 300 220 / EN 303 406 is the most challenging
        to meet with generic ISM band transceivers. In this project the purpose was replacing a product's RF front end
        design with one of our TRX ICS for cost reduction. The process entailed analysing performance boundaries,
        optimizing baseband configuration and recommending suitable off chip (SAW filter, TCXO) components.
        <br /> <br />
        <i>Skills: ETSI ISM band standards, Automated measurements, Agilent Vee, Radio architectures</i>
        <br />
      </>
    ),
  },
]

const Projects = () => (
  <Section id="projects" className="bg-white">
    <Container>
      <SectionHeading>Project insights</SectionHeading>
      <Tabs>
        <div label="Measurements">
          {MEASUREMENTS.map(({title, content}) => (
            <AccordionItem title={title} key={title}>
              {content()}
            </AccordionItem>
          ))}
        </div>
        <div label="Application solutions">
          {APPLICATIONSOLUTION.map(({title, content}) => (
            <AccordionItem title={title} key={title}>
              {content()}
            </AccordionItem>
          ))}
        </div>
        <div label="Regulatory / application standards">
          {REGULATORY.map(({title, content}) => (
            <AccordionItem title={title} key={title}>
              {content()}
            </AccordionItem>
          ))}
        </div>
      </Tabs>
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

export default Projects
