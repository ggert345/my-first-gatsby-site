import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'


const Thing = ()=>{
    return(
     <Layout pageTitle="Thing">
        <p>Thing page</p>
     </Layout>
    )
}
export const Head = () => <title>Thing Page</title>

export default Thing