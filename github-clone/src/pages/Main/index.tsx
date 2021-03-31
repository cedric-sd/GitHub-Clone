import React, { useEffect, useState } from 'react'
// import external libs
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
  Input
} from 'reactstrap'
import useSWR from 'swr'
import { FaBalanceScale, FaRegStar } from 'react-icons/fa'
import { BiGitRepoForked } from 'react-icons/bi'
import { HiOutlineLocationMarker, HiOutlineMail, HiLink } from 'react-icons/hi'

// import internal components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

interface User {
  user: string
}

interface Params {
  params: User
}

interface MainProps {
  match: Params
}

const fetcher = (inputValue: string) =>
  fetch(inputValue).then((res) => res.json())

const Main = (props: MainProps) => {
  const { data } = useSWR(
    `https://api.github.com/users/${props.match.params.user}/repos`,
    fetcher
  )
  const [urlUserImage, setUrlUserImage] = useState('')
  const [ownerRepo, setOwnerRepo] = useState('')

  useEffect(() => {
    if (data !== undefined) {
      setUrlUserImage(data[0].owner.avatar_url)
      setOwnerRepo(data[0].owner.login)
    }
  }, [data])

  return (
    <>
      <Header />
      <div>
        <Container>
          <Row>
            <Col>
              <div className="d-flex align-items-center">
                <img
                  className="imageUser"
                  src={urlUserImage}
                  alt="user image"
                />
                <div className="d-flex flex-column mt-4">
                  <h2 className="ml-5">{ownerRepo}</h2>
                  <div>
                    <ul className="ml-5 d-flex">
                      <li>
                        <HiOutlineLocationMarker />
                        Location
                      </li>
                      <li className="ml-5">
                        <HiLink />
                        Link
                      </li>
                      <li className="ml-5">
                        <HiOutlineMail />
                        Email
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <hr />
      <div>
        <Container>
          <p>Pinned repositories</p>
          <Row>
            {data != undefined ? (
              <>
                <Col key={data[0].id}>
                  <Card body>
                    <CardTitle tag="h5">{data[0].name}</CardTitle>
                    <CardText>{data[0].description}</CardText>
                    <ul className="listRpositoryActions">
                      <li>{data[0].language}</li>
                      <li>
                        {data[0].license !== null ? <FaBalanceScale /> : null}
                        {data[0].license?.name}
                      </li>
                      <li>
                        <BiGitRepoForked />
                        {data[0].forks}
                      </li>
                      <li>
                        <FaRegStar />
                        {data[0].stargazers_count}
                      </li>
                    </ul>
                  </Card>
                </Col>
                <Col key={data[1].id}>
                  <Card body>
                    <CardTitle tag="h5">{data[1].name}</CardTitle>
                    <CardText>{data[1].description}</CardText>
                    <ul className="listRpositoryActions">
                      <li>{data[1].language}</li>
                      <li>
                        {data[1].license !== null ? <FaBalanceScale /> : null}
                        {data[1].license?.name}
                      </li>
                      <li>
                        <BiGitRepoForked />
                        {data[1].forks}
                      </li>
                      <li>
                        <FaRegStar />
                        {data[1].stargazers_count}
                      </li>
                    </ul>
                  </Card>
                </Col>
                <Col key={data[2].id}>
                  <Card body>
                    <CardTitle tag="h5">{data[3].name}</CardTitle>
                    <CardText>{data[3].description}</CardText>
                    <ul className="listRpositoryActions">
                      <li>{data[3].language}</li>
                      <li>
                        {data[3].license !== null ? <FaBalanceScale /> : null}
                        {data[3].license?.name}
                      </li>
                      <li>
                        <BiGitRepoForked />
                        {data[3].forks}
                      </li>
                      <li>
                        <FaRegStar />
                        {data[3].stargazers_count}
                      </li>
                    </ul>
                  </Card>
                </Col>
              </>
            ) : (
              <p>No pinned repositories</p>
            )}
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col xs={5} className="mt-4">
            <Input placeholder="Find a repository" />
          </Col>
          <Col xs={5} className="mt-4">
            <Button className="ml-3">Type</Button>
            <Button className="ml-3">Language</Button>
            <Button className="ml-3">Sort</Button>
          </Col>
        </Row>
        <hr />
      </Container>
      <Container>
        {data != undefined ? (
          data.map((repo: any) => {
            return (
              <Row key={repo.id}>
                <Col cl>
                  <a href="#" className="repositoryNameLink">
                    {repo.name}
                  </a>
                  <p>{repo.description}</p>
                  <ul className="listRpositoryActions">
                    <li>{repo.language}</li>
                    <li>
                      {repo.license !== null ? <FaBalanceScale /> : null}
                      {repo.license?.name}
                    </li>
                    <li>
                      <BiGitRepoForked />
                      {repo.forks}
                    </li>
                    <li>
                      <FaRegStar />
                      {repo.stargazers_count}
                    </li>
                  </ul>
                  <hr />
                </Col>
              </Row>
            )
          })
        ) : (
          <p>Lista de repositórios vazia</p>
        )}
      </Container>
      <Footer />
    </>
  )
}

export default Main
