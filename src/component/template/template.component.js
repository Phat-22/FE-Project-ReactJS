import { Outlet } from "react-router-dom";
import './template.styles.css'
import HeaderComponent from "../header/header.component";
import FooterComponent from "../footer/footer.component";

const Template = () => {

  return (
    <div>

      <section>
        <HeaderComponent />
      </section>

      <section>
        <Outlet />
      </section>

      <section>
        <FooterComponent />
      </section>

    </div>
  );
};

export default Template;
