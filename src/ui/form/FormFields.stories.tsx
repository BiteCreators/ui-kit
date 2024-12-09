import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "../button/Button";
import { SelectItem } from "../select/Select";
import { FormCheckbox } from "./FormCheckbox";
import { FormDatePicker } from "./FormDatePicker";
import { FormInput } from "./FormInput";
import { FormRadioGroup } from "./FormRadioGroup";
import { FormSelect } from "./FormSelect";
import { FormTextArea } from "./FormTextArea";

export default {};
type FormData = {
  datePicker: Date | null;
  inputText: string;
  isChecked: boolean;
  radioValue: string;
  selected: "option 1" | "option 2";
  texareaText: string;
};

export const FormFiedls = {
  render: () => {
    const { control, handleSubmit } = useForm<FormData>({
      defaultValues: {
        isChecked: false,
        selected: "option 1",
      },
    });

    const submit: SubmitHandler<FormData> = ({
      inputText,
      isChecked,
      radioValue,
      selected,
      texareaText,
    }) => {
      alert(`
      selected: ${selected}   
      isChecked: ${isChecked}
      radioValue: ${radioValue}
      input text: ${inputText}
      textarea text: ${texareaText}
      `);
    };

    return (
      <form className={"flex flex-col gap-5"} onSubmit={handleSubmit(submit)}>
        <FormCheckbox control={control} name={"isChecked"} text={"isChecked"} />
        <FormSelect control={control} name={"selected"}>
          <SelectItem value={"option 1"}>option 1</SelectItem>
          <SelectItem value={"option 2"}>option 2</SelectItem>
        </FormSelect>
        <FormTextArea control={control} name={"texareaText"} />
        <FormInput control={control} name={"inputText"} />
        <FormRadioGroup
          control={control}
          name={"radioValue"}
          options={[
            { label: "RadioBtn1", value: "1" },
            { label: "RadioBtn2", value: "2" },
          ]}
        />
        <FormDatePicker
          control={control}
          inputClassName={"flex justify-between"}
          mode={"single"}
          name={"datePicker"}
        />
        <div>
          <Button>Submit</Button>
        </div>
      </form>
    );
  },
};
