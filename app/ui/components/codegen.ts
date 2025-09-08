import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://us-west-2.cdn.hygraph.com/content/cmewz4fb90gmb07kae2mnepuf/master",
  documents: ["app/ui/components/**/*.ts"],
  generates: {
    "app/ui/components/generated/gql/types.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};
export default config;
