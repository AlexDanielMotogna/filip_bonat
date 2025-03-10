import { Col, Container, Row } from 'react-bootstrap'
import SidebarPage from '../../components/Sidebar'
import TopNav from '../../components/TopNav'
import BlogDetails from './components/BlogDetails'
import Form from './components/Form'

const BlogSinglePage = () => {
  return (
    <>
      <div className="body1">
        <TopNav />
        <div className="main-hero-area parallaxie">
          <Container>
            <Row>
              <Col lg={4}>
                <div className="personal-contact-box">
                  <SidebarPage />
                </div>
              </Col>
              <Col lg={8}>
                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
                  <BlogDetails />
                  <Form />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default BlogSinglePage
