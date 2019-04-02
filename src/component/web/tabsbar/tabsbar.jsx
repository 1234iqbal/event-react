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
              Testimoni
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="pb-8">
          <TabPane tabId="1">
            <Row>
              <Col sm="12" className="pt-4">
                <div>
                  Cokelat umumnya diberikan sebagai hadiah atau bingkisan pada
                  hari raya. <br />
                  Dengan bentuk, corak, dan rasa yang unik, cokelat sering
                  digunakan sebagai ungkapan terima kasih, simpati, atau
                  perhatian bahkan sebagai pernyataan cinta. <br />
                  Cokelat juga telah menjadi salah satu rasa yang paling populer
                  di dunia. Selain
                  <br />
                  dikonsumsi paling umum dalam bentuk cokelat batangan, cokelat
                  juga menjadi bahan minuman hangat dan dingin.
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2" className="pt-4">
            <Row>
              <Col sm="12">
                <div>
                  perfeeeecttttt...... sangaaaaattt sempurnaaa , sangaaaaattt
                  sesuai pesanan . warna nya cantik2 , bahan asli lembut dan
                  tebal , tidak terawang , sangat lebar dan sesuai pemakaian
                  formal atau nonformal dan yg pasti sesuai menutup aurat
                  jilbabnya .
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
