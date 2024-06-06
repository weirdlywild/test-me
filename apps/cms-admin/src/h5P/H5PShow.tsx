import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const H5PShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Accessibility" source="accessibility" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Discipline" source="discipline" />
        <TextField label="ID" source="id" />
        <TextField label="Language" source="language" />
        <TextField label="LearningOutcomes" source="learningOutcomes" />
        <TextField label="Owner" source="owner" />
        <TextField label="Subject" source="subject" />
        <TextField label="Title" source="title" />
        <TextField label="Topic" source="topic" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
