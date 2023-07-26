import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  LegacyCard, Tabs,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";
import { useState, useCallback } from 'react';

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";
import { Contact } from "../components/Contact";
import '../assets/css/style.css';
import { AccountBar } from "../components/AccountBar";
import { Personal } from "../components/Personal";


export default function HomePage() {
  const { t } = useTranslation();

  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (_selectedTabIndex) => setSelected(_selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'all-customers-1',
      content: 'All',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content-1',
    },
    {
      id: 'accepts-marketing-1',
      content: 'Accepts marketing',
      panelID: 'accepts-marketing-content-1',
    },
    {
      id: 'repeat-customers-1',
      content: 'Repeat customers',
      panelID: 'repeat-customers-content-1',
    },
    {
      id: 'prospects-1',
      content: 'Prospects',
      panelID: 'prospects-content-1',
    },
  ];


  return (
    <Page narrowWidth>
      <TitleBar title={t("HomePage.title")} primaryAction={null} />

      <LegacyCard>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
          <LegacyCard.Section title={tabs[selected].content}>
            <p>Tab {selected} selected</p>
          </LegacyCard.Section>
        </Tabs>
      </LegacyCard>

      <Layout>
        <Layout.Section>
          <AccountBar />
        </Layout.Section>
        <Layout.Section>
          <Contact />
        </Layout.Section>
        <Layout.Section>
          <Personal />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
