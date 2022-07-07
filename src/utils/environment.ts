interface Environment {
  REACT_APP_BASE_BACKEND_URL?: string;
  REACT_APP_ENV_NAME?: string;
}

export const getEnvironmentVariables = (): Environment => {
  return process.env as Environment;
};
