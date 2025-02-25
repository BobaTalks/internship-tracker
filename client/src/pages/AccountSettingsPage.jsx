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
import HiddenTextComponent from '../components/HiddenTextComponent';
import SignOutButton from '../components/SignOutButton';
import {
  getUserAccountInfo,
  updateUserEmail,
  updateUserName,
  updateUserPassword,
} from '../utils/api';
import { isEmailValid, isPasswordValid } from '../utils/helper';
import BasePage from './BasePage';

const HIDDEN_PASSWORD_LENGTH = 10;

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
            setValue: setFirstName,
            isHidden: false,
          },
          {
            label: 'Last name',
            value: lastName,
            setValue: setLastName,
            isHidden: false,
          },
        ],
        buttonText: 'Save changes',
        updateUserInfoField: async () => {
          try {
            await updateUserName(firstName, lastName);
          } catch {
            throw Error(
              'There was a problem updating your name. Please try again later'
            );
          }
        },
      },
    },
    {
      editableFieldKey: 'password',
      previewModeFields: {
        label: 'Password',
        value: '*'.repeat(HIDDEN_PASSWORD_LENGTH),
        buttonText: 'Change password',
      },
      editModeFields: {
        fields: [
          {
            label: 'Password',
            value: password,
            setValue: setPassword,
            isHidden: true,
          },
          {
            label: 'Confirm password',
            value: confirmPassword,
            setValue: setConfirmPassword,
            isHidden: true,
          },
        ],
        buttonText: 'Save password',
        updateUserInfoField: async () => {
          if (confirmPassword !== password) {
            throw Error('Your password and confirmation password must match.');
          } else if (!isPasswordValid(password)) {
            throw Error('Your password must be at least 6 characters long.');
          }

          try {
            await updateUserPassword(email);
          } catch {
            throw Error(
              'There was a problem updating your email. Please try again later'
            );
          }
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
            setValue: setEmail,
            isHidden: false,
          },
          {
            label: 'Confirm email',
            value: confirmEmail,
            setValue: setConfirmEmail,
            isHidden: false,
          },
        ],
        buttonText: 'Update email',
        updateUserInfoField: async () => {
          if (confirmEmail !== email) {
            throw Error('Your email and confirmation email must match.');
          } else if (!isEmailValid(email)) {
            throw Error('Your email is invalid.');
          }

          try {
            await updateUserEmail(password);
          } catch {
            throw Error(
              'There was a problem updating your password. Please try again later'
            );
          }
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
                            <HiddenTextComponent
                              label={field.label}
                              hiddenPassword={field.value}
                              setHiddenPassword={field.setValue}
                              setShowErrorMessage={null}
                            />
                          ) : (
                            <TextField
                              value={field.value}
                              label={field.label}
                              fullWidth
                              onChange={(event) =>
                                field.setValue(event.target.value)
                              }
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
                            try {
                              await edit.updateUserInfoField();
                              setEditableFields((prevFields) => ({
                                ...prevFields,
                                [row.editableFieldKey]: false,
                              }));
                              setErrorMessage('');
                            } catch (error) {
                              setErrorMessage(error.message);
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
