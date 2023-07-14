import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success ">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eos
            excepturi fugiat, voluptate voluptates earum, modi alias unde,
            placeat laudantium facere totam autem iste necessitatibus quia
            minima sit sed. Itaque, sint, minus qui, quo ullam minima doloremque
            voluptate velit facere quaerat neque soluta? Sequi nulla velit culpa
            qui earum itaque, sapiente enim nisi, totam, accusamus cumque
            facilis deleniti nostrum quo quia a eligendi similique consequuntur
            reiciendis iure repudiandae. Impedit et nobis, exercitationem
            doloribus harum enim atque. Iste maxime vero, minus a hic placeat
            iure enim? Praesentium itaque fugit hic necessitatibus assumenda
            odio. Inventore qui fugiat amet expedita odit deleniti, quaerat
            vitae consequatur unde. Tempora expedita voluptatibus dolorem magni
            reiciendis iure, necessitatibus earum accusantium culpa similique
            modi corporis dicta, velit mollitia alias pariatur quas architecto.
            Iusto nam tempore debitis optio eius minus repellendus magni cum qui
            quo doloremque odio pariatur libero eum nobis accusamus, aspernatur
            delectus reiciendis, itaque, voluptatibus quis consectetur. Cumque
            aliquid inventore repellat doloremque totam error et eveniet, eum
            quaerat cum, a ut, aliquam dolor dolores! Sequi dolor ratione
            incidunt asperiores sit libero dolorum perspiciatis autem nobis
            eligendi modi accusamus illo amet nam, natus ullam quo veritatis
            enim magni! Possimus laudantium autem, saepe culpa quo itaque est.
            Aperiam, nemo.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
