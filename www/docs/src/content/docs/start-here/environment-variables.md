---
title: Environment Variables
description: A brief overview of the environment variables used in Astro StudioCMS.
---

For Astro StudioCMS to work correctly, you must set up the correct environment variables. These variables are essential for establishing a secure connection to Astro DB and authenticating with the Astro StudioCMS API. Without correctly configuring these environment variables, the application will not function as intended.

You can create a `.env` file in the root directory of your project and add the required environment variables. The `.env` file is a text file that contains key-value pairs of environment variables. The environment variables are read by the application at runtime.

For future reference on how to work with environment variables within Astro you can checkout [Environment Variables](https://docs.astro.build/guides/environment-variables) from the Astro documentation.

## Required Environment Variables

`ASTRO_STUDIO_APP_TOKEN` is required to connect to the database.

```bash
ASTRO_STUDIO_APP_TOKEN=your_app_token
```

## Authentication Environment Variables

Currently there are 2 ways to authenticate with Astro StudioCMS:

### GitHub

To authenticate with GitHub, you need to add the following environment variables to your `.env` file:

```bash
# credentials for GitHub OAuth
CMS-GITHUB_CLIENT_ID=your_client_id
CMS-GITHUB_CLIENT_SECRET=your_client_secret
```

### Username and Password

Alternatively, you can authenticate with Astro StudioCMS using your username and password which doesn't require any additional environment variables.
