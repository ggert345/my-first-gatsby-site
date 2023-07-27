import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'


const Thing = ()=>{
    return(
     <Layout pageTitle="Thing">
        <p>Thing page</p>
     </Layout>
    )
}
export const Head = () => <Seo title='Things page'/>

export default Thing