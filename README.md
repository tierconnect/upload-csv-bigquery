# Upload CSV to BigQuery Action

This Github action can be used to upload CSV files to BigQuery.

### Sample

```yaml
name: "upload csv to BigQuery"
on:
  pull_request: {}
  push:
      branches: ["main"]

jobs:
  deploy_schemas:
    runs-on: ubuntu-latest
    name: Upload CSV to BigQuery
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Upload csv to bigquery
        uses: tierconnect/upload-csv-bigquery@v0.0.1
        with:
          datasetId: 'bigquery-datasetid'
          tableId: 'dataset-tableid'
          filename: 'file-to-upload.csv'
          application_credentials: '${{ secrets.KEY_SA }}'
          projectId: 'gcloud-projectid'
```

## Configuration

### Required

### `datasetId` (required, string)

The bigquery dataset created in your gcloud project.

Example: `dataset_name`

### `tableId` (required, string)

The bigquery dataset table created in your gcloud project.
> Note: You can use non-existing tables, this action will create the table you choose in the parameter.

Example: `core_table`

### `filename` (required, string)

File to be uploaded to the bigquery table. Bear in mind that CSV file and bigquery table must have the same column format.
> Note: You can use non-existing tables, this action will create the table you choose in the parameter.

Example: `core_table`

### `application_credentials` (required, string)

Google Service Account with permission `BigQuery Admin` to insert data in the specified table. Can be stored as a [repository secret](https://docs.github.com/en/actions/reference/encrypted-secrets)

> Note: This parameter has to be base64 encoded

### `projectId` (required, string)

The full name of the GCP project you want to deploy.

Example: `gcp-company-project`
## Contributing

See the [Contributing Guide](CONTRIBUTING.md) for additional information.
