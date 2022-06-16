import { useCallback, useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { v4 as uuidv4 } from "uuid";
//
import { Tooltip } from "../Tooltip";
import { AddAddressMob } from "./components/Buttons/AddAddressMob";
import { Checkbox } from "./components/Checkbox";
import { Field } from "./components/Field";
import { SelectDefault } from "./components/FieldElement/SelectDefault";
import { SELECT_HOUR, SELECT_SERVICE } from "../../utils/selectData";
import { TEXT_TOOLTIP } from "../../utils/tooltipText";
import { useRouter } from "next/router";
import { Address } from "./components/Address";

const selectsData = { SELECT_HOUR };

export const MixerForm = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [total, setTotal] = useState(0);
  let sums = ["", "", "", "", ""];
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
  setInterval(function () {
    if (typeof window !== "undefined") {
      if (addresses.length === 1) {
        const sum0 = parseFloat(localStorage.getItem("sum"));
        sums = [sum0];
      }
      if (addresses.length === 2) {
        const sum0 = parseFloat(localStorage.getItem("sum"));
        const sum1 = parseFloat(localStorage.getItem("sum1"));
        sums = [sum0, sum1];
      }
      if (addresses.length === 3) {
        const sum0 = parseFloat(localStorage.getItem("sum"));
        const sum1 = parseFloat(localStorage.getItem("sum1"));
        const sum2 = parseFloat(localStorage.getItem("sum2"));
        sums = [sum0, sum1, sum2];
      }
      if (addresses.length === 4) {
        const sum0 = parseFloat(localStorage.getItem("sum"));
        const sum1 = parseFloat(localStorage.getItem("sum1"));
        const sum2 = parseFloat(localStorage.getItem("sum2"));
        const sum3 = parseFloat(localStorage.getItem("sum3"));
        sums = [sum0, sum1, sum2, sum3];
      }
      if (addresses.length === 5) {
        const sum0 = parseFloat(localStorage.getItem("sum"));
        const sum1 = parseFloat(localStorage.getItem("sum1"));
        const sum2 = parseFloat(localStorage.getItem("sum2"));
        const sum3 = parseFloat(localStorage.getItem("sum3"));
        const sum4 = parseFloat(localStorage.getItem("sum4"));
        sums = [sum0, sum1, sum2, sum3, sum4];
      }
      const count = (sumss) => sumss.reduce((acc, num) => acc + num, 0);
      const total = count(sums);
      setTotal(total);
    }
  }, 1500);

  const handleCheckout = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

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
      localStorage.clear()
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

  return (
    <form className="mixer-form">
      <div className="mixer-form__scope">
        <Checkbox
          id="score"
          handleCheckout={handleCheckout}
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
            />
          ))}
        </ol>

        {addresses.length !== 5 && <AddAddressMob addAddress={addAddress} />}
      </div>

      <div className="mixer-form__service mixer-form-service">
        <Field
          classmodify="mixer-form-service__service"
          label={t("label-service")}
          tooltipText={t(TEXT_TOOLTIP.mixerService)}
        >
          <SelectDefault
            selectData={SELECT_SERVICE}
            scale="%"
            defaultValue="1.218"
          />
        </Field>

        <div className="mixer-form-service__text">+ 0.007 btc {t("bonus")}</div>
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
          <div className="mixer-from-mix__total-value">{total}</div>
        </div>
      </div>
    </form>
  );
};
