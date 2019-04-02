import React, { Component } from "react";
import { UncontrolledCarousel } from "reactstrap";
export default class carausel extends Component {
  render() {
    const items = [
      {
        src:
          "https://www.dapurumami.com/uploads/slideshow_bottom/kdSuL/Januari-2019-alia-ALT02-REV05.jpg"
      },
      {
        src:
          "https://www.dapurumami.com/uploads/slideshow_bottom/iOWY9/Website-Banner-Slide-2.jpg"
      },
      {
        src:
          "https://www.dapurumami.com/uploads/slideshow_bottom/er9ch/Dapur-Umami_Banner-Happy-Fresh_1920x600.jpg"
      }
    ];
    return (
      <div>
        <UncontrolledCarousel items={items} className="image" />
      </div>
    );
  }
}
