import React from 'react'

import Button from '../components/freestanding/button/button'
import { PropTypes as FaqProps } from '../components/layouts/faq/faq'
import { PropTypes as FeaturelistProps } from '../components/layouts/featurelist/feature-list'
import { PropTypes as PricingProps } from '../components/layouts/pricing/pricing'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

const CheckCircle = (
  <i className={'ph-check-circle-fill themed-primary size16'} />
)
const PlusCircle = <i className={'ph-plus-circle-fill base-grey-400 size16'} />
const ArrowRight = <i className={'ph-arrow-right-bold size16'} />

const MapTriFold = <i className={'ph-map-trifold-fill base-white size24'} />
const MapTriFoldSmall = <i className={'ph-map-trifold-bold size16'} />

export const seo: SeoProps = {
  description:
    "Open source IAM and access control for the cloud. Ory's pricing is not based on monthly active users but on data consumption.",
  title: 'Ory Pricing - Identity infrastructure for the cloud',
  keywords:
    'authentication, open source, login, authorization, security, session management, Json web tokens, access control, OAuth2.0 server, identity server, AuthN, AuthZ'
}

export const pricing: Pick<PricingProps, 'id' | 'title' | 'description'> = {
  id: 'pricing.description',
  title: (
    <>
      No limits on identities. {''}
      <span className={'is-mute-text'}>
        Scalable, transparent, and fair pricing.
      </span>
    </>
  )
}

export const featurelist: FeaturelistProps = {
  id: 'pricing.featurelist',
  background: 'light-grey',
  slant: true,
  features: [
    {
      title: 'Features',
      description: (
        <>
          Sign up now and instantly access these features. All features except
          the Ory CLI and user interfaces are included when self hosting.
        </>
      ),
      features: [
        {
          title: 'Ory CLI',
          description: (
            <>
              Control the Ory platform from the command line with an intuitive
              and accessible syntax.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Identity Management',
          description: (
            <>
              The basics of IAM: Login and register users fast and without
              complicated flows and store credentials securely.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Account Management',
          description: (
            <>
              Manage your users, enable email verification, let users pick new
              passwords and change their profile data.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'User Interface and Dashboards',
          description: (
            <>
              Display stats in a smooth and responsive dashboard. We also offer
              presets for all common user interfaces.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Identity Model',
          description: (
            <>
              A flexible identity model adapts to your business needs. You can
              use one of our provided presets or cook up your own identity
              model.
            </>
          ),
          icon: CheckCircle
        }
      ]
    },
    {
      title: 'Roadmap',
      description: (
        <>
          We are currently working on bringing these features into the Ory
          Cloud. Lots more are on the way, too. For a more detailed overview,
          check out our documentation.
        </>
      ),
      button: (
        <Button
          style={'link'}
          to={'/docs/early-access/'}
          iconRight={ArrowRight}
        >
          Visit the documentation
        </Button>
      ),
      features: [
        {
          title: 'Advanced Identity and Access Management',
          description: (
            <>
              Multifactor authentication, including passwordless, WebAuthn,
              TOTP; Ability to use your own UI and Branding as well as webhooks
              to define and trigger actions.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: 'Permissions and Roles',
          description: (
            <>
              From a member of the marketing team, to an admin in your support
              staff— give everyone the right level of access to sensitive data.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: 'Social Logins',
          description: (
            <>
              Simplify your users' experience and let them use their existing
              accounts at Google, GitHub, Apple etc. to sign up and log in. All
              OIDC providers are supported.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: 'More Info',
          description: (
            <>
              Please visit our documentation to learn more about upcoming
              features and developments.{' '}
              <Button
                style={'link'}
                to={'/docs/early-access/'}
                iconRight={MapTriFold}
              >
                Ory Cloud Roadmap
              </Button>
            </>
          ),
          icon: MapTriFoldSmall
        }
      ]
    }
  ]
}

export const faq: FaqProps = {
  id: 'pricing.faq',
  background: 'light-grey',
  slant: true,
  title: <>Frequently Asked Questions</>,
  description: (
    <>
      If you cant find your question here, reach out to us on {''}
      <Button style={'link-inline'} to={'https://github.com/ory'}>
        GitHub
      </Button>
      , our {''}
      <Button style={'link-inline'} to={'https://slack.ory.sh/'}>
        Slack Channel
      </Button>
      {''} or {''}
      <Button style={'link-inline'} to={'mailto:office@ory.sh'}>
        via email.
      </Button>
    </>
  ),
  content: [
    {
      question: `Why should I choose Ory as identity solution?`,
      answer: (
        <>
          Fortune500 companies and financial institutions use our hardened and
          reliable software. Our software is open source and vetted by a large
          international community. Our unique pricing model does not charge you
          for identities.
        </>
      )
    },
    {
      question: `What happens if I stop using Ory?`,
      answer: (
        <>
          As long as your data is on our platform, it will be safe. If you
          decide to switch away from Ory, you can choose to use the open source
          and host it yourself. Or export your user data to any format.
        </>
      )
    },
    {
      question: `What is Ory’s security policy & uptime?`,
      answer: (
        <>
          Ory builds things to last. The platform is always up to date and
          backwards compatible. Security patches are merged and released within
          48 hours after disclosure, see details in our security policy. Live
          details on the Ory Network, including uptime and status updates can be
          found on our {''}
          <Button style={'link-inline'} to={'https://status.ory.sh/'}>
            status page
          </Button>
          .
        </>
      )
    },
    {
      question: `Who is using Ory?`,
      answer: (
        <>
          Thousands of companies are trusting Ory to provide consistent,
          reliable infrastructure for identity and access management. We count
          among our users: Sainsbury’s, Giesecke+Devrient, SAP, Discogs, imgur
          and many more...
        </>
      )
    },
    {
      question: `What payment methods are accepted?`,
      answer: (
        <>
          Visa, MasterCard, and American Express credit cards are accepted. All
          payments are processed and secured by Stripe.
        </>
      )
    },
    {
      question: `What is a project and member at Ory?`,
      answer: (
        <>
          A project is one instance of Ory, e.g. to host sign up for a web
          application you need one project. A member is one admin or superuser
          to control that project.
        </>
      )
    },
    {
      question: `What does Flexible identity model mean?`,
      answer: (
        <>
          Ory does not charge you for individual identities. We do have limits
          on database storage space. You can create as many identities as you
          require, but to prevent abuse of the system we limit the database
          storage.
        </>
      )
    }
  ]
}
