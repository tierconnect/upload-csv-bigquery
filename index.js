// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(
  // datasetId = 'vulnerability',
  // tableId = 'github_analytics',
  // filename = 'report.csv'
) {
  // [START bigquery_load_from_file]
  // Imports the Google Cloud client library

  const datasetId = process.env.INPUT_DATASETID;
  const tableId = process.env.INPUT_TABLEID;
  const filename = process.env.INPUT_FILENAME;
  const projectId = process.env.INPUT_PROJECTID;

  if (!projectId) {
    return core.setFailed('projectId is required!');
  }

  const options = {
    keyFilename: '/tmp/account.json',
    projectId: projectId,
  };
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery(options);

  async function loadLocalFile() {
    // Imports a local file into a table.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const filename = '/path/to/file.csv';
    // const datasetId = 'my_dataset';
    // const tableId = 'my_table';

    // Load data from a local file into the table
    const metadata = {
      sourceFormat: 'CSV',
      skipLeadingRows: 1,
      autodetect: true,
  };
    const [job] = await bigquery
      .dataset(datasetId)
      .table(tableId)
      .load(filename,metadata);

    console.log(`Job ${job.id} completed.`);

    // Check the job's status for errors
    const errors = job.status.errors;
    if (errors && errors.length > 0) {
      throw errors;
    }
  }
  // [END bigquery_load_from_file]
  loadLocalFile();
}

main(...process.argv.slice(2));
