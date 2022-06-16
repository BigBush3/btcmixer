import { useCallback, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { v4 as uuidv4 } from "uuid";
//
import { Tooltip } from "../Tooltip";
import { AddAddressMob } from "./components/Buttons/AddAddressMob";
import { Checkbox } from "./components/Checkbox";
import { Field } from "./components/Field";
import { SelectDefault } from "./components/FieldElement/SelectDefault";
import { Address } from "./components/Address";
import { SELECT_HOUR, SELECT_SERVICE } from "../../utils/selectData";
import { TEXT_TOOLTIP } from "../../utils/tooltipText";
import { useRouter } from "next/router";

const selectsData = { SELECT_HOUR };

export const MixerForm = () => {
  const router = useRouter();
  const [sums, setSums] = useState(["", "xuy", "", "", ""])
  const [addresss, setAddresss] = useState(["", "xuy", "", "", ""])
  const [delays, setDelays] = useState(["", "xuy", "", "", ""])
  const [isChecked, setIsChecked] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      sum: sums[0],
      address: addresss[0],
      delay: delays[0],
      isRemovable: false,
      key: uuidv4(),
    },
  ]);
  const { t } = useTranslation("formMixer");

  const totalSum = () => {

  }

  const handleCheckout = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  const addAddress = useCallback(() => {
    setAddresses((prev) => [
      ...prev,
      {
        sum: sums[addresses.length],
        address: addresss[addresses.length],
        delay: delays[addresses.length],
        isRemovable: true,
        key: uuidv4(),
      },
    ]);
  }, [addresses]);

  const deleteAddress = useCallback(
    (key) => {
      setAddresses((prev) => prev.filter((address) => address.key !== key));
    },
    [addresses]
  );

  const countAddress = () => {
    if (addresses.length >= 2) {
      router.push("/mixing");
      console.log(addresses[0])
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
          <div className="mixer-from-mix__total-value">3.4209 BTC</div>
        </div>
      </div>
    </form>
  );
};
