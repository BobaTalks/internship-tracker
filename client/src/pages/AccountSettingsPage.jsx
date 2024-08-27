import {
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import BackgroundShapes from '../components/BackgroundShapes';
import CloseAccountButton from '../components/CloseAccountButton';
import ErrorMessage from '../components/ErrorMessage';
import SignOutButton from '../components/SignOutButton';
import {
  getUserAccountInfo,
  updateUserEmail,
  updateUserName,
  updateUserPassword,
} from '../utils/api';
import { isEmailValid, isPasswordValid } from '../utils/helper';
import BasePage from './BasePage';

const AccountSettingsPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
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
        getErrorMessage: async () => {
          try {
            await updateUserName(firstName, lastName);
          } catch {
            return 'There was a problem updating your name. Please try again later';
          }
          return null;
        },
      },
    },
    {
      editableFieldKey: 'password',
      previewModeFields: {
        label: 'Password',
        value: '*'.repeat(password ? password.length : 0),
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
        getErrorMessage: async () => {
          if (confirmPassword !== password) {
            return 'Your password and confirmation password must match.';
          } else if (!isPasswordValid(password)) {
            return 'Your password must be at least 6 characters long.';
          }

          try {
            await updateUserEmail(email);
          } catch {
            return 'There was a problem updating your email. Please try again later';
          }
          return null;
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
        getErrorMessage: async () => {
          if (confirmEmail !== email) {
            return 'Your email and confirmation email must match.';
          } else if (!isEmailValid(email)) {
            return 'Your email is invalid.';
          }

          try {
            await updateUserPassword(password);
          } catch {
            return 'There was a problem updating your password. Please try again later';
          }

          return null;
        },
      },
    },
  ];

  const fetchUserInfo = async () => {
    try {
      const userInfo = await getUserAccountInfo();
      setFirstName(userInfo.firstName);
      setLastName(userInfo.lastName);
      setEmail(userInfo.email);
      setConfirmEmail(userInfo.email);
      setPassword(userInfo.password);
      setConfirmPassword(userInfo.password);
    } catch {
      setErrorMessage(
        'There was a problem loading your user information. Please try agian'
      );
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

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
                          onClick={async () => {
                            const errorMessage = await edit.getErrorMessage();
                            setErrorMessage(errorMessage);
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
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              pt="2rem"
            >
              <SignOutButton />
              <CloseAccountButton />
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </BasePage>
  );
};

export default AccountSettingsPage;
