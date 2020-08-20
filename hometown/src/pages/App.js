import React, { Component } from 'react'
import { Layout, Row, Col, Button, Drawer, Carousel } from 'antd'
import { MenuFoldOutlined } from '@ant-design/icons'
import '../static/css/App.less'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Zoom } from 'swiper'
// Import Swiper styles
import 'swiper/swiper.less'
import 'swiper/components/zoom/zoom.less'

// install Swiper components
SwiperCore.use([Zoom])



const { Header, Footer, Content } = Layout

export default class App extends Component {
  constructor(props, items) {
    super(props)
    this.state = {
      menuVisible: false
    }
  }

  showMenuDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  render () {
    const { visible } = this.state

    return (
      <Layout className="container">
        <Header>
          <Row>
            <Col span="6" offset={1}>
              <Button onClick={this.showMenuDrawer} icon={<MenuFoldOutlined />}>菜单</Button>
            </Col>
            <Col span="10" className="title">屋兰古镇</Col>
          </Row>
          <Drawer
            title="baseDrawer"
            placement="left"
            closable={true}
            onClose={this.onClose}
            visible={visible}
            key="left"
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Header>
        <Content className="carousel">
          <Row className="carouselBox">
            <Col span="24">
              <Carousel effect="fade">
                <div>
                  <img src={require('../static/image/wulan01.jpg')} alt="屋兰古镇"/>  
                </div>
                <div>
                  <img src={require('../static/image/wulan02.jpg')} alt="屋兰古镇"/>  
                </div>
                <div>
                  <img src={require('../static/image/wulan03.jpg')} alt="屋兰古镇"/>  
                </div>
                <div>
                  <img src={require('../static/image/wulan05.jpg')} alt="屋兰古镇"/>  
                </div>
              </Carousel>  
            </Col>
          </Row>
          <Row className="foodBox">
            <Col span="24">
              <Swiper
                spaceBetween={0}
                slidesPerView={3}
                centeredSlides={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                observer={true}
                observeParents={true}
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={require('../static/image/people01.jpg')} alt="屋兰古镇"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={require('../static/image/people02.jpg')} alt="屋兰古镇"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={require('../static/image/people03.jpg')} alt="屋兰古镇"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={require('../static/image/people04.jpg')} alt="屋兰古镇"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={require('../static/image/people06.jpg')} alt="屋兰古镇"/>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Content>
        <Footer></Footer>
      </Layout>
    )
  }
}