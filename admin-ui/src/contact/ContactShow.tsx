import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONTACT_TITLE_FIELD } from "./ContactTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ContactShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cellphone number" source="cellphoneNumber" />
        <TextField label="Company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Surname" source="surname" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="NewsItem"
          target="ContactId"
          label="News Items"
        >
          <Datagrid rowClick="show">
            <TextField label="Body" source="body" />
            <ReferenceField
              label="Contacts"
              source="contact.id"
              reference="Contact"
            >
              <TextField source={CONTACT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Slug" source="slug" />
            <TextField label="Status" source="status" />
            <TextField label="Tags" source="tags" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
