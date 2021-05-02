import Head from 'next/head'
import { ExampleComponent } from 'react-lib-project'

const Home = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <ExampleComponent text='Create React Library Example 😄' />
    </div>
  )
}

export default Home
