module.exports = () => {
  return {
    "code-editor": {
      enabled: true,
      resolve: "./src/plugins/strapi-plugin-code", // path to plugin folder
    },
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_<deploy-hook>",
        apiToken: "<vercel-api-token>",
        appFilter: "your-app-name-on-vercel",
        teamFilter: "your-team-id-on-vercel",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: "websiddu",
          api_key: "134571127318282",
          api_secret: "UgtDqFqxh9Jf75Fb7pLkjwnOpWc",
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  };
};
