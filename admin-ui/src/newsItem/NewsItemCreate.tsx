import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ContactTitle } from "../contact/ContactTitle";
import { UserTitle } from "../user/UserTitle";

export const NewsItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Body" multiline source="body" />
        <ReferenceInput
          source="contact.id"
          reference="Contact"
          label="Contacts"
        >
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="Created By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Slug" source="slug" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Published", value: "Published" },
            { label: "Draft", value: "Draft" },
            { label: "Expired", value: "Expired" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="tags"
          label="Tags"
          choices={[
            { label: "Politiek", value: "Politiek" },
            { label: "Misdaad", value: "Misdaad" },
            { label: "Finansies", value: "Finansies" },
            { label: "Hofsake", value: "Hofsake" },
            { label: "Omgewing", value: "Omgewing" },
            { label: "Vermaak", value: "Vermaak" },
            { label: "Sport", value: "Sport" },
            { label: "Ongelukke", value: "Ongelukke" },
            { label: "Dagboek", value: "Dagboek" },
            { label: "Internasionaal", value: "Internasionaal" },
            { label: "Tegnologie", value: "Tegnologie" },
            { label: "Gesondheid", value: "Gesondheid" },
            { label: "Arbeid", value: "Arbeid" },
            { label: "Plaaslik", value: "Plaaslik" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
