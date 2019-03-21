import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Container
} from "reactstrap";
import classnames from "classnames";
export default class tabsbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <Container>
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Deskripsi
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Moar Tabs
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab} className="pb-8">
            <TabPane tabId="1">
              <Row>
                <Col sm="12" className="pt-4">
                  <div>
                    Cokelat umumnya diberikan sebagai hadiah atau bingkisan pada
                    hari raya. Dengan bentuk, corak, dan rasa yang unik, cokelat
                    sering digunakan sebagai ungkapan terima kasih, simpati,
                    atau perhatian bahkan sebagai pernyataan cinta. Cokelat juga
                    telah menjadi salah satu rasa yang paling populer di dunia.
                    Selain dikonsumsi paling umum dalam bentuk cokelat batangan,
                    cokelat juga menjadi bahan minuman hangat dan dingin.
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <h4>Tab 1 Contents</h4>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </Container>
    );
  }
}
