import React from 'react'

import { PropTypes as QuoteProps } from '../../components/layouts/quotes/quotes'

export const sharedQuotes: QuoteProps = {
  id: 'shared.quotes',
  quotes: [
    {
      big: true,
      description: (
        <>
          We like using Ory because it’s API first design made it super easy to
          integrate with the rest our stack.
        </>
      ),
      person: `Paul Harman`,
      jobTitle: `Engineering Manager, Sainsbury’s Tech`
    },
    {
      description: (
        <>
          With Ory, I can build custom and secure ID infrastructure and APIs
          that fit perfectly into my client's ever-evolving cloud environments.
        </>
      ),
      person: `Ken Adler`,
      jobTitle: `Identity & Infosec, Thoughtworks`
    },
    {
      description: (
        <>
          I needed an Auth System that would work with modern setups. Ory fit
          the bill perfectly and just works.
        </>
      ),
      person: `Steff Kelsey`,
      jobTitle: `VP of Engineering. Blues Inc.`
    }
  ]
}

export const otherQuotes: QuoteProps = {
  id: 'other.quotes',
  quotes: [
    {
      big: true,
      description: (
        <>
          We chose the Ory Stack to develop an internal IAM. Ory is ideal because we
          could customize it exactly how we needed to and could build a flexible system for
          authorizing user actions.
        </>
      ),
      person: `Dimitriy Gaevskiy`,
      jobTitle: `Software Architect, Tinkoff Group`
    },
    {
      description: (
        <>
          We enjoy using Ory because of the simplicity to integrate thanks to its
          modularity, its active and vocal developer base, and the extent and ease by
          which Ory tools can be configured.
        </>
      ),
      person: `Matt Brown`,
      jobTitle: `Bioinformatician, Dante Labs`
    },
    {
      description: (
        <>
          We rely on Ory to be our Oauth provider and it fits perfectly into our
          infrastructure, is hardened, and aligns with our principles. Ory is a great fit
          for us.
        </>
      ),
      person: `Benjamin Kristensen`,
      jobTitle: `Senior Software Engineer, Enode`
    },
  ]
}

export const moreQuotes: QuoteProps = {
  id: 'more.quotes',
  quotes: [
    {
      big: true,
      description: (
        <>
          At Discogs we use Ory to handle authentication and authorization for
          over 8 million music enthusiasts across our applications. It allows us to focus on building the largest and most 
          comprehensive music database and marketplace, rather than reinvent the wheel.
        </>
      ),
      person: `Corey Burmeister`,
      jobTitle: `Author, Discogs`
    },
    {
      description: (
        <>
          We enjoy using Ory because of the simplicity to integrate thanks to its
          modularity, its active and vocal developer base, and the extent and ease by
          which Ory tools can be configured.
        </>
      ),
      person: `Matt Brown`,
      jobTitle: `Bioinformatician, Dante Labs`
    },
    {
      description: (
        <>
          At Factly, we were looking for a lightweight alternative to Keycloak that
          would meet all our IAM needs across multiple applications. Ory, written in
          Golang was the best option out there which was simple and performant.
        </>
      ),
      person: `Shashi Deshetti`,
      jobTitle: `CoFounder, factly  `
    },
  ]
}


export const additionalQuotes: QuoteProps = {
  id: 'additional.quotes',
  quotes: [
    {
      big: true,
      description: (
        <>
          At Discogs we use Ory to handle authentication and authorization for
          over 8 million music enthusiasts across our applications. 
          It allows us to focus on building the largest and most 
          comprehensive music database and marketplace, rather than reinvent the wheel.
        </>
      ),
      person: `Corey Burmeister`,
      jobTitle: `Author, Discogs`
    },    
    {
      description: (
        <>
          At Factly, we were looking for a lightweight alternative to Keycloak that
          would meet all our IAM needs across multiple applications. Ory, written in
          Golang was the best option out there that was simple and performant.
        </>
      ),
      person: `Shashi Deshetti`,
      jobTitle: `CoFounder, factly  `
    },
    {
      description: (
        <>
          We choose Ory because it is open-source, does not force an UI on us, and is
          micro services oriented. Ory matches how our organization works and being able
          to build our own system is a big advantage compared to most other things.
        </>
      ),
      person: `Jakob Sinclair`,
      jobTitle: `Engineering, Pirat Partiet Sweden`
    }
  ]
}