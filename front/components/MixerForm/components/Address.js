import { PropTypes } from "prop-types";
import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";
//
import { AddAddress } from "./Buttons/AddAddress";
import { RemoveAddress } from "./Buttons/RemoveAddress";
import { Field } from "./Field";
import { InputAddress } from "./FieldElement/InputAddress";
import { SelectDefault } from "./FieldElement/SelectDefault";
import { TEXT_TOOLTIP } from "../../../utils/tooltipText";
import { InputSum } from "./FieldElement/InputSum";

export const Address = ({
  amountAddresses,
  selectsData,
  defaultValueField,
  addAddress,
  deleteAddress,
}) => {
  const { t } = useTranslation("formMixer");
  const { sum, address, delay, isRemovable, key } = defaultValueField;

  return (
    <li
      className={classNames("mixer-form__params mixer-form-params", {
        "mixer-form-params--multiple": amountAddresses !== 1,
      })}
    >
      <Field classmodify="mixer-form-params__sum" label={t("label-sum")}>
        <InputSum value={sum}/>
      </Field>

      <Field
        classmodify="mixer-form-params__address"
        label={t("label-address")}
      >
        <InputAddress />
      </Field>

      <Field
        classmodify="mixer-form-params__delay"
        label={t("label-delay")}
        tooltipText={t(TEXT_TOOLTIP.mixerDelay)}
      >
        <SelectDefault
          selectData={selectsData.SELECT_HOUR}
          defaultValue={delay}
          scale={t("measuring-quantity")}
        />
      </Field>

      <div className="mixer-form-params__add">
        {isRemovable ? (
          <RemoveAddress
            deleteAddress={deleteAddress}
            rowKey={key}
            classmodify="btn-another-desktop--add"
          />
        ) : (
          amountAddresses !== 5 && <AddAddress addAddress={addAddress} />
        )}
      </div>
    </li>
  );
};

Address.propTypes = {
  amountAddresses: PropTypes.number.isRequired,
  selectsData: PropTypes.object.isRequired,
  defaultValueField: PropTypes.object.isRequired,
  addAddress: PropTypes.func.isRequired,
  deleteAddress: PropTypes.func.isRequired,
};
