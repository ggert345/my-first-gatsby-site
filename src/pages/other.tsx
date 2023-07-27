import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'


const Other = ()=>{
    return(
  <Layout pageTitle='Other'>
    <p>This is the Other page</p>
  </Layout>
    )
}
export const Head = () => <Seo title='Other page'/>

export default Other