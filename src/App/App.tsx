import React from "react";
import { Menu, Quote, Section, Icon } from "../components/ui";
import {
  SectionBio,
  SectionContact,
  SectionHome,
  SectionPortfolio,
  SectionProfile,
  SectionSkills
} from "./pageParts";

const App: React.FC = () => (
  <div>
    <Menu />

    <Icon name="cog" rotate={40} />
    <SectionHome />
    <SectionProfile />

    <Section>
      <Quote caption="Quote 01" />
    </Section>
    <SectionBio />

    <Section>
      <Quote caption="Quote 02" />
    </Section>
    <SectionSkills />

    <Section>
      <Quote caption="Quote 03" />
    </Section>
    <SectionPortfolio />

    <Section>
      <Quote caption="Quote 04" />
    </Section>
    <SectionContact />
  </div>
);

export { App };
