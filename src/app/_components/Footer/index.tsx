import React from 'react'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'
import FooterComponent from './FooterComponent'

export async function Footers() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.log('Footer Error', error)
  }

  return (
    <>
      <FooterComponent footer={footer} />
    </>
  )
}
