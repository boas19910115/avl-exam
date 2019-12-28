import React from 'react'
import { Helmet } from 'react-helmet'
import './App.scss'
import { Header } from 'components/Header'
import AppRoutesContainer from 'AppRoutes'
import { Footer } from 'components/Footer'
import { ContentContainer } from 'components/ContentContainer'

const App = () => {
  return (
    <>
      <Helmet
        titleTemplate='%s - AVL-Exam-DEMO'
        defaultTitle='This app is a DEMO for AVL'
      >
        <meta
          name='description'
          content='Hope you guys would like my code styles'
        />
      </Helmet>
      <div id='APP' className='App'>
        <Header />
        <ContentContainer>
          <AppRoutesContainer />
        </ContentContainer>
        <Footer />
      </div>
    </>
  )
}

export default App
