import { useCallback, useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { v4 as uuidv4 } from "uuid";
//
import { Tooltip } from "../Tooltip";
import { AddAddressMob } from "./components/Buttons/AddAddressMob";
import { Checkbox } from "./components/Checkbox";
import { SELECT_HOUR, SELECT_SERVICE } from "../../utils/selectData";
import { TEXT_TOOLTIP } from "../../utils/tooltipText";
import { useRouter } from "next/router";
import { Address } from "./components/Address";

const selectsData = { SELECT_HOUR };

export const MixerForm = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [total, setTotal] = useState(0);
  const [sum0, setSum0] = useState("");
  const [sum1, setSum1] = useState("");
  const [sum2, setSum2] = useState("");
  const [sum3, setSum3] = useState("");
  const [sum4, setSum4] = useState("");
  const [totalPre, setTotalPre] = useState(0);
  let sums = [];
  const [addresses, setAddresses] = useState([
    {
      sum: "",
      address: "",
      delay: "0",
      isRemovable: false,
      id: 0,
      key: uuidv4(),
    },
  ]);
  const { t } = useTranslation("formMixer");

  const count = (sumss) => sumss.reduce((acc, num) => acc + num, 0);
  const countTotal = () => {
    if (typeof window !== "undefined") {
      if (addresses.length === 1) {
        const sum0 = parseFloat(localStorage.getItem("sum"));
        setSum0(sum0);
        sums = [sum0];
      }
      if (addresses.length === 2) {
        const sum0 = parseFloat(localStorage.getItem("sum"));
        const sum1 = parseFloat(localStorage.getItem("sum1"));
        setSum0(sum0);
        setSum1(sum1);
        sums = [sum0, sum1];
      }
      if (addresses.length === 3) {
        const sum0 = parseFloat(localStorage.getItem("sum"));
        const sum1 = parseFloat(localStorage.getItem("sum1"));
        const sum2 = parseFloat(localStorage.getItem("sum2"));
        setSum0(sum0);
        setSum1(sum1);
        setSum2(sum2);
        sums = [sum0, sum1, sum2];
      }
      if (addresses.length === 4) {
        const sum0 = parseFloat(localStorage.getItem("sum"));
        const sum1 = parseFloat(localStorage.getItem("sum1"));
        const sum2 = parseFloat(localStorage.getItem("sum2"));
        const sum3 = parseFloat(localStorage.getItem("sum3"));
        setSum0(sum0);
        setSum1(sum1);
        setSum2(sum2);
        setSum3(sum3);
        sums = [sum0, sum1, sum2, sum3];
      }
      if (addresses.length === 5) {
        const sum0 = parseFloat(localStorage.getItem("sum"));
        const sum1 = parseFloat(localStorage.getItem("sum1"));
        const sum2 = parseFloat(localStorage.getItem("sum2"));
        const sum3 = parseFloat(localStorage.getItem("sum3"));
        const sum4 = parseFloat(localStorage.getItem("sum4"));
        setSum0(sum0);
        setSum1(sum1);
        setSum2(sum2);
        setSum3(sum3);
        setSum4(sum4);
        sums = [sum0, sum1, sum2, sum3, sum4];
      }
      const countSums = count(sums);
      setTotalPre(countSums);
      const bonus = 0.007 * addresses.length;
      setTotal(countSums + bonus);
    }
  };

  const percentTotal = () => {
    const totall = total + total * 0.02;
    setTotal(totall);
  };

  const addAddress = useCallback(() => {
    setAddresses((prev) => [
      ...prev,
      {
        sum: "",
        address: "",
        delay: "0",
        isRemovable: true,
        id: addresses.length,
        key: uuidv4(),
      },
    ]);
  }, [addresses]);

  const deleteAddress = useCallback(
    (key) => {
      setAddresses((prev) => prev.filter((address) => address.key !== key));
      localStorage.clear();
    },
    [addresses]
  );

  const countAddress = () => {
    if (addresses.length <= 1) {
      localStorage.clear();
    }
    if (addresses.length >= 2) {
      router.push("/mixing");
      localStorage.clear();
    }
  };
  useEffect(() => {
    if (isChecked) {
      percentTotal();
    } else {
      setTotal(totalPre);
    }
  }, [isChecked]);

  return (
    <form className="mixer-form">
      <div className="mixer-form__scope">
        <Checkbox
          id="score"
          handleCheckout={() => setIsChecked(!isChecked)}
          isChecked={isChecked}
          label={t("checkbox")}
        />

        <Tooltip
          classmodify="tooltip--checkbox-mixer"
          text={t(TEXT_TOOLTIP.mixerCheckbox)}
        />
      </div>

      <div className="mixer-form__params-wrapper">
        <ol className="mixer-form__params-list">
          {addresses.map((address) => (
            <Address
              key={address.key}
              defaultValueField={address}
              amountAddresses={addresses.length}
              selectsData={selectsData}
              addAddress={addAddress}
              deleteAddress={deleteAddress}
              total={countTotal}
            />
          ))}
        </ol>

        {addresses.length !== 5 && <AddAddressMob addAddress={addAddress} />}
      </div>

      <div className="mixer-form__mix mixer-from-mix">
        <div className="mixer-from-mix__button-wrap">
          <button
            type="button"
            className="mixer-from-mix__button"
            onClick={() => countAddress()}
          >
            {t("btn-mix")}
          </button>
        </div>
        <div className="mixer-from-mix__total">
          <div className="mixer-from-mix__total-label">{t("total")}:</div>
          <div className="mixer-from-mix__total-value">
            {total}{" "}
            <div className="mixer-form-service__text">
              + 0.007 btc {t("bonus")}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
