import { Field } from "./Elements/Field";
import Content from "./Elements/Content/Content";
import { useEffect, useState } from "react";

export const Body = () => {
  const [percent, setPercent] = useState(57);
  const arrayPercent = [];
  //   const addresses =

  //   const Redistribute = () => {
  //     if (addresses.length === 2) {
  //     }
  //     if (addresses.length === 3) {
  //     }
  //     if (addresses.length === 4) {
  //     }
  //     if (addresses.length === 5) {
  //     }
  //   };

  //   useEffect(() => {
  //     for (let i = 0; i < addresses.length + 1; i++) {}
  //   }, []);

  return (
    <div>
      <h1>Подтвердите настройки смешивания</h1>
      <div style={{ marginTop: 50 }}>
        <Field tooltipText="test" label="Распределение смешивания"></Field>
      </div>
      <div className="mixing-box">
        <Content percent={percent} functionPercent={setPercent} />
      </div>
      <div style={{ marginTop: 40 }}>
        <button className="mixing-button">Перераспределить части</button>
      </div>
      <div style={{ marginTop: 60 }}>Комиссия сервиса: </div>
      <hr className="mixing-hr" />
      <div style={{ marginTop: 80 }}>
        <button className="mixer-from-mix__button">Смешать</button>
      </div>
    </div>
  );
};
