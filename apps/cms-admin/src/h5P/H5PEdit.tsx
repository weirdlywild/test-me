import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const H5PEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Accessibility" source="accessibility" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Discipline" source="discipline" />
        <TextInput label="Language" source="language" />
        <TextInput
          label="LearningOutcomes"
          multiline
          source="learningOutcomes"
        />
        <TextInput label="Owner" source="owner" />
        <SelectInput
          source="subject"
          label="Subject"
          choices={[{ label: "Test", value: "test" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
        <TextInput label="Topic" source="topic" />
      </SimpleForm>
    </Edit>
  );
};
