import {
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import BackgroundShapes from '../components/BackgroundShapes';
import ErrorMessage from '../components/ErrorMessage';
import { MOCK_SIGNED_IN_USER } from '../utils/mockData';
import BasePage from './BasePage';

const AccountSettingsPage = () => {
  const [firstName, setFirstName] = useState(MOCK_SIGNED_IN_USER.firstName);
  const [lastName, setLastName] = useState(MOCK_SIGNED_IN_USER.lastName);
  const [password, setPassword] = useState(MOCK_SIGNED_IN_USER.password);
  const [confirmPassword, setConfirmPassword] = useState(
    MOCK_SIGNED_IN_USER.password
  );
  const [email, setEmail] = useState(MOCK_SIGNED_IN_USER.email);
  const [confirmEmail, setConfirmEmail] = useState(MOCK_SIGNED_IN_USER.email);
  const [errorMessage, setErrorMessage] = useState(null);

  const [editableFields, setEditableFields] = useState({
    name: false,
    password: false,
    email: false,
  });

  const rowFields = [
    {
      editableFieldKey: 'name',
      previewModeFields: {
        label: 'Name',
        value: firstName + ' ' + lastName,
        buttonText: 'Change name',
      },
      editModeFields: {
        fields: [
          {
            label: 'First name',
            value: firstName,
            isHidden: false,
            onChange: (event) => setFirstName(event.target.value),
          },
          {
            label: 'Last name',
            value: lastName,
            isHidden: false,
            onChange: (event) => setLastName(event.target.value),
          },
        ],
        buttonText: 'Save changes',
        onSave: null,
      },
    },
    {
      editableFieldKey: 'password',
      previewModeFields: {
        label: 'Password',
        value: '*'.repeat(password.length),
        buttonText: 'Change password',
      },
      editModeFields: {
        fields: [
          {
            label: 'Password',
            value: password,
            isHidden: true,
            onChange: (event) => {
              setPassword(event.target.value);
              setConfirmPassword('');
            },
          },
          {
            label: 'Confirm password',
            value: confirmPassword,
            isHidden: true,
            onChange: (event) => setConfirmPassword(event.target.value),
          },
        ],
        buttonText: 'Save password',
        onSave: () => {
          confirmPassword != password // also check password 6 chars long
            ? setErrorMessage(
                'Your password and confirmation password must match.'
              )
            : setErrorMessage(null);
        },
      },
    },
    {
      editableFieldKey: 'email',
      previewModeFields: {
        label: 'Email',
        value: email,
        buttonText: 'Change email',
      },
      editModeFields: {
        fields: [
          {
            label: 'Email',
            value: email,
            isHidden: false,
            onChange: (event) => {
              setEmail(event.target.value);
              setConfirmEmail('');
            },
          },
          {
            label: 'Confirm email',
            value: confirmEmail,
            isHidden: false,
            onChange: (event) => setConfirmEmail(event.target.value),
          },
        ],
        buttonText: 'Update email',
        onSave: () => {
          confirmEmail != email // also check email valid
            ? setErrorMessage('Your email and confirmation email must match.')
            : setErrorMessage(null);
          return true;
        },
      },
    },
  ];

  console.log(editableFields);

  return (
    <BasePage>
      <BackgroundShapes />
      <Grid zIndex={0} container justifyContent="center" alignItems="center">
        <Grid item xs={12} lg={10}>
          <Card>
            <Typography variant="pageTitle">Account Settings</Typography>
            {rowFields.map((row) => {
              const canEdit = editableFields[row.editableFieldKey];
              const preview = row.previewModeFields;
              const edit = row.editModeFields;
              const editFieldsFlex = 12 / (edit.fields.length + 1);

              return (
                <Grid
                  container
                  key={row.editableFieldKey}
                  pt="1.5rem"
                  alignItems="center"
                  spacing={4}
                >
                  {canEdit ? (
                    <>
                      {edit.fields.map((field) => (
                        <Grid
                          item
                          sm={editFieldsFlex}
                          xs={12}
                          key={field.label}
                        >
                          {field.isHidden ? (
                            <TextField // replace with HiddenTextComponent
                              value={field.value}
                              label={field.label}
                              fullWidth
                              onChange={field.onChange}
                            />
                          ) : (
                            <TextField
                              value={field.value}
                              label={field.label}
                              fullWidth
                              onChange={field.onChange}
                            />
                          )}
                        </Grid>
                      ))}
                      <Grid
                        container
                        item
                        sm={editFieldsFlex}
                        xs={12}
                        justifyContent={{ sm: 'flex-end', xs: 'flex-start' }}
                      >
                        <Button
                          variant="transparent"
                          sx={{
                            borderRadius: '2rem',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: 'secondary.main',
                            color: 'secondary.main',
                          }}
                          onClick={() => {
                            edit.onSave(); // fix later
                            if (!errorMessage) {
                              setEditableFields((prevFields) => ({
                                ...prevFields,
                                [row.editableFieldKey]: false,
                              }));
                            }
                          }}
                        >
                          {edit.buttonText}
                        </Button>
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid item md={8} sm={6} xs={12}>
                        <Typography
                          fontSize="1rem"
                          fontWeight="bold"
                          pb="0.5rem"
                        >
                          {preview.label}
                        </Typography>
                        <Typography
                          fontSize="1rem"
                          fontWeight={400}
                          lineHeight="1.5rem"
                          letterSpacing="0.03125rem"
                        >
                          {preview.value}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={4}
                        sm={6}
                        xs={12}
                        container
                        justifyContent={{ sm: 'flex-end', xs: 'flex-start' }}
                      >
                        <Button
                          variant="rounded"
                          color="primary"
                          onClick={() => {
                            setEditableFields((prevFields) => ({
                              ...prevFields,
                              [row.editableFieldKey]: true,
                            }));
                          }}
                        >
                          {preview.buttonText}
                        </Button>
                      </Grid>
                    </>
                  )}
                </Grid>
              );
            })}
            {errorMessage && (
              <ErrorMessage message={errorMessage} sx={{ mt: '1.5rem' }} />
            )}
          </Card>
        </Grid>
      </Grid>
    </BasePage>
  );
};

export default AccountSettingsPage;
