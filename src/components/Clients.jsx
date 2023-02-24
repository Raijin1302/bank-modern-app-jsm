import React from "react";
import { clients } from "../constants";
import styles from "../style";
const Clients = () => {
  return (
    <section
      id="clients"
      className="flex justify-center items-center my-6 py-6"
    >
      <div className="flex justify-center items-center flex-wrap w-full ">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex justify-center items-center flex-1 sm:min-w-[192px] min-w-[120px]"
          >
            <img
              className="sm:min-w-[192px] w-[120px] object-contain"
              src={client.logo}
              alt={client.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
