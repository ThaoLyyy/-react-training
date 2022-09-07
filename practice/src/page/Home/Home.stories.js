import React from 'react'
import Home from '.'
import Button from '../../components/common/Button'
import Search from '../../components/Search'
import UserItem from '../../components/UserItem'
import { Container, Row, Section, TitleList, Wrapper } from './style'

export default {
  title: 'Components/Home',
  component: Home
}

export const Default = () => {
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Row>
              <Search />
              <TitleList>list item user</TitleList>
              <Button></Button>
              <UserItem />
            </Row>
          </Wrapper>
        </Container>
      </Section>
    </>
  )
}
