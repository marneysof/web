import React from 'react'

import Adopters from '../components/layouts/adopters/adopters'
import FeatureContent from '../components/layouts/feature-content/feature-content'
import FeatureList from '../components/layouts/featurelist/feature-list'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Newsletter from '../components/layouts/newsletter/newsletter'
import Quickstart from '../components/layouts/quickstart/quickstart'
import Quotes from '../components/layouts/quotes/quotes'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import * as content from '../page-content/content-hydra'
import { sharedAdopters } from '../page-content/shared/content-adopters'
import { opensourceQuickstart } from '../page-content/shared/content-opensource'
import { otherQuotes } from '../page-content/shared/content-quotes'
import { sharedStats } from '../page-content/shared/content-stats'

const HydraPage = () => (
  <Layout theme={'hydra'}>
    <SEO {...content.seo} />
    <Hero {...content.hero} />
    <Newsletter preselect="hydra" />
    <FeatureContent {...content.featureContentVideo} />
    <FeatureList {...content.featureList} />
    <Quotes {...otherQuotes} />
    <Adopters {...sharedAdopters} />
    <Stats {...sharedStats} />
    <FeatureContent {...content.featureContentCoding} />
    <FeatureContent {...content.featureContentSDK} />
    <Quickstart {...opensourceQuickstart} />
  </Layout>
)

export default HydraPage
